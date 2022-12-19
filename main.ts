function pattern3 () {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.show()
    loop = 0
    direction = 1
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
function Pattern4 () {
    Hue = 360
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
    } else if (_mode == 4) {
        Pattern4()
    } else {
        strip.clear()
        strip.show()
    }
}
let Hue = 0
let direction = 0
let loop = 0
let MODE_MAX = 0
let mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB_RGB)
let range = strip.range(0, strip.length())
strip.setBrightness(255)
mode = 0
MODE_MAX = 4
basic.showNumber(mode)
basic.forever(function () {
    if (mode == 1) {
        strip.rotate(direction)
        strip.show()
        basic.pause(200)
    } else if (mode == 2) {
        strip.rotate(direction)
        strip.show()
        basic.pause(200)
    } else if (mode == 3) {
        loop += direction
        if (loop == 0 || loop == strip.length() - 1) {
            direction = direction * -1
        }
        strip.rotate(direction)
        strip.show()
    } else if (mode == 4) {
        Hue += -1
        if (Hue < 0) {
            Hue = 359
        }
        strip.showColor(neopixel.hsl(Hue, 99, 30))
    }
})
