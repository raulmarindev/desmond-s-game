import * as Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    private platforms: Phaser.Physics.Arcade.StaticGroup | undefined;
    private sausages: Phaser.Physics.Arcade.Group | undefined;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private character: Phaser.Physics.Arcade.Sprite | undefined;
    private scoreText: Phaser.GameObjects.Text | undefined;
    private meow: Phaser.Sound.BaseSound | undefined;
    private explosion: Phaser.Sound.BaseSound | undefined;
    private score = 0;
    private gameOver = false;

    private characterKey: string = 'dude';
    private backgroundKey: string = 'sky';

    public preload = () => {
        this.loadImages();
        this.loadAudios();
    };

    public create = () => {
        this.add.image(0, 0, this.backgroundKey).setOrigin(0, 0);

        this.addPlatforms();

        this.addCharacter();

        if (this.platforms && this.character) {
            this.physics.add.collider(this.character, this.platforms);

            this.addStars();

            if (this.sausages && this.platforms) {
                this.physics.add.collider(this.sausages, this.platforms);

                this.physics.add.overlap(this.character, this.sausages, this.eatSausage, undefined, this);


                this.addControls();

                this.meow = this.sound.add('meow');
                this.explosion = this.sound.add('explosion');

                this.initScore();
            }
        }
    };

    private initScore = () => {
        this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, { fontSize: '32px', fill: '#000' });
    };

    private updateScore = (scoreIncrement: number) => {
        this.score += scoreIncrement;
        this.scoreText?.setText(`Score: ${this.score}`);
    };

    private eatSausage = (character: Phaser.GameObjects.GameObject, sausage: Phaser.GameObjects.GameObject) => {
        if (sausage.active) {
            this.sausages?.killAndHide(sausage);
            this.updateScore(10);
            this.meow?.play();

            if (this.sausages?.countActive(true) === 0) {
                this.sausages.children.iterate(s => {
                    const body = s.body as Phaser.Physics.Arcade.Body;
                    body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
                    s.setActive(true);
                });

                this.sausages.setXY(12, 0, 70);
                this.sausages?.setVisible(true);
                this.addBombs();
            }
        }
    };

    private loadAudios() {
        this.load.audio('meow', '/public/assets/meow.mp3');
        this.load.audio('explosion', '/public/assets/explosion.mp3');
    }

    private loadImages() {
        this.load.image(this.backgroundKey, '../public/assets/sky.png');
        this.load.image('ground', '../public/assets/platform.png');
        this.load.image('sausage', '../public/assets/sausage.png');
        this.load.image('bomb', '../public/assets/bomb.png');
        this.load.spritesheet(this.characterKey, '../public/assets/desmond.png', { frameWidth: 50.5, frameHeight: 40 });
    }

    public update() {
        if (this.gameOver)
            return;

        this.pollControls();
    }

    private addControls = () => {
        this.cursors = this.input.keyboard.createCursorKeys();
    };

    private addStars = () => {
        this.sausages = this.physics.add.group({
            key: 'sausage',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        this.sausages.children.iterate(s => {
            const body = s.body as Phaser.Physics.Arcade.Body;
            body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    };

    private addBombs = () => {
        if (this.platforms && this.character) {
            const bombs = this.physics.add.group();

            this.physics.add.collider(bombs, this.platforms);

            this.physics.add.collider(this.character, bombs, this.hitBomb, undefined, this);

            var x = (this.character.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    };

    public hitBomb = (character: Phaser.GameObjects.GameObject, bomb: Phaser.GameObjects.GameObject) => {
        this.physics.pause();
        this.character?.setTint(0xff0000);
        this.character?.anims.play('turn');
        this.gameOver = true;
        this.explosion?.play();
    };

    private pollControls = () => {
        if (this.cursors && this.character) {
            if (this.cursors.left?.isDown) {
                this.character.setVelocityX(-160);

                this.character.anims.play('left', true);
            }
            else if (this.cursors.right?.isDown) {
                this.character.setVelocityX(160);

                this.character.anims.play('right', true);
            }
            else {
                this.character.setVelocityX(0);

                this.character.anims.play('turn');
            }

            if (this.cursors.up?.isDown && this.character.body.touching.down) {
                this.character.setVelocityY(-470);
            }
        }
    };

    private addCharacter = () => {
        this.character = this.physics.add.sprite(100, 450, this.characterKey).setOrigin(0, 0);

        this.character.setBounce(0.2);
        this.character.setCollideWorldBounds(true);
        this.character.setGravityY(300);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.characterKey, { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: this.characterKey, frame: 5 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.characterKey, { start: 6, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    };

    private addPlatforms = () => {
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    };


}