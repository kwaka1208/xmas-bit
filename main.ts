function pattern3 () {
    strip.clear()
    for (let カウンター = 0; カウンター <= strip.length() - 1; カウンター++) {
        strip.setPixelColor(カウンター, neopixel.hsl(0, 100 / strip.length() * カウンター, 100 / strip.length() * カウンター))
    }
    strip.show()
}
function pattern2 () {
    for (let カウンター = 0; カウンター <= strip.length() - 1; カウンター++) {
        if (カウンター % 2 == 0) {
            strip.setPixelColor(カウンター, neopixel.rgb(255, 255, 255))
        } else {
            strip.setPixelColor(カウンター, neopixel.rgb(0, 0, 0))
        }
    }
    strip.show()
}
function BlackorWhite () {
    return randint(0, 1) * 255
}
input.onButtonPressed(Button.A, function () {
    if (mode == MODE_MAX) {
        mode = 0
    } else {
        mode += 1
    }
    selectMode(mode)
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        mode = MODE_MAX
    } else {
        mode += -1
    }
    selectMode(mode)
})
function pattern1 () {
    for (let カウンター = 0; カウンター <= strip.length() - 1; カウンター++) {
        strip.setPixelColor(カウンター, neopixel.rgb(BlackorWhite(), BlackorWhite(), BlackorWhite()))
    }
    strip.show()
}
function selectMode (_mode: number) {
    basic.showNumber(_mode)
    if (mode == 1) {
        pattern1()
    } else if (_mode == 2) {
        pattern2()
    } else if (_mode == 3) {
        pattern3()
    } else {
        strip.clear()
        strip.show()
    }
}
let MODE_MAX = 0
let mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
let range = strip.range(0, strip.length())
strip.setBrightness(30)
mode = 0
MODE_MAX = 3
basic.showNumber(mode)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
