class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload() {
        this.bar = new Bar({
            scene: this
        });
        //
        //
        this.progText = this.add.text(game.config.width / 2, game.config.height / 2, "Descreve algum objetivo do jogo por exemplo", {
            color: '#ffffff',
            fontSize: game.config.width / 25
        });
        this.progText.setOrigin(0.5, 0.5);
        Align.center(this.bar);
        Align.center(this.progText);
        //
        //
        this.load.on('progress', this.onProgress, this);
        
        //load spritesheet here
        /* this.load.spritesheet("balls", "images/main/balls.png", {
            frameWidth: 35,
            frameHeight: 35
        }); */
       
       
        //common files
        this.load.image("title", "images/main/title.png");
        this.load.image("button1", "images/ui/buttons/btIniciar.png");
        this.load.image("btGameOver", "images/ui/buttons/btGameOver.png");
        this.load.image("btRestart", "images/ui/buttons/btRestart.png");
        this.load.image("toggleBack", "images/ui/toggles/3.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");
      
        //load sounds
        this.load.audio("backgroundMusic", ["audio/background.mp3", "audio/background.oog"]);
        this.load.audio("backTeste", ["audio/bad.mp3", "audio/bad.oog"]);

    }

    onProgress(value) {
        var per = Math.floor(value * 100);
        this.progText.setText("Loading " + per + "%");
        this.bar.setPercent(value);
    }
    
    create() {
        this.scene.start("SceneTitle"); //PRÓXIMA TELA
    }
}