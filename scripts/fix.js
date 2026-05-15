const fs = require('fs');
let content = fs.readFileSync('nihongo-flashcard/app.js', 'utf8');
content = content.replace(/\\\${/g, '${');
fs.writeFileSync('nihongo-flashcard/app.js', content);
