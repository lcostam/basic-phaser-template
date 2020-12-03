var game;
var model;
var emitter;
var G;
var controller;
var mediaManager;

window.onload = function() {
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    var w = 480;
    var h = 640;
    if (isMobile != -1) {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    var config = {
        type: Phaser.AUTO,
        width: w,
        height: h,
        parent: 'phaser-game',
        scene: [SceneLoad, SceneTitle, SceneMain, SceneOver]
    };
    G = new Constants();
    model = new Model();
    model.isMobile = isMobile;
    game = new Phaser.Game(config);
    window.addEventListener('resize', function(event) {
        game.resize(window.innerWidth, window.innerHeight);
        //  alert('here');
    }, false);
}