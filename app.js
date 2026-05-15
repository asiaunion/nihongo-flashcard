class FlashcardApp {
  constructor() {
    this.appEl = document.getElementById('app');
    
    try {
      this.completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');
      if (!Array.isArray(this.completedLessons)) this.completedLessons = [];
    } catch (e) {
      this.completedLessons = [];
    }
    
    this.currentLesson = null;
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.hasFlippedOnce = localStorage.getItem('hasFlippedOnce') === 'true';
    
    this.touchStartX = 0;
    this.touchEndX = 0;
    
    this.voices = [];
    const loadVoices = () => {
      this.voices = window.speechSynthesis.getVoices();
      console.log(`Loaded ${this.voices.length} voices.`);
    };
    if ('speechSynthesis' in window) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
      // Chrome/Safari fallback: sometimes onvoiceschanged doesn't fire if voices are already cached
      setTimeout(loadVoices, 500);
      setTimeout(loadVoices, 1000);
    }
    
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('keydown', (e) => this.handleKeydown(e));
    
    // Smart preload: mascot only at startup; lesson images load on demand
    this.preloadMascot();
    this.handleRoute();
  }
  
  preloadMascot() {
    const img = new Image();
    img.src = 'images/joseph_anime.webp';
  }

  // Preload images for a specific lesson; optionally prefetch next lesson after idle
  preloadLessonImages(lesson, prefetchNext = true) {
    lesson.cards.forEach(card => {
      const img = new Image();
      img.src = card.image;
    });

    if (prefetchNext) {
      // Find and prefetch the next lesson's images after 1s idle
      setTimeout(() => {
        const allLessons = CURRICULUM.phases.flatMap(p => p.lessons);
        const idx = allLessons.findIndex(l => l.id === lesson.id);
        const nextLesson = allLessons[idx + 1];
        if (nextLesson) {
          nextLesson.cards.forEach(card => {
            const img = new Image();
            img.src = card.image;
          });
        }
      }, 1000);
    }
  }
  
  playTTS(text) {
    if (!('speechSynthesis' in window)) return;

    // 1. Cancel previous speech
    window.speechSynthesis.cancel();

    // 2. Create utterance with a Japanese period to force natural sentence-final intonation
    const speakText = text.endsWith('。') ? text : text + '。';
    const utterance = new SpeechSynthesisUtterance(speakText);
    utterance.lang = 'ja-JP';
    
    // 3. Tuning for natural feel: 
    // Detect iOS/iPadOS as WebKit plays speech much faster than macOS/Chrome
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    utterance.rate = isIOS ? 0.6 : 0.95;
    utterance.pitch = isIOS ? 1.0 : 1.05;
    utterance.volume = 1.0;

    // 4. Advanced Voice Selection Logic
    if (this.voices && this.voices.length > 0) {
      const jaVoices = this.voices.filter(v => v.lang.startsWith('ja'));
      
      if (jaVoices.length > 0) {
        // Priority Score System
        const getScore = (v) => {
          let score = 0;
          const name = v.name.toLowerCase();
          
          // MacOS/iOS Siri voices are top-tier natural
          if (name.includes('siri')) score += 100;
          // Google Cloud-based voices in Chrome are excellent
          if (name.includes('google')) score += 90;
          // "Enhanced" or "Premium" versions of system voices
          if (name.includes('enhanced') || name.includes('premium')) score += 80;
          // Specific high-quality voice names
          if (name.includes('kyoko')) score += 50;
          if (name.includes('otoya')) score += 40;
          if (name.includes('o-ren') || name.includes('hattori')) score += 30;
          
          return score;
        };

        const sortedVoices = jaVoices.sort((a, b) => getScore(b) - getScore(a));
        utterance.voice = sortedVoices[0];
        
        // Log for debugging/verification if needed
        console.log(`Selected Voice: ${utterance.voice.name}`);
      }
    }

    // 5. Speak with a tiny delay to ensure cancel() finished cleanly on some browsers
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 50);
  }
  
  handleRoute() {
    const hash = window.location.hash || '#home';
    if (hash === '#home') {
      this.renderHome();
    } else if (hash.startsWith('#lesson/')) {
      const lessonId = parseInt(hash.split('/')[1]);
      this.startLesson(lessonId);
    }
  }
  
  markLessonCompleted(lessonId) {
    if (!this.completedLessons.includes(lessonId)) {
      this.completedLessons.push(lessonId);
      localStorage.setItem('completedLessons', JSON.stringify(this.completedLessons));
    }
  }
  
  findLesson(id) {
    for (const phase of CURRICULUM.phases) {
      const lesson = phase.lessons.find(l => l.id === id);
      if (lesson) return { lesson, phase };
    }
    return null;
  }
  
  renderHome() {
    this.currentLesson = null;
    let html = `
      <div class="home-view">
        <div class="header">
          <img src="images/joseph_anime.webp" class="mascot" alt="Joseph Mascot" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNjAiIGZpbGw9IiNGRkI1QzIiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNDBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPijjg6vjgbwpPC90ZXh0Pjwvc3ZnPg=='">
          <h1 class="title">${CURRICULUM.appTitle}</h1>
        </div>
    `;
    
    CURRICULUM.phases.forEach(phase => {
      html += `
        <div class="phase-section">
          <h2 class="phase-title">${phase.title}</h2>
          <div class="lesson-grid">
      `;
      
      phase.lessons.forEach(lesson => {
        const isCompleted = this.completedLessons.includes(lesson.id);
        let displayRow = lesson.row;
        // Clean up the text by removing anything after '行' and wrapping '行' in a smaller span.
        // This drops '(탁음)' and '(반탁음)' which cause text overflow in the UI grid.
        displayRow = displayRow.replace(/行.*/, '<span class="row-sub">行</span>');
        
        html += `
            <a href="#lesson/${lesson.id}" class="lesson-card">
              ${isCompleted ? '<div class="completed-check">✓</div>' : ''}
              <div class="lesson-row">${displayRow}</div>
            </a>
        `;
      });
      
      html += `</div></div>`;
    });
    
    html += `</div>`;
    this.appEl.innerHTML = html;
  }
  
  startLesson(lessonId) {
    const found = this.findLesson(lessonId);
    if (!found) {
      window.location.hash = '#home';
      return;
    }
    this.currentLesson = found.lesson;
    this.currentPhase = found.phase;
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.preloadLessonImages(found.lesson);
    this.renderLesson();
  }
  
  renderLesson() {
    if (!this.currentLesson) return;
    
    const card = this.currentLesson.cards[this.currentCardIndex];
    const totalCards = this.currentLesson.cards.length;
    const isLastCard = this.currentCardIndex === totalCards - 1;
    const bgColor = this.currentPhase.type === 'hiragana' ? 'var(--peach)' : 'var(--mint)';
    
    // Format highlighted word
    let wordHtml = '';
    for (let i = 0; i < card.wordReading.length; i++) {
      if (i === card.highlightIndex) {
        wordHtml += `<span class="highlight">${card.wordReading[i]}</span>`;
      } else {
        wordHtml += card.wordReading[i];
      }
    }
    
    let html = `
      <div class="lesson-view">
        <div class="top-bar">
          <a href="#home" class="home-btn">🏠 홈</a>
          <div class="lesson-title-display">${this.currentLesson.row}</div>
        </div>
        
        <div class="thumbnail-bar">
          ${this.currentLesson.cards.map((_, idx) => `
            <div class="thumb-dot ${idx === this.currentCardIndex ? 'active' : ''}" data-idx="${idx}"></div>
          `).join('')}
        </div>
        
        <div class="flashcard-container" id="flashcard-container">
          <div class="flashcard ${this.isFlipped ? 'flipped' : ''} ${!this.hasFlippedOnce ? 'bounce' : ''}" id="flashcard">
            <div class="card-face card-front" style="background-color: ${bgColor};">
              <img src="${card.image}" class="card-image" alt="illustration" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPijjgIxf44CMKTwvdGV4dD48L3N2Zz4='">
              <div class="card-char">${card.character}</div>
            </div>
            <div class="card-face card-back">
              <div class="word-reading">${wordHtml}</div>
              <div class="word-meaning">${card.meaningKo}</div>
              <button class="speaker-btn" id="manual-tts-btn" title="다시 듣기">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
            </div>
          </div>
          ${!this.hasFlippedOnce ? '<div class="hint-text visible" id="hint-text">탭해서 뒤집어보세요!</div>' : ''}
        </div>
        
        <div class="nav-bar" ${isLastCard && this.isFlipped ? 'style="display:none;"' : ''}>
          <button class="nav-btn" id="prev-btn" ${this.currentCardIndex === 0 ? 'disabled' : ''}>◀</button>
          <div class="nav-status">${this.currentCardIndex + 1} / ${totalCards}</div>
          <button class="nav-btn" id="next-btn" ${isLastCard ? 'disabled' : ''}>▶</button>
        </div>
        
        ${isLastCard ? `
          <button class="done-btn" id="done-btn" style="display: ${this.isFlipped ? 'flex' : 'none'};">
            ✨ 다 봤어요! ✨
          </button>
        ` : ''}
      </div>
    `;
    
    this.appEl.innerHTML = html;
    this.attachLessonEvents();
  }
  
  attachLessonEvents() {
    const container = document.getElementById('flashcard-container');
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const doneBtn = document.getElementById('done-btn');
    const thumbDots = document.querySelectorAll('.thumb-dot');
    
    container.addEventListener('click', () => {
      this.isFlipped = !this.isFlipped;
      flashcard.classList.toggle('flipped');
      
      if (this.isFlipped) {
        const card = this.currentLesson.cards[this.currentCardIndex];
        // Natural pause before speaking when card is flipped (300ms)
        setTimeout(() => {
          if (this.isFlipped) this.playTTS(card.wordReading);
        }, 300);
      }
      
      if (!this.hasFlippedOnce) {
        this.hasFlippedOnce = true;
        localStorage.setItem('hasFlippedOnce', 'true');
        flashcard.classList.remove('bounce');
        const hint = document.getElementById('hint-text');
        if (hint) hint.classList.remove('visible');
      }
      
      // If last card and flipped, show done button, hide nav
      const isLastCard = this.currentCardIndex === this.currentLesson.cards.length - 1;
      if (isLastCard) {
        const doneBtn = document.getElementById('done-btn');
        const navBar = document.querySelector('.nav-bar');
        if (doneBtn && navBar) {
          if (this.isFlipped) {
             doneBtn.style.display = 'flex';
             navBar.style.display = 'none';
          } else {
             doneBtn.style.display = 'none';
             navBar.style.display = 'flex';
          }
        }
      }
    });

    // Manual TTS button event
    const manualBtn = document.getElementById('manual-tts-btn');
    if (manualBtn) {
      manualBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Don't flip the card back
        const card = this.currentLesson.cards[this.currentCardIndex];
        this.playTTS(card.wordReading);
        
        // Visual feedback
        manualBtn.classList.add('playing');
        setTimeout(() => manualBtn.classList.remove('playing'), 600);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.navigateCard(-1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.navigateCard(1));
    }
    
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        this.markLessonCompleted(this.currentLesson.id);
        window.location.hash = '#home';
      });
    }
    
    thumbDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const idx = parseInt(e.target.getAttribute('data-idx'));
        if (idx !== this.currentCardIndex) {
          this.currentCardIndex = idx;
          this.isFlipped = false;
          this.renderLesson();
        }
      });
    });
    
    // Swipe gestures
    container.addEventListener('touchstart', e => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    container.addEventListener('touchend', e => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, {passive: true});
  }
  
  handleSwipe() {
    const diff = this.touchEndX - this.touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && this.currentCardIndex > 0) {
        // Swipe right -> prev
        this.navigateCard(-1);
      } else if (diff < 0 && this.currentCardIndex < this.currentLesson.cards.length - 1) {
        // Swipe left -> next
        this.navigateCard(1);
      }
    }
  }
  
  handleKeydown(e) {
    if (!this.currentLesson) return;
    if (e.key === 'ArrowLeft' && this.currentCardIndex > 0) {
      this.navigateCard(-1);
    } else if (e.key === 'ArrowRight' && this.currentCardIndex < this.currentLesson.cards.length - 1) {
      this.navigateCard(1);
    } else if (e.key === ' ' || e.key === 'Enter') {
      const container = document.getElementById('flashcard-container');
      if (container) container.click();
    }
  }
  
  navigateCard(dir) {
    const newIdx = this.currentCardIndex + dir;
    if (newIdx >= 0 && newIdx < this.currentLesson.cards.length) {
      this.currentCardIndex = newIdx;
      this.isFlipped = false;
      this.renderLesson();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new FlashcardApp();
});
