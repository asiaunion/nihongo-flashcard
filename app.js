const CURRICULUM = {
  appTitle: "にほんご フラッシュカード",
  phases: [
    {
      id: "hiragana",
      title: "히라가나",
      type: "hiragana", 
      lessons: [
        {
          id: 1,
          title: "Lesson 1",
          row: "あ行",
          cards: [
            { character: "あ", word: "あり", wordReading: "あり", meaningKo: "개미", image: "images/realistic/ari_realistic.png", highlightIndex: 0 },
            { character: "い", word: "いぬ", wordReading: "いぬ", meaningKo: "강아지", image: "images/realistic/inu_realistic.png", highlightIndex: 0 },
            { character: "う", word: "うさぎ", wordReading: "うさぎ", meaningKo: "토끼", image: "images/realistic/usagi_realistic.png", highlightIndex: 0 },
            { character: "え", word: "えんぴつ", wordReading: "えんぴつ", meaningKo: "연필", image: "images/realistic/enpitsu_realistic.png", highlightIndex: 0 },
            { character: "お", word: "おにぎり", wordReading: "おにぎり", meaningKo: "주먹밥", image: "images/realistic/onigiri_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 2,
          title: "Lesson 2",
          row: "か行",
          cards: [
            { character: "か", word: "かえる", wordReading: "かえる", meaningKo: "개구리", image: "images/realistic/kaeru_realistic.png", highlightIndex: 0 },
            { character: "き", word: "きりん", wordReading: "きりん", meaningKo: "기린", image: "images/realistic/kirin_realistic.png", highlightIndex: 0 },
            { character: "く", word: "くるま", wordReading: "くるま", meaningKo: "자동차", image: "images/realistic/kuruma_realistic.png", highlightIndex: 0 },
            { character: "け", word: "けむし", wordReading: "けむし", meaningKo: "애벌레", image: "images/realistic/kemushi_realistic.png", highlightIndex: 0 },
            { character: "こ", word: "こねこ", wordReading: "こねこ", meaningKo: "아기 고양이", image: "images/realistic/koneko_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 3,
          title: "Lesson 3",
          row: "さ行",
          cards: [
            { character: "さ", word: "さかな", wordReading: "さかな", meaningKo: "물고기", image: "images/realistic/sakana_realistic.png", highlightIndex: 0 },
            { character: "し", word: "しまうま", wordReading: "しまうま", meaningKo: "얼룩말", image: "images/realistic/shimauma_realistic.png", highlightIndex: 0 },
            { character: "す", word: "すいか", wordReading: "すいか", meaningKo: "수박", image: "images/realistic/suika_realistic.png", highlightIndex: 0 },
            { character: "せ", word: "せんせい", wordReading: "せんせい", meaningKo: "선생님", image: "images/realistic/sensei_realistic.png", highlightIndex: 0 },
            { character: "そ", word: "そら", wordReading: "そら", meaningKo: "하늘", image: "images/realistic/sora_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 4,
          title: "Lesson 4",
          row: "た行",
          cards: [
            { character: "た", word: "たまご", wordReading: "たまご", meaningKo: "달걀", image: "images/realistic/tamago_realistic.png", highlightIndex: 0 },
            { character: "ち", word: "ちきゅう", wordReading: "ちきゅう", meaningKo: "지구", image: "images/realistic/chikyuu_realistic.png", highlightIndex: 0 },
            { character: "つ", word: "つき", wordReading: "つき", meaningKo: "달", image: "images/realistic/tsuki_realistic.png", highlightIndex: 0 },
            { character: "て", word: "てんとうむし", wordReading: "てんとうむし", meaningKo: "무당벌레", image: "images/realistic/tentoumushi_realistic.png", highlightIndex: 0 },
            { character: "と", word: "とけい", wordReading: "とけい", meaningKo: "시계", image: "images/realistic/tokei_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 5,
          title: "Lesson 5",
          row: "な行",
          cards: [
            { character: "な", word: "なす", wordReading: "なす", meaningKo: "가지", image: "images/realistic/nasu_realistic.png", highlightIndex: 0 },
            { character: "に", word: "にじ", wordReading: "にじ", meaningKo: "무지개", image: "images/realistic/niji_realistic.png", highlightIndex: 0 },
            { character: "ぬ", word: "ぬいぐるみ", wordReading: "ぬいぐるみ", meaningKo: "인형", image: "images/realistic/nuigurumi_realistic.png", highlightIndex: 0 },
            { character: "ね", word: "ねこ", wordReading: "ねこ", meaningKo: "고양이", image: "images/realistic/neko_realistic.png", highlightIndex: 0 },
            { character: "の", word: "のり", wordReading: "のり", meaningKo: "김", image: "images/realistic/nori_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 6,
          title: "Lesson 6",
          row: "は行",
          cards: [
            { character: "は", word: "はち", wordReading: "はち", meaningKo: "꿀벌", image: "images/realistic/hachi_realistic.png", highlightIndex: 0 },
            { character: "ひ", word: "ひこうき", wordReading: "ひこうき", meaningKo: "비행기", image: "images/realistic/hikouki_realistic.png", highlightIndex: 0 },
            { character: "ふ", word: "ふね", wordReading: "ふね", meaningKo: "배", image: "images/realistic/fune_realistic.png", highlightIndex: 0 },
            { character: "へ", word: "へび", wordReading: "へび", meaningKo: "뱀", image: "images/realistic/hebi_realistic.png", highlightIndex: 0 },
            { character: "ほ", word: "ほし", wordReading: "ほし", meaningKo: "별", image: "images/realistic/hoshi_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 7,
          title: "Lesson 7",
          row: "ま行",
          cards: [
            { character: "ま", word: "まど", wordReading: "まど", meaningKo: "창문", image: "images/realistic/mado_realistic.png", highlightIndex: 0 },
            { character: "み", word: "みかん", wordReading: "みかん", meaningKo: "귤", image: "images/realistic/mikan_realistic.png", highlightIndex: 0 },
            { character: "む", word: "むし", wordReading: "むし", meaningKo: "벌레", image: "images/realistic/mushi_realistic.png", highlightIndex: 0 },
            { character: "め", word: "めがね", wordReading: "めがね", meaningKo: "안경", image: "images/realistic/megane_realistic.png", highlightIndex: 0 },
            { character: "も", word: "もも", wordReading: "もも", meaningKo: "복숭아", image: "images/realistic/momo_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 8,
          title: "Lesson 8",
          row: "ら行",
          cards: [
            { character: "ら", word: "らっぱ", wordReading: "らっぱ", meaningKo: "나팔", image: "images/realistic/rappa_realistic.png", highlightIndex: 0 },
            { character: "り", word: "りんご", wordReading: "りんご", meaningKo: "사과", image: "images/realistic/ringo_realistic.png", highlightIndex: 0 },
            { character: "る", word: "さる", wordReading: "さる", meaningKo: "원숭이", image: "images/realistic/saru_realistic.png", highlightIndex: 1 },
            { character: "れ", word: "れいぞうこ", wordReading: "れいぞうこ", meaningKo: "냉장고", image: "images/realistic/reizouko_realistic.png", highlightIndex: 0 },
            { character: "ろ", word: "ろうそく", wordReading: "ろうそく", meaningKo: "양초", image: "images/realistic/rousoku_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 9,
          title: "Lesson 9",
          row: "や・わ行",
          cards: [
            { character: "や", word: "やま", wordReading: "やま", meaningKo: "산", image: "images/realistic/yama_realistic.png", highlightIndex: 0 },
            { character: "ゆ", word: "ゆき", wordReading: "ゆき", meaningKo: "눈", image: "images/realistic/yuki_realistic.png", highlightIndex: 0 },
            { character: "よ", word: "よる", wordReading: "よる", meaningKo: "밤", image: "images/realistic/yoru_realistic.png", highlightIndex: 0 },
            { character: "わ", word: "わに", wordReading: "わに", meaningKo: "악어", image: "images/realistic/wani_realistic.png", highlightIndex: 0 },
            { character: "ん", word: "ほん", wordReading: "ほん", meaningKo: "책", image: "images/realistic/hon_realistic.png", highlightIndex: 1 }
          ]
        },
        {
          id: 10,
          title: "Lesson 10",
          row: "탁음 등",
          cards: [
            { character: "が", word: "がっこう", wordReading: "がっこう", meaningKo: "학교", image: "images/realistic/gakkou_realistic.png", highlightIndex: 0 },
            { character: "ぞ", word: "ぞう", wordReading: "ぞう", meaningKo: "코끼리", image: "images/realistic/zou_realistic.png", highlightIndex: 0 },
            { character: "ど", word: "どんぐり", wordReading: "どんぐり", meaningKo: "도토리", image: "images/realistic/donguri_realistic.png", highlightIndex: 0 },
            { character: "ぶ", word: "ぶた", wordReading: "ぶた", meaningKo: "돼지", image: "images/realistic/buta_realistic.png", highlightIndex: 0 },
            { character: "ぼ", word: "ぼうし", wordReading: "ぼうし", meaningKo: "모자", image: "images/realistic/boushi_realistic.png", highlightIndex: 0 }
          ]
        }
      ]
    },
    {
      id: "katakana",
      title: "가타카나",
      type: "katakana",
      lessons: [
        {
          id: 11,
          title: "Lesson 11",
          row: "ア行",
          cards: [
            { character: "ア", word: "アイス", wordReading: "アイス", meaningKo: "아이스크림", image: "images/realistic/aisu_realistic.png", highlightIndex: 0 },
            { character: "イ", word: "インク", wordReading: "インク", meaningKo: "잉크", image: "images/realistic/inku_realistic.png", highlightIndex: 0 },
            { character: "ウ", word: "ウクレレ", wordReading: "ウクレレ", meaningKo: "우쿨렐레", image: "images/realistic/ukurere_realistic.png", highlightIndex: 0 },
            { character: "エ", word: "エプロン", wordReading: "エプロン", meaningKo: "앞치마", image: "images/realistic/epuron_realistic.png", highlightIndex: 0 },
            { character: "オ", word: "オレンジ", wordReading: "オレンジ", meaningKo: "오렌지", image: "images/realistic/orenji_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 12,
          title: "Lesson 12",
          row: "カ行",
          cards: [
            { character: "カ", word: "カメラ", wordReading: "カメラ", meaningKo: "카메라", image: "images/realistic/kamera_realistic.png", highlightIndex: 0 },
            { character: "キ", word: "キウイ", wordReading: "キウイ", meaningKo: "키위", image: "images/realistic/kiui_realistic.png", highlightIndex: 0 },
            { character: "ク", word: "クッキー", wordReading: "クッキー", meaningKo: "쿠키", image: "images/realistic/kukkii_realistic.png", highlightIndex: 0 },
            { character: "ケ", word: "ケーキ", wordReading: "ケーキ", meaningKo: "케이크", image: "images/realistic/keeki_realistic.png", highlightIndex: 0 },
            { character: "コ", word: "コップ", wordReading: "コップ", meaningKo: "컵", image: "images/realistic/koppu_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 13,
          title: "Lesson 13",
          row: "サ行",
          cards: [
            { character: "サ", word: "サラダ", wordReading: "サラダ", meaningKo: "샐러드", image: "images/realistic/sarada_realistic.png", highlightIndex: 0 },
            { character: "シ", word: "シャツ", wordReading: "シャツ", meaningKo: "셔츠", image: "images/realistic/shatsu_realistic.png", highlightIndex: 0 },
            { character: "ス", word: "スプーン", wordReading: "スプーン", meaningKo: "스푼", image: "images/realistic/supuun_realistic.png", highlightIndex: 0 },
            { character: "セ", word: "セーター", wordReading: "セーター", meaningKo: "스웨터", image: "images/realistic/seetaa_realistic.png", highlightIndex: 0 },
            { character: "ソ", word: "ソーセージ", wordReading: "ソーセージ", meaningKo: "소시지", image: "images/realistic/sooseeji_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 14,
          title: "Lesson 14",
          row: "タ行",
          cards: [
            { character: "タ", word: "タオル", wordReading: "タオル", meaningKo: "수건", image: "images/realistic/taoru_realistic.png", highlightIndex: 0 },
            { character: "チ", word: "チーズ", wordReading: "チーズ", meaningKo: "치즈", image: "images/realistic/chiizu_realistic.png", highlightIndex: 0 },
            { character: "ツ", word: "ツリー", wordReading: "ツリー", meaningKo: "트리", image: "images/realistic/tsurii_realistic.png", highlightIndex: 0 },
            { character: "テ", word: "テント", wordReading: "テント", meaningKo: "텐트", image: "images/realistic/tento_realistic.png", highlightIndex: 0 },
            { character: "ト", word: "トマト", wordReading: "トマト", meaningKo: "토마토", image: "images/realistic/tomato_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 15,
          title: "Lesson 15",
          row: "ナ行",
          cards: [
            { character: "ナ", word: "ナイフ", wordReading: "ナイフ", meaningKo: "나이프", image: "images/realistic/naifu_realistic.png", highlightIndex: 0 },
            { character: "ニ", word: "ニット", wordReading: "ニット", meaningKo: "니트", image: "images/realistic/nitto_realistic.png", highlightIndex: 0 },
            { character: "ヌ", word: "ヌードル", wordReading: "ヌードル", meaningKo: "국수", image: "images/realistic/nuudoru_realistic.png", highlightIndex: 0 },
            { character: "ネ", word: "ネクタイ", wordReading: "ネクタイ", meaningKo: "넥타이", image: "images/realistic/nekutai_realistic.png", highlightIndex: 0 },
            { character: "ノ", word: "ノート", wordReading: "ノート", meaningKo: "공책", image: "images/realistic/nooto_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 16,
          title: "Lesson 16",
          row: "ハ行",
          cards: [
            { character: "ハ", word: "ハム", wordReading: "ハム", meaningKo: "햄", image: "images/realistic/hamu_realistic.png", highlightIndex: 0 },
            { character: "ヒ", word: "ヒーター", wordReading: "ヒーター", meaningKo: "히터", image: "images/realistic/hiitaa_realistic.png", highlightIndex: 0 },
            { character: "フ", word: "フォーク", wordReading: "フォーク", meaningKo: "포크", image: "images/realistic/fooku_realistic.png", highlightIndex: 0 },
            { character: "ヘ", word: "ヘリコプター", wordReading: "ヘリコプター", meaningKo: "헬리콥터", image: "images/realistic/herikoputaa_realistic.png", highlightIndex: 0 },
            { character: "ホ", word: "ホース", wordReading: "ホース", meaningKo: "호스", image: "images/realistic/hoosu_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 17,
          title: "Lesson 17",
          row: "マ行",
          cards: [
            { character: "マ", word: "マイク", wordReading: "マイク", meaningKo: "마이크", image: "images/realistic/maiku_realistic.png", highlightIndex: 0 },
            { character: "ミ", word: "ミルク", wordReading: "ミルク", meaningKo: "우유", image: "images/realistic/miruku_realistic.png", highlightIndex: 0 },
            { character: "ム", word: "ムース", wordReading: "ムース", meaningKo: "무스", image: "images/realistic/muusu_realistic.png", highlightIndex: 0 },
            { character: "メ", word: "メロン", wordReading: "メロン", meaningKo: "멜론", image: "images/realistic/meron_realistic.png", highlightIndex: 0 },
            { character: "モ", word: "モニター", wordReading: "モニター", meaningKo: "모니터", image: "images/realistic/monitaa_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 18,
          title: "Lesson 18",
          row: "ラ行",
          cards: [
            { character: "ラ", word: "ライオン", wordReading: "ライオン", meaningKo: "사자", image: "images/realistic/raion_realistic.png", highlightIndex: 0 },
            { character: "リ", word: "リボン", wordReading: "リボン", meaningKo: "리본", image: "images/realistic/ribon_realistic.png", highlightIndex: 0 },
            { character: "ル", word: "ルビー", wordReading: "ルビー", meaningKo: "루비", image: "images/realistic/rubii_realistic.png", highlightIndex: 0 },
            { character: "レ", word: "レモン", wordReading: "レモン", meaningKo: "레몬", image: "images/realistic/remon_realistic.png", highlightIndex: 0 },
            { character: "ロ", word: "ロボット", wordReading: "ロボット", meaningKo: "로봇", image: "images/realistic/robotto_realistic.png", highlightIndex: 0 }
          ]
        },
        {
          id: 19,
          title: "Lesson 19",
          row: "ヤ・ワ行",
          cards: [
            { character: "ヤ", word: "タイヤ", wordReading: "タイヤ", meaningKo: "타이어", image: "images/realistic/taiya_realistic.png", highlightIndex: 2 },
            { character: "ユ", word: "ユニフォーム", wordReading: "ユニフォーム", meaningKo: "유니폼", image: "images/realistic/yunifoomu_realistic.png", highlightIndex: 0 },
            { character: "ヨ", word: "ヨーヨー", wordReading: "ヨーヨー", meaningKo: "요요", image: "images/realistic/yooyoo_realistic.png", highlightIndex: 0 },
            { character: "ワ", word: "ワイン", wordReading: "ワイン", meaningKo: "와인", image: "images/realistic/wain_realistic.png", highlightIndex: 0 },
            { character: "ン", word: "パン", wordReading: "パン", meaningKo: "빵", image: "images/realistic/pan_realistic.png", highlightIndex: 1 }
          ]
        },
        {
          id: 20,
          title: "Lesson 20",
          row: "탁음 등",
          cards: [
            { character: "ガ", word: "ガラス", wordReading: "ガラス", meaningKo: "유리", image: "images/realistic/garasu_realistic.png", highlightIndex: 0 },
            { character: "ピ", word: "ピアノ", wordReading: "ピアノ", meaningKo: "피아노", image: "images/realistic/piano_realistic.png", highlightIndex: 0 },
            { character: "ブ", word: "ブロック", wordReading: "ブロック", meaningKo: "블록", image: "images/realistic/burokku_realistic.png", highlightIndex: 0 },
            { character: "ペ", word: "ペンギン", wordReading: "ペンギン", meaningKo: "펭귄", image: "images/realistic/pengin_realistic.png", highlightIndex: 0 },
            { character: "ポ", word: "ポスト", wordReading: "ポスト", meaningKo: "우체통", image: "images/realistic/posuto_realistic.png", highlightIndex: 0 }
          ]
        }
      ]
    }
  ]
};

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
    
    // Preload all images
    this.preloadImages();
    this.handleRoute();
  }
  
  preloadImages() {
    const images = ['images/joseph.svg'];
    CURRICULUM.phases.forEach(phase => {
      phase.lessons.forEach(lesson => {
        lesson.cards.forEach(card => {
          images.push(card.image);
        });
      });
    });
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  playTTS(text) {
    if (!('speechSynthesis' in window)) return;

    // 1. Cancel previous speech
    window.speechSynthesis.cancel();

    // 2. Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    // 3. Tuning for natural feel: 
    // Slightly faster than 0.85 to sound less robotic, 
    // and slightly higher pitch for clarity/cheerfulness.
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
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
          <img src="images/joseph.svg" class="mascot" alt="Joseph Mascot" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+PGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNjAiIGZpbGw9IiNGRkI1QzIiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNDBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPijjg6vjgbwpPC90ZXh0Pjwvc3ZnPg=='">
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
        if (displayRow.endsWith('行')) {
          displayRow = displayRow.slice(0, -1) + '<span class="row-sub">行</span>';
        } else if (displayRow.endsWith(' 등')) {
          displayRow = displayRow.slice(0, -2) + '<span class="row-sub"> 등</span>';
        }
        
        html += `
            <a href="#lesson/${lesson.id}" class="lesson-card">
              ${isCompleted ? '<div class="completed-check">✓</div>' : ''}
              <div class="lesson-row">${displayRow}</div>
              <div class="lesson-title">${lesson.title}</div>
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
              <img src="${card.image}" class="card-image" alt="illustration" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPijjgIxf44CMKTwvdGV4dD48L3N2Zz4='">
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
