
// case 1 联合类型 声明类型
class Animal {
  numLegs: number
}

class Bee extends Animal {

}

class Lion extends Animal {

}

// 如果想要zoo被推断为Animal的数组类型
// 右边的赋值中，没有明确为Animal类型的实例，因此推断不出这样的结果
let zoo = [new Bee(), new Lion()]

// 解决方式：明确声明为Animal数组类型
// 如果没有声明，zoo会被推断为 右侧2个实例的联合数组类型
let zoo1: Animal[] = [new Bee(), new Lion()]


// case 2 上下文类型
// 如果mouseEvent没有显式指明类型，那么会根据上下文推断类型
// 如果指明了类型，则上下文推断无效，以指明的类型为准
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.clickTime)
  // 这里上下文把mouseEvent推断为 any，所以可以访问clickTime属性
}

window.onmousedown = function(mouseEvent: Event) {
  // console.log(mouseEvent.clickTime)
  // 显式指明为事件对象后 无法再访问clickTime
  // 只能访问事件对象上的属性
  mouseEvent.stopPropagation()
}