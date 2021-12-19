namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let myFood: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
info.setLife(3)
for (let index = 0; index < 10; index++) {
    mySprite2 = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    mySprite2.setPosition(randint(5, 155), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2100, function () {
    myFood = sprites.create(assets.image`food`, SpriteKind.Food)
    myFood.setPosition(scene.screenWidth(), randint(5, 115))
    myFood.vx = -75
})
