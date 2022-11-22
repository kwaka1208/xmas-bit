let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB_RGB)
let range = strip.range(0, strip.length())
strip.setBrightness(30)
for (let カウンター = 0; カウンター <= strip.length() - 1; カウンター++) {
    strip.setPixelColor(カウンター, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
}
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
