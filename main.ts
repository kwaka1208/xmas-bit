let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB_RGB)
let range = strip.range(0, 12)
strip.setBrightness(30)
let count = 0
for (let index = 0; index < strip.length(); index++) {
    strip.setPixelColor(count, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    count += 1
}
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
