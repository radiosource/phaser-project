import Phaser from 'phaser';

export default {
  type: Phaser.WEBGL,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  localStorageName: 'phaseres6webpack',
  webfonts: ['Bangers'],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
