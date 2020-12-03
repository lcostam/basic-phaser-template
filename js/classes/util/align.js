class Align {
    static scaleToGameW(obj, per) {
        obj.displayWidth = game.config.width * per;
        obj.scaleY = obj.scaleX;
    }
    static scaleToGameH(obj, per) {
        obj.displayHeight = game.config.height * per;
        obj.scaleX = obj.scaleY;
    }
    static centerH(obj) {
        obj.x = game.config.width / 2;
    }
    static centerY(obj) {
        obj.y = game.config.height / 2;
    }
    static center(obj) {
        obj.x = game.config.width / 2;
        obj.y = game.config.height / 2;
    }
}