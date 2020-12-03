class TextButton extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        if (!config.key) {
            console.log("missing key");
            return;
        }
        super(config.scene);
        this.config = config;
        this.scene = config.scene;
        this.back = this.scene.add.image(0, 0, config.key);
        this.add(this.back);

        //if the config object has a textConfig property apply it
        if (config.text) {
            if (config.textConfig) {
                this.text1 = this.scene.add.text(0, 0, config.text, config.textConfig);
            } else {
                this.text1 = this.scene.add.text(0, 0, config.text);
            }
            //set the origin
            this.text1.setOrigin(0.5, 0.5);
            //add the text to the button
            this.add(this.text1);
        }

        //if there is position information then apply it
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }

        //containers must have a size set for us to be able to access the displayWidth and displayHeight of the container

        this.setSize(this.back.displayWidth,this.back.displayHeight);

        //add to the scene
        this.scene.add.existing(this);

        //if there is an event in the config then set a listener for when the button is pressed
        if (config.event) {
            this.back.setInteractive();
            this.back.on('pointerdown', this.pressed, this)
        }

        //if not on mobile then add a rollover
        if (model.isMobile == -1) {
            this.back.on("pointerover", this.over, this);
            this.back.on("pointerout", this.out, this);
        }
    }
    setStyle(style)
    {
        this.text1.setStyle(style);
    }
    over() {
        this.y -= 5;
    }
    out() {
        this.y += 5;
    }
    pressed() {
    	//if there are parameters dispatch the event and params, otherwise just the event

        if (this.config.params) {
            emitter.emit(this.config.event, this.config.params);
        } else {
            emitter.emit(this.config.event);
        }
    }
}