/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.vine=[];
        this.count=1.5;
        this.vine2=[];
        this.count2=2.5;
        this.tree=[];
        this.count3=0;
    }
    /**
     * Précharge les assets
     */
    preload(){
        //caractère
        for(let i=1;i<=10;i++) {
            this.load.image('boy_idle'+i,'assets/characters/boy/idle/Layer-'+i+'.png')
        }
        for(let i=1;i<=10;i++) {
            this.load.image('boy_walk'+i,'assets/characters/boy/walk/Layer-'+i+'.png')
        }
        for(let i=1;i<=11;i++) {
            this.load.image('boy_shoot'+i,'assets/characters/boy/shoot/Layer-'+i+'.png')
        }
        //tout les sons
        this.load.audio('ghost',['assets/son/ghost1.mp3']);
        this.load.audio('bt',['assets/son/soundtrackphaser.mp3']);
        this.load.audio('scary',['assets/son/scary.mp3']);

        //animation maison
        this.load.spritesheet('zombieA', 'assets/zombie/zombie walk/z10A.png',{frameWidth: 99,frameHeight: 170});

        //bg 2 (tout au fond et très flou)
        for(let i=1;i<=4;i++) {
            this.load.image('bg2-terrain-' + i, 'assets/level/background-2/bg2-terrain-' + i + '.png');
        }
        for(let i=1;i<=3;i++){
            this.load.image('bg2-tree-'+i, 'assets/level/background-2/bg2-tree-'+i+'.png')}

        //bg 1 (gris légèrement flou)
        for(let i=1;i<=4;i++) {
            this.load.image('bg-terrain-'+i, 'assets/level/background-1/bg-terrain-'+i+'.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('bg-tree-' + i, 'assets/level/background-1/bg-tree-' + i + '.png');
        }
        for(let i=1;i<=5;i++) {
            this.load.image('bg-grass-' + i, 'assets/level/background-1/bg-grass-' + i + '.png');
        }


        this.load.image('bgTreef', 'assets/level/background-1/bg-fellen-tree-1.png');
        this.load.image('bgTreef2', 'assets/level/background-1/bg-fellen-tree-2.png');
        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gTreef', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gTreef2', 'assets/level/ground/g-fellen-tree-2.png');
        for(let i=1;i<=3;i++){
            this.load.image('gTree'+i, 'assets/level/ground/g-tree-'+i+'.png')}
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        for(let i=1;i<=5;i++){
            this.load.image('gStone'+i, 'assets/level/ground/g-stone-'+i+'.png')}
        for(let i=1;i<=3;i++){
            this.load.image('gVine'+i, 'assets/level/ground/g-vine-'+i+'.png')}
        this.load.image('gBox', 'assets/level/ground/g-box-2.png');
        this.load.image('gMush', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gMush2', 'assets/level/ground/g-mushroom2.png');
        this.load.image('gBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('gSpike2', 'assets/level/ground/g-spike-2.png');
        this.load.image('Moon', 'assets/level/background-2/moon.png');
        for(let i=1;i<=16;i++){
            this.load.image('gZ'+i, 'assets/zombie/z'+i+'.png')}

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film et  bloody et weather  TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++) {
            this.load.image('filterFilm' + i, 'assets/level/filters/film/frame-' + i + '.png')
        }
        for(let i=1;i<=3;i++) {
            this.load.image('filterBlood'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }
        for(let i=1;i<=3;i++) {
            this.load.image('filterRain'+i, 'assets/level/weather/rain/frame'+i+'.png');
        }
        for(let i=1;i<=5;i++) {
            this.load.image('filterSnow'+i, 'assets/level/weather/snow/frame-'+i+'.png');
        }
        for(let i=1;i<=11;i++) {
            this.load.image('screamer'+i, 'assets/scared/frame-'+i+'.gif');
        }

        //animation bg TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++) {
            this.load.image('bgAnimation'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++) {
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }

    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){
        this.ghost1=this.sound.add('ghost',{ loop: false });
        this.ghost1.volume-=0.8
        this.scary=this.sound.add('scary',{ loop: false });

        this.bt=this.sound.add('bt',{ loop: true });
        this.bt.mute= true
        this.bt.play()
        this.bt.volume=0.02
        /**animation zombie*/
        this.anims.create({
            key: "zombie",
            frameRate: 5,
            frames: this.anims.generateFrameNumbers("zombieA", {start: 0, end:11}),
            repeat: -1
        });

        /**
         * Fond très clair avec une trame
         * animation au dernier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.bgAnimation = this.add.sprite(0, 0, 'bgAnimation1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'animation',
            frames: [
                {key:'bgAnimation1'},
                {key:'bgAnimation2'},
                {key:'bgAnimation3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.bgAnimation.play('animation');

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        this.bg2Container=this.add.container(0,0);
        /**
         * Lune dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let Moon=this.add.image(540,-100, 'Moon').setOrigin(0,0);
        this.bg2Container.add(Moon);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain1=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */

        const tree10= this.add.rope(400, -50, 'bg2-tree-2', null, 15, false);
        this.bg2Container.add(tree10);
        tree10.angle=-5; //pencher l'arbre de -5 degrès

        /**
         * Terrain2 dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(750,200, 'bg2-terrain-1').setOrigin(0,0);
        bg2Terrain2.scale-=0.2
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre2 dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        const tree11= this.add.rope(bg2Terrain2.x+100, bg2Terrain2.y+25, 'bg2-tree-3', null, 15, false);
        this.bg2Container.add(tree11);
        tree11.scale-=0.1;
        tree11.angle=-10;
        this.tree.push(tree10,tree11);



        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain1=this.add.image(-300,210, 'bg-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        /**
         * arbre dans bg 1
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(bg1Terrain1.x+280,-50, 'bg-tree-1').setOrigin(0,0);
        bg1Tree1.scale-=0.4
        this.bg1Container.add(bg1Tree1);
        /**
         * arbre 2 dans bg 1
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree2=this.add.image(bg1Terrain1.x+450,-80, 'bg-tree-3').setOrigin(0,0);
        bg1Tree2.scale-=0.4
        this.bg1Container.add(bg1Tree2);

        /**
         * Terrain2
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain2=this.add.image(800,300, 'bg-terrain-1').setOrigin(0,0);
        bg1Terrain2.scale-=0.4
        this.bg1Container.add(bg1Terrain2);
        /**
         * Terrain3
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(600,420, 'bg-terrain-1').setOrigin(0,0);
        bg1Terrain3.scale-=0.4
        this.bg1Container.add(bg1Terrain3);
        /**
         * Terrain4
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain4=this.add.image(1150,280, 'bg-terrain-4').setOrigin(0,0);
        bg1Terrain4.scale-=0.4
        this.bg1Container.add(bg1Terrain4);
        /**
         * herbe sur Terrain3
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Grass1=this.add.image(bg1Terrain3.x+120,410, 'bg-grass-4').setOrigin(0,0);
        bg1Grass1.angle-=20
        this.bg1Container.add(bg1Grass1);


        /**
         * arbre 3 dans bg 1
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3=this.add.image(bg1Terrain2.x+100,-100, 'bg-tree-2').setOrigin(0,0);
        bg1Tree3.scale-=0.1
        this.bg1Container.add(bg1Tree3);
        /**
         * arbre tomber dans bg 1
         * @type {Phaser.GameObjects.Image}
         */
        let bgTreef=this.add.image(1100,300, 'bgTreef').setOrigin(0,0);
        bgTreef.scale-=0.3
        bgTreef.angle-=5
        this.bg1Container.add(bgTreef);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * liane
         * @type {Phaser.GameObjects.Image}
         */

        const vine1= this.add.rope(600, 20, 'gVine1', null, 15, false);
        this.groundContainer.add(vine1);
        const vine2= this.add.rope(600, vine1.y+vine1.height-10, 'gVine1', null, 15, false);
        this.groundContainer.add(vine2);
        const vine3= this.add.rope(600, vine2.y+vine2.height-10, 'gVine1', null, 15, false);
        this.groundContainer.add(vine3);
        const vine4= this.add.rope(600, vine3.y+vine3.height-10, 'gVine1', null, 15, false);
        this.groundContainer.add(vine4);
        const vine5= this.add.rope(600, vine4.y+vine4.height-10, 'gVine1', null, 15, false);
        this.groundContainer.add(vine5);

        this.vine.push(vine1,vine3,vine5);
        this.vine2.push(vine2,vine4);

        let vine6=this.add.image(650,45, 'gVine1').setOrigin(0,1);
        this.groundContainer.add(vine6);
        let vine7=this.add.image(vine6.x+4,vine6.y+vine6.height-8, 'gVine1').setOrigin(0,1);
        vine7.angle+=-5
        this.groundContainer.add(vine7);
        let vine8=this.add.image(vine6.x,vine7.y+vine7.height-10, 'gVine1').setOrigin(0,1);
        vine8.angle+=5
        this.groundContainer.add(vine8);

        console.log("a");

        /**
         * Zombies
         * @type {Phaser.GameObjects.Image}
         */
        let gZ22=this.add.image(1050, 400,'gZ14').setOrigin(0,1)
        gZ22.flipX=true
        this.groundContainer.add(gZ22);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(250,360, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree1);
        /**
         * Arbre 2
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(20,360, 'gTree1').setOrigin(0,1);
        tree2.flipX=true;
        this.groundContainer.add(tree2);
        /**
         * Arbre 3
         * @type {Phaser.GameObjects.Image}
         */
        let tree3=this.add.image(1000,410, 'gTree1').setOrigin(0,1);
        tree3.flipX=true;
        tree3.angle -=6
        this.groundContainer.add(tree3);
        /**
         * champignon
         * @type {Phaser.GameObjects.Image}
         */
        let Mush=this.add.image(140,360, 'gMush').setOrigin(0,1);
        Mush.flipX=true;
        this.groundContainer.add(Mush);
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        console.log("b");

        this.boy_idle = this.add.sprite(100, 170, 'boy_idle1').setOrigin(0, 0);
        this.anims.create({
            key: 'idle',
            frames: this.getFrames('boy_idle',10),
            frameRate: 12,
            repeat: -1
        });
        this.boy_idle.play('idle');
        this.boy_idle.scale=0.5


        this.boy_walk = this.add.sprite(100, 170, 'boy_walk1').setOrigin(0, 0);
        //animation de 5 images
        this.anims.create({
            key: 'walk',
            frames: this.getFrames('boy_walk',10),
            frameRate: 24,
            repeat: -1
        });
        this.boy_walk.play('walk');
        this.boy_walk.scale=0.5
        this.boy_walk.visible=false

        this.boy_shoot = this.add.sprite(100, 170, 'boy_shoot1').setOrigin(0, 0);
        this.boy_shoot.visible=false
        //animation de 5 images
        this.anims.create({
            key: 'shoot',
            frames: this.getFrames('boy_shoot',11),
            frameRate: 24,
            repeat: 1,
            showOnStart:false,
            hideOnComplete:true,
        });
        this.boy_shoot.scale=0.5




        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid2=this.add.image(200,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid2);
        /**
         *  Terrain eau
         * @type {Phaser.GameObjects.Image}
         */
        let gWater=this.add.image(gMid2.x+gMid2.width+90,410, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        /**
         *  Terrain eau
         * @type {Phaser.GameObjects.Image}
         */
        let gWater2=this.add.image(gWater.x+gWater.width,410, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater2);
        /**
         * Des spike au fond de l'eau
         * @type {Phaser.GameObjects.image}
         */
        let gSpike=this.add.image(gWater.x,gWater.y+gWater.height-80,'gSpike').setOrigin(0,1);
        gSpike.scaleY+=0.4
        gSpike.scaleX+=0.1
        this.groundContainer.add(gSpike);
        let gSpike2=this.add.image(gSpike.x+gSpike.width-30,gSpike.y,'gSpike').setOrigin(0,1);
        gSpike2.scaleY+=0.4
        gSpike2.scaleX+=0.1
        this.groundContainer.add(gSpike2);

        console.log("d");
        /**
         * Terrain 3 //////////////////////////////////////
         * @type {Phaser.GameObjects.Image}
         */
        let gRight=this.add.image(gMid2.x+gMid2.width-100,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight);


        /**
         * Terrain 4 //////////////////////////////////////
         * @type {Phaser.GameObjects.Image}
         */
        let gLeft=this.add.image(gWater.x+gWater.width+40,390, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);
        /**
         * Terrain 5 //////////////////////////////////////
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gLeft.x+gLeft.width,390, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Zombies
         * @type {Phaser.GameObjects.Image}
         */
        let zombieA=this.add.sprite(1500, 390,'zombieA').setOrigin(0,1)
        zombieA.anims.play("zombie")
        this.groundContainer.add(zombieA);

        /**
         * Terrain 6 //////////////////////////////////////
         * @type {Phaser.GameObjects.Image}
         */
        let gMid6=this.add.tileSprite(gMid3.x+gMid3.width,gMid3.y+gMid3.height-20,gMid3.width*2,gMid3.height,'gMid').setOrigin(0,1)
        this.groundContainer.add(gMid6);
        /**
         * Herbe sur Terrain 6
         * @type {Phaser.GameObjects.Image}
         */
        let grass6=this.add.tileSprite(gMid3.x+gMid3.width,gMid3.y,gMid3.width*2,53,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(grass6);
        let grass7=this.add.tileSprite(gMid3.x+gMid3.width,gMid3.y,gMid3.width*2,48,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(grass7);
        let grass8=this.add.tileSprite(gMid3.x+gMid3.width,gMid3.y,gMid3.width*2,45,'g-grass-2').setOrigin(0,1)
        this.groundContainer.add(grass8);
        /**
         * champignon2
         * @type {Phaser.GameObjects.Image}
         */
        let Mush2=this.add.image(gMid6.x-50,gMid6.y-gMid6.height+35, 'gMush2').setOrigin(0,1);
        this.groundContainer.add(Mush2);
        /**
         * champignon3
         * @type {Phaser.GameObjects.Image}
         */
        let Mush3=this.add.image(gMid6.x+95,gMid6.y-gMid6.height+10, 'gMush').setOrigin(0,1);
        Mush3.scale-=0.5
        Mush3.angle-=6
        this.groundContainer.add(Mush3);
        /**
         * stone terrain 6
         * @type {Phaser.GameObjects.Image}
         */
        let Stone6=this.add.image(gMid6.x-10,gMid6.y-gMid6.height+10, 'gStone3').setOrigin(0,1);
        Stone6.flipX=true
        this.groundContainer.add(Stone6);
        /**
         * Arbre sur terrain 6
         * @type {Phaser.GameObjects.Image}
         */
        let tree6=this.add.image(gMid6.x+100,gMid6.y-gMid6.height+10, 'gTree3').setOrigin(0,1);
        tree6.angle+=2
        tree6.scale-=0.2
        this.groundContainer.add(tree6);
        /**
         * liane sur arbre 6
         * @type {Phaser.GameObjects.Image}
         */
        let Vtree6=this.add.image(gMid6.x+195,gMid6.y-gMid6.height-323, 'gVine3').setOrigin(0,1);
        Vtree6.angle= 78
        Vtree6.scale+= 0.2
        Vtree6.flipX=true
        this.groundContainer.add(Vtree6);



        /**
         *  Pont en bois
         * @type {Phaser.GameObjects.Image}
         */
        let gBridge=this.add.image(gRight.x+gRight.width-50, gRight.x+gRight.width-220,'gBridge').setOrigin(0,0);
        this.groundContainer.add(gBridge);
        /**
         * box
         * @type {Phaser.GameObjects.Image}
         */
        let box=this.add.image(gBridge.x+120,349, 'gBox').setOrigin(0,1);
        box.angle+=4
        box.scale-=0.3
        this.groundContainer.add(box);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass=this.add.tileSprite(0,370,gRight.x+gRight.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(gGrass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass2=this.add.tileSprite(0,370,gRight.x+gRight.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(gGrass2);
         /**
         *  l'herbe sur right
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass3=this.add.tileSprite(gLeft.x+30,395,gLeft.width-30+gMid3.width,30,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass3);
        /**
         *Caillou a gauche
         * @type {Phaser.GameObjects.Image}
         */
        let gStone1=this.add.image(gRight.x+gRight.width-120, 365,'gStone3').setOrigin(0,1)
        gStone1.flipX=true
        this.groundContainer.add(gStone1);
        /**
         *Caillou a droite
         * @type {Phaser.GameObjects.Image}
         */
        let gStone2=this.add.image(gLeft.x+30, 398,'gStone4').setOrigin(0,1)
        gStone1.flipX=true
        this.groundContainer.add(gStone2);
        let gStone3=this.add.image(gLeft.x+10, 410,'gStone1').setOrigin(0,1)
        gStone1.flipX=true
        this.groundContainer.add(gStone3);
        let gStone4=this.add.image(gLeft.x+150, 400,'gStone1').setOrigin(0,1)
        gStone1.flipX=true
        this.groundContainer.add(gStone4);

        //scène 2
        /**
         *Zombies
         * @type {Phaser.GameObjects.Image}
         */
        let gZ20=this.add.image(2350, 418,'gZ6').setOrigin(0,1)
        gZ20.scale-=0.2
        this.groundContainer.add(gZ20);

        let gZ24=this.add.image(2050, 518,'gZ12').setOrigin(0,1)
        gZ24.angle+=70
        this.groundContainer.add(gZ24);

        /**
         * Terrain S2 1 je met 20 en unité de base pour ne pas me mélanger avec les assets précédents
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gRight20=this.add.image(gMid6.x+gMid6.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight20);
        /**
         * Terrain S2 2
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gLeft20=this.add.image(gRight20.x+gRight20.width+300,390, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft20);
        /**
         * Terrain S2 3
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid20=this.add.image(gLeft20.x+gLeft20.width,390, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid20);
        /**
         * pyke fond scène 2
         * @type {Phaser.GameObjects.Image}
         */
        let gSpike20=this.add.image(gRight20.x+gRight20.width-130,550,'gSpike').setOrigin(0,1);
        this.groundContainer.add(gSpike20);

        let gSpike21=this.add.image(gRight20.x+gRight20.width+150,550,'gSpike2').setOrigin(0,1);
        this.groundContainer.add(gSpike21);
        /**
         *Caillou Sc 2
         * @type {Phaser.GameObjects.Image}
         */
        let gStone20=this.add.image(gRight20.x-50, 375,'gStone3').setOrigin(0,1)
        this.groundContainer.add(gStone20);
        /**
         *herbe Sc 2
         * @type {Phaser.GameObjects.Image}
         */
        let gGrass20=this.add.image(gRight20.x+gRight20.width-110, 370,'g-grass-4').setOrigin(0,1)
        this.groundContainer.add(gGrass20);
        let gGrass21=this.add.image(gLeft20.x+45, 420,'g-grass-5').setOrigin(0,1)
        this.groundContainer.add(gGrass21);
        /**
         *Arbre tomber Sc 2
         * @type {Phaser.GameObjects.Image}
         */
        let gTreef20=this.add.image(gRight20.x+gRight20.width-80, 355,'gTreef').setOrigin(0,1)
        gTreef20.angle+=8
        this.groundContainer.add(gTreef20);

         /**
         * filtre type blood au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBlood = this.add.sprite(0, 0, 'filterBlood1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'blood',
            frames: this.getFrames('filterBlood',3),
            frameRate: 16,
            repeat: -1
        });
        this.filterBlood.play('blood');

        this.filterSnow = this.add.sprite(0, 0, 'filterSnow1').setOrigin(0, 0);
            //animation de 5 images
        this.anims.create({
                key: 'snow',
                frames: this.getFrames('filterSnow',5),
                frameRate: 24,
                repeat: -1
            });
            this.filterSnow.play('snow');
            this.filterSnow.visible=false
        this.filterRain = this.add.sprite(0, 0, 'filterRain1').setOrigin(0, 0);
        //animation de 5 images
        this.anims.create({
            key: 'rain',
            frames: this.getFrames('filterRain',3),
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');
        this.filterRain.visible=false;
        this.screamer = this.add.sprite(0, 0, 'screamer1').setOrigin(0,0);
        this.screamer.scaleX=1.92
        this.screamer.scaleY=1.62
        this.screamer.visible=false
        //animation de 11 images
        this.anims.create({
            key: 'scream',
            hideOnComplete: true,
            duration:5,
            frames: this.getFrames('screamer',11),
            frameRate: 16,
            repeat: 2,
        });







        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        this.boy_walk.speed=0
        this.start=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1780, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        this.bgAnimation.scrollFactorX=0;
        this.filterBlood.scrollFactorX=0;
        this.filterSnow.scrollFactorX=0;
        this.filterRain.scrollFactorX=0;
        this.screamer.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.4;
        this.bg1Container.scrollFactorX=0.8;
        this.groundContainer.scrollFactorX=2;
        this.cameras.main.startFollow(this.boy_walk)
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */

    initKeyboard(){
        let me=this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=1;
                    me.bt.mute=false;
                    me.boy_idle.visible=false
                    me.boy_walk.visible=true
                    me.boy_walk.speed=2
                    me.boy_idle.flipX=true
                    me.boy_walk.flipX=false
                    console.log(me.boy_walk.speed)
                    break;

                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.boy_idle.visible=false
                    me.boy_walk.visible=true
                    me.boy_walk.flipX=true
                    me.boy_idle.flipX=true
                    me.boy_walk.speed=-2
                    me.speed=-1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    me.filterSnow.visible=true
                    me.filterRain.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.filterSnow.visible=false
                    me.filterRain.visible=true
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.filterSnow.visible=false
                    me.filterRain.visible=false
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.ghost1.play()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.screamer.visible=true
                    me.screamer.play('scream');
                    me.scary.play()
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.boy_shoot.visible=true
                    me.boy_shoot.play()


            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.boy_walk.visible=false
                    me.boy_walk.speed=0
                    me.boy_idle.visible=true
                    me.boy_walk.flipX=false
                    me.boy_idle.flipX=false
                    me.speed=0;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.boy_walk.visible=false
                    me.boy_walk.speed=0
                    me.boy_idle.visible=true
                    me.speed=0;
                    break;
            }
        });
    }
        /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){

            //déplacement de la caméra
        this.boy_walk.x+=this.boy_walk.speed;
        this.boy_idle.x=this.boy_walk.x;
        this.boy_shoot.x=this.boy_walk.x
         // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;


        //petit effet de vibrance sur le filtre Blood au tout premier plan
        this.filterBlood.setAlpha(Phaser.Math.Between(95,100)/100)
        this.bgAnimation.setAlpha(Phaser.Math.Between(95,100)/100)
        {
            this.count += 0.1;
            this.vine.forEach((vine) => {

                let points = vine.points;

                for (let i = 0; i < points.length-1; i++) {
                    points[i].x = Math.sin(i * 0.3 + this.count);
                }

                vine.setDirty();
            })
            {
                this.count2 += 0.1 ;
                this.vine2.forEach((vine2) => {

                    let points2 = vine2.points;

                    for (let i = 0; i < points2.length-1; i++) {
                        points2[i].x = Math.cos(i * 0.3 + this.count2);
                    }

                    vine2.setDirty();


                });

            }
            {
                this.count3 += 0.05 ;
                this.tree.forEach((tree) => {

                    let points3 = tree.points;

                    for (let i = 0; i < points3.length-1; i++) {
                        points3[i].x = Math.cos(i * 0.3 + this.count3);
                    }

                    tree.setDirty();


                });

            }
        }
    }


}
