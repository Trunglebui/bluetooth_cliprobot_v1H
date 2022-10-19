function bluecontrol () {
    if (uartData == "A") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (uartData == "B") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (uartData == "C") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    } else if (uartData == "D") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    } else if (uartData == "0") {
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 0)
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        music2()
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function music2 () {
    music.setVolume(255)
    if (uartData == "1") {
        music.playTone(262, music.beat(BeatFraction.Whole))
        SuperBit.Servo(SuperBit.enServo.S1, 20)
    } else if (uartData == "2") {
        music.playTone(294, music.beat(BeatFraction.Whole))
        SuperBit.Servo(SuperBit.enServo.S1, 50)
    } else if (uartData == "3") {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (uartData == "4") {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (uartData == "5") {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (uartData == "6") {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (uartData == "7") {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (uartData == "O") {
        music.setVolume(0)
    }
}
let uartData = ""
let connected = 0
connected = 0
SuperBit.Servo2(SuperBit.enServo.S1, 50)
bluetooth.startUartService()
basic.showString("ON")
