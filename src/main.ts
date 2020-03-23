import { GameScene } from './gameScene';
import * as Phaser from 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;

const gameConfig: GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: GameScene
};

export const game = new Phaser.Game(gameConfig);