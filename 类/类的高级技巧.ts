

// case 1 类的静态成员
class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(msg?: string) {
    this.greeting = msg
  }
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet()) 


// case 2 修改类的静态属性

// 重新创造一个Greeter类型的构造器
// typeof  取得类的类型
// 这里的greeterMaker是Greeter类型的类，而不是实例
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey, there'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())