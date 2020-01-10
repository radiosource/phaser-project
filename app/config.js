import Phaser from 'phaser';
import scenes from "./scenes/"

export default {
  type: Phaser.WEBGL,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  localStorageName: 'phaseres6webpack',
  scene: [scenes.Menu],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
