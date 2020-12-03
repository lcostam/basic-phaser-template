class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //load our images or sounds 
    }
    create() {
        //set up 
        model.currentScene = this;
        model.score = 0;
        this.gameOver = false;
        this.delay = 1600;
        //
        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.aGrid = new AlignGrid({
            scene: this
        });
        this.aGrid.showNumbers();
        //
        //
        var rotChecker = new RotationChecker({
            scene: this,
            right: "portrait"
        });
        emitter.on(rotChecker.WRONG_WAY, this.turnedWrongWay);
        emitter.on(rotChecker.CORRECTED, this.rightWay);
        emitter.on(rotChecker.RIGHT_WAY, this.rightWay);
        rotChecker.check();
        //
        //
       
        var sb = new SoundButtons({
            scene: this
        });
        sb.musicButton.visible = false;

        this.btGameOver = this.add.image(0,0,'btGameOver');
        this.aGrid.placeAtIndex(12, this.btGameOver);
        this.btGameOver.setInteractive();
        this.btGameOver.on("pointerdown", this.doGameOver, this);
    }
    
    doGameOver() {
        this.gameOver = true;
        this.scene.start('SceneOver');
    }

 
    turnedWrongWay() {
        model.paused = true;
        document.getElementById('wrongWayPortrait').style.display = "block";
    }
    rightWay() {
        model.paused = false;
        document.getElementById('wrongWayPortrait').style.display = "none";
    }
    update() {
        //constant running loop
    }

    
}