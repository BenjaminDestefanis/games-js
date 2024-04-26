// Game basic configuration

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.game(config)

function preload(){}

function create(){}

function update(){}