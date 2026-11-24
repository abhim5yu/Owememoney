const sharp = require('sharp');
const fs = require('fs');
(async () => {
  fs.mkdirSync('assets', { recursive: true });
  await sharp('assets/icon.svg').resize(1024, 1024).png().toFile('assets/icon-only.png');
  await sharp('assets/foreground.svg').resize(1024, 1024).png().toFile('assets/icon-foreground.png');
  await sharp({ create: { width: 1024, height: 1024, channels: 3, background: '#0a84ff' } }).png().toFile('assets/icon-background.png');
})();
