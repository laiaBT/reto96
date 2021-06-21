controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage7`)
    music.playTone(262, music.beat(BeatFraction.Half))
    escogido = 1
    Comprobar()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage10`)
    music.playTone(784, music.beat(BeatFraction.Half))
    escogido = 4
    Comprobar()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage8`)
    music.playTone(440, music.beat(BeatFraction.Half))
    escogido = 2
    Comprobar()
})
function Comprobar () {
    if (escogido != orden[actual]) {
        game.over(false)
    }
    actual += 1
    mySprite.setImage(assets.image`myImage11`)
    pause(200)
    if (actual == orden.length) {
        pause(500)
        orden.push(randint(1, 4))
        Simon()
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`myImage9`)
    music.playTone(587, music.beat(BeatFraction.Half))
    escogido = 3
    Comprobar()
})
function Simon () {
    actual = 0
    for (let index = 0; index < orden.length; index++) {
        if (orden[actual] == 1) {
            mySprite.setImage(assets.image`myImage7`)
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (orden[actual] == 2) {
            mySprite.setImage(assets.image`myImage8`)
            music.playTone(440, music.beat(BeatFraction.Half))
        }
        if (orden[actual] == 3) {
            mySprite.setImage(assets.image`myImage9`)
            music.playTone(587, music.beat(BeatFraction.Half))
        }
        if (orden[actual] == 4) {
            mySprite.setImage(assets.image`myImage10`)
            music.playTone(784, music.beat(BeatFraction.Half))
        }
        mySprite.setImage(assets.image`myImage11`)
        pause(Velocidad)
        actual += 1
    }
    Velocidad += -30
    actual = 0
}
let actual = 0
let escogido = 0
let Velocidad = 0
let orden: number[] = []
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
orden = [randint(1, 4)]
Velocidad = 300
game.showLongText("Intenta seguir la secuencia. ¡Suerte!", DialogLayout.Bottom)
pause(500)
mySprite.setImage(assets.image`myImage11`)
pause(200)
Simon()
