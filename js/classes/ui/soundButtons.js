class SoundButtons extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;

        //make a music button

        this.musicButton = new ToggleButton({
            scene: this.scene,
            backKey: 'toggleBack',
            onIcon: 'musicOn',
            offIcon: 'musicOff',
            event: G.TOGGLE_MUSIC,
            value:model.musicOn
        });

        //make a sound button
        this.sfxButton = new ToggleButton({
            scene: this.scene,
            backKey: 'toggleBack',
            onIcon: 'sfxOn',
            offIcon: 'sfxOff',
            event: G.TOGGLE_SOUND,
            value:model.soundOn
        });

        //add the buttons to the container
        this.add(this.musicButton);
        this.add(this.sfxButton);
       
        //position the buttons
        this.musicButton.y = this.musicButton.height / 2;
        this.musicButton.x = this.musicButton.width / 2;
        this.sfxButton.x = game.config.width - this.sfxButton.width / 2;
        this.sfxButton.y = this.musicButton.y;

        //add the sound buttons to the scene
        this.scene.add.existing(this);
    }
}