input.onButtonPressed(Button.A, function () {
	
})
MFRC522.Init()
motobit.enable(MotorPower.On)
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
    basic.pause(2000)
    if (MFRC522.getID() == 120482115445) {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.pause(2000)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
    if (MFRC522.getID() == 807458779096) {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        basic.pause(2000)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
})
basic.forever(function () {
	
})
