class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.mouthX = 300;
        this.mouthY = 370;
        this.rightArmX = 390;
        this.rightArmY = 408;
        this.leftArmX = 210;
        this.leftArmY = 408;
        this.rightLegX = 350;
        this.rightLegY = 490;
        this.leftLegX = 250;
        this.leftLegY = 490;
        this.EyeX = 300;
        this.EyeY = 310;
        this.noseX = 300;
        this.noseY = 345;
        this.rightHornX = 360;
        this.rightHornY = 264;
        this.leftHornX = 240;
        this.leftHornY = 264;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

        this.AKey = null;
        this.DKey = null
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        
        //mouths: 
        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
        my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts","mouth_closed_teeth.png" )

        //eyes:
        my.sprite.Eye = this.add.sprite(this.EyeX, this.EyeY, "monsterParts", "eye_cute_light.png");

        //arms:
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteE.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteE.png");
        my.sprite.leftArm.flipX = true;

        //legs:
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.flipX = true;

        //details:
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_red.png");
        my.sprite.nose.setScale(0.75);
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.leftHorn.flipX = true;

        //make smile not visible
        my.sprite.mouthSmile.visible = false;

        //make key objects for sideways movement
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

           

        //event handler to change to smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        });

        //event handler to change to fangs
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthSmile.visible = false;

        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //poll for input A D
        if (this.AKey.isDown){
            for(const spr in my.sprite){
                my.sprite[spr].x = my.sprite[spr].x - 5;
            }
        }
        //if(this.DKey.isDown){
            if (this.DKey.isDown){
                for(const spr in my.sprite){
                    my.sprite[spr].x = my.sprite[spr].x + 5;
                }
            }

        //}

       
    }

}