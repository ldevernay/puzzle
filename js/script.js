var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create
});

var PIECE_WIDTH = 200,
    PIECE_HEIGHT = 200,
    BOARD_COLS, BOARD_ROWS;
