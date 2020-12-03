class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload() {}
    create() {
        model.currentScene = this;
        this.alignGrid = new AlignGrid({
            rows: 11,
            cols: 11,
            scene: this
        });
        //  this.alignGrid.showNumbers();
        var overText = this.add.text(0, 0, "GAME OVER", {
            color: '#ffffff',
            fontSize: game.config.width / 10
        });
        overText.setOrigin(0.5, 0.5);
        this.alignGrid.placeAtIndex(27, overText);
        var btnStart = new TextButton({
            scene: this,
            key: 'btRestart',
            text: '',
            event: G.START_GAME
        });
        Align.scaleToGameW(btnStart, .5);
        this.alignGrid.placeAtIndex(93, btnStart);
        
        
        
        var sb = new SoundButtons({
            scene: this
        });
        var rotChecker = new RotationChecker({
            scene: this,
            right: "portrait"
        });
        emitter.on(rotChecker.WRONG_WAY, this.turnedWrongWay);
        emitter.on(rotChecker.CORRECTED, this.rightWay);
        emitter.on(rotChecker.RIGHT_WAY, this.rightWay);
        rotChecker.check();
    }
    turnedWrongWay() {
        document.getElementById('wrongWayPortrait').style.display = "block";
    }
    rightWay() {
        document.getElementById('wrongWayPortrait').style.display = "none";
    }
}