let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB_RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.shift(1)
})
