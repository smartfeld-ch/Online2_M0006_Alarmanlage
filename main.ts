
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Schalter) {
        Schalter = 0
    } else {
        Schalter = 1
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("aktiv")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
let Schalter = 0
Schalter = 0
basic.forever(function () {
    if (Schalter) {
        if (input.lightLevel() > 80) {
            basic.showIcon(IconNames.Angry)
            music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(2000)
    }
})
