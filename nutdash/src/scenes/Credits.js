class Credits extends Phaser.Scene {
    constructor(){
        super("creditsScene");
    }
  
    create() {
        // menu text configuration
        let creditsConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Thanks for playing!', creditsConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Sprites created by ethans pixel art shop ', creditsConfig).setOrigin(0.5);
        creditsConfig.backgroundColor = '#00FF00';
        creditsConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press (R) to restart or → menu', creditsConfig).setOrigin(0.5);
        
  
        // define keys
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
  
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
          // starts playscene
          this.scene.start("playScene");    
        }   
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // starts menuscene
          this.scene.start("menuScene");    
        }
      }
  }