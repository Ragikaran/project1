input.onButtonPressed(Button.A, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMM))
})
input.onButtonPressed(Button.B, function () {
    timeanddate.advanceBy(15, timeanddate.TimeUnit.Minutes)
})
basic.forever(function () {
    timeanddate.numericTime(function (hour, minute, second, month, day, year) {
        if (minute > 15 && input.soundLevel() == 128) {
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . # # # .
                    . # . # .
                    `)
                music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.pause(100)
                basic.showLeds(`
                    # . # . #
                    . # # # .
                    . . # . .
                    . # # # .
                    . # . # .
                    `)
                music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
                basic.pause(100)
            }
            basic.clearScreen()
        }
    })
})
