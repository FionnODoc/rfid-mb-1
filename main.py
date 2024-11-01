def on_button_pressed_a():
    basic.show_string(MFRC522.read())
input.on_button_pressed(Button.A, on_button_pressed_a)

MFRC522.init()

def on_forever():
    pass
basic.forever(on_forever)
