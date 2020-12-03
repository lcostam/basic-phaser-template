class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {}
    
    create() {
        model.currentScene = this;
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();
        mediaManager = new MediaManager({
            scene: this
        });
        mediaManager.init();
        //música de fundo
      // mediaManager.setBackgroundMusic("backgroundMusic");
      

        this.alignGrid = new AlignGrid({
            rows: 11,
            cols: 11,
            scene: this
        });
        
        var title = this.add.image(240, 100, 'title');
        Align.scaleToGameW(title, .8);
        var btnStart = new TextButton({
            scene: this,
            key: 'button1',
            text: '',//pode ter texto se for background do botão
            event: G.START_GAME,
            textConfig: {
                fontSize: game.config.width / 16
            }
        });
              
        //
        //
        //
        //
        this.alignGrid.placeAtIndex(38, title);
        this.alignGrid.placeAtIndex(93, btnStart);
        //
        //Add the sound buttons
        //
        var sb = new SoundButtons({
            scene: this
        });
        sb.musicButton.visible=false;
        
        Align.scaleToGameW(btnStart, .5);
        //
        //check the rotation
        //
        var rotChecker = new RotationChecker({
            scene: this,
            right: "portrait"
        });
        emitter.on(rotChecker.WRONG_WAY, this.turnedWrongWay);
        emitter.on(rotChecker.CORRECTED, this.corrected);
        emitter.on(rotChecker.RIGHT_WAY, this.rightWay);
        rotChecker.check();
    }
    turnedWrongWay() {
        document.getElementById('wrongWayPortrait').style.display = "block";
    }
    corrected() {
        if (this.initialCorrect != true) {
            location.reload();
        }
        document.getElementById('wrongWayPortrait').style.display = "none";
    }
    rightWay() {
        console.log("right way");
        this.initialCorrect = true;
    }
    startGame() {
        this.scene.start('SceneMain');
    }
    update() {}
}