type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {

    } else if (easing === 'ease-in-out') {

    } else if (easing === 'ease-out') {

    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'ease-out')
// button.animate(0, 0, 'uneasy')  报错 不符合Easing联合类型
button.animate(0, 0, null)  // --strictNullChecks 严格编译才报错