function B_Forward () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 0)
}
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    Stop()
    OLED.clear()
    OLED.writeStringNewLine("S")
})
function Forward () {
    A_Forward()
    B_Forward()
}
function RightTurn () {
    A_Reverse()
    B_Forward()
}
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    Reverse()
    OLED.clear()
    OLED.writeStringNewLine("R")
})
function A_Reverse () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function A_Forward () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    Forward()
    OLED.clear()
    OLED.writeStringNewLine("F")
})
function A_Stop () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function B_Stop () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
}
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    LeftTurn()
    OLED.clear()
    OLED.writeStringNewLine("LT")
})
function B_Reverse () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 1)
}
function Reverse () {
    A_Reverse()
    B_Reverse()
}
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    RightTurn()
    OLED.clear()
    OLED.writeStringNewLine("RT")
})
function Stop () {
    A_Stop()
    B_Stop()
}
function LeftTurn () {
    A_Forward()
    B_Reverse()
}
OLED.init(128, 64)
led.enable(false)
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
Stop()
