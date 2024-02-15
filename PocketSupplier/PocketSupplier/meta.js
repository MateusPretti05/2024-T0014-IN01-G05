
//criação da variável config
var config =
{
    type: Phaser.AUTO,//definição do tipo
    width:800,//definição da largura
    height:600,//definição da altura
    //criação da cena e definicão preload,create e update
    scene:{
        preload: preload,
        create: create,
        update: update,
    }
};
var game = new Phaser.Game(config) //criação da variável game e colocando a variável config para funcionar
//definindo variáveis
var map;
var player;
var cursors;
var keybA;
var text

function preload(){
    //sprite do player
    this.load.spritesheet('player','assets/boneco.png',{frameWidth:166, frameHeight:186});
    //animação do plano de fundo
    this.load.image('map','assets/image.jpeg');
}



function create(){
    //carregando o plano de fundo
    this.add.image(400,300,'map').setScale(1.2);
    //carregando o mapa
    player = this.add.sprite(300,300,'player').setScale(0.7);
   
    cursors = this.input.keyboard.createCursorKeys();
    keybA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keybD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keybW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keybS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    
    
    this.anims.create({
        key: 'fly', // definição key
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 11 }),
        frameRate: 1, // definição da velocidade do Frame
        repeat: -1 // colocando para repetir infinitamente
    });

    player.anims.play('fly'); // colocando a animação com a key para funcionar

}

function update(){

    if (cursors.left.isDown || keybA.isDown){
        player.x -=5
    } 

    else if (cursors.right.isDown || keybD.isDown){
        player.x +=5
    }

    else if(cursors.up.isDown || keybW.isDown ){
        player.y -=5
    }

    else if(cursors.down.isDown || keybS.isDown){
        player.y +=5
    }
}
