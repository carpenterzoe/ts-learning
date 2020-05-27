
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select()
}

class Button extends Control implements SelectableControl {
    select() {

    }
}

class TextBox extends Control {
    select() {

    }
}

// 错误
// class ImageC implements SelectableControl {
//     select() {

//     }
// }