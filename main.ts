let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 25 || bearing > 330) {
        basic.showString("N")
    } else if (bearing < 330 && bearing > 240) {
        basic.showString("W")
    } else if (bearing < 240 && bearing > 150) {
        basic.showString("S")
    } else if (bearing < 150 && bearing > 25) {
        basic.showString("E")
    } else {
        basic.showString("")
    }
})
