class ToggleButton extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        super(config.scene);
        this.scene = config.scene;
        //add the back and the icons
        this.back = this.scene.add.image(0, 0, config.backKey);
        this.onIcon = this.scene.add.image(0, 0, config.onIcon);
        this.offIcon = this.scene.add.image(0, 0, config.offIcon);
        //scale the back to 10% of the game's width and the icons to 5%
        Align.scaleToGameW(this.back, .1);
        Align.scaleToGameW(this.onIcon, .05);
        Align.scaleToGameW(this.offIcon, .05);
        //
        //add the children to the container
        this.add(this.back);
        this.add(this.onIcon);
        this.add(this.offIcon);
        //value is true for when the button is on
        //and false for when off
        if (config.value!=false) {
            config.value = true;
        }
        //make a class reference to the value
        this.value = config.value;
        if (config.event) {
            this.event = config.event;
        }
        console.log("value=" + this.value);
        //turn on or off icons
        this.setIcons();
        //set the listener for the back
        this.back.setInteractive();
        this.back.on('pointerdown', this.toggle, this);
        //if there is position information then apply it
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        //containers must have a size set for us to be able to access the displayWidth and displayHeight of the container
        this.setSize(this.back.displayWidth, this.back.displayHeight);
        //add the toggle button to the scene
        this.scene.add.existing(this);
    }
    toggle() {
        //flip the value
        this.value = !this.value;
        //turn on or off icons
        this.setIcons();
        //if there is an event toggle it
        if (this.event) {
            emitter.emit(this.event, this.value);
        }
    }
    setIcons() {
        //show or hide the off and on icons
        if (this.value == true) {
            this.onIcon.visible = true;
            this.offIcon.visible = false;
        } else {
            this.onIcon.visible = false;
            this.offIcon.visible = true;
        }
    }
}