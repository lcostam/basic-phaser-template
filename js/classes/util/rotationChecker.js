class RotationChecker {
    constructor(config) {
        this.wrongFlag = false;
        //
        //event constants
        //
        this.PORTRAIT = "portrait";
        this.LANDSCAPE = "landscape";
        //
        this.WRONG_WAY = "wrongWay";
        this.CORRECTED = "correctedWay";
        //
        //
        this.scene = config.scene;
        this.right = config.right;
        this.scene.events.on('resize', this.checkSize, this);
    }
    check() {
        this.checkSize(game.config.width, game.config.height);
    }
    checkSize(w, h) {
        if (model.isMobile == -1) {
            emitter.emit(this.RIGHT_WAY);
            return;
        }
        if (w > h) {
            //this is landscape!
            //
            if (this.right == this.LANDSCAPE) {
                //if it was wrong before and now it is right
                if (this.wrongFlag == true) {
                    //then send the corrected event
                    emitter.emit(this.CORRECTED);
                } else {
                    //turned correct
                    emitter.emit(this.RIGHT_WAY);
                }
            } else {
                //this is wrong
                this.wrongFlag = true;
                emitter.emit(this.WRONG_WAY);
            }
        } else {
            //this is portrait!
            //
            if (this.right == this.PORTRAIT) {
                //if it was wrong before and now it is right
                if (this.wrongFlag == true) {
                    //then send the corrected event
                    emitter.emit(this.CORRECTED);
                } else {
                    //turned correct
                    emitter.emit(this.RIGHT_WAY);
                }
            } else {
                //this is wrong
                this.wrongFlag = true;
                emitter.emit(this.WRONG_WAY);
            }
        }
    }
}