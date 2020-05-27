// case 1
interface Lengthwise {
  length: number
}

//  extends 上述接口，通过接口来约束泛型
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// T被接口所约束，所以调用时也要符合接口定义的格式
loggingIdentity({ length: 1 })

// case 2
// 约束key为T中的属性，注意如下写法
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d:4 }
getProperty(x, 'a')
getProperty(x, 'd')
// getProperty(x, 'm')  //  报错 m不是x的属性

// case 3  工厂函数 没看懂???
function create<T>(c: { new():T }): T {
  return new c()
}

// case 4
class BeeKeeper {
  hasMask:  boolean
}

class LionKeeper {
  nametag: string
}

class Animal {
  numLengs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

// 工厂函数   没看懂 ???
// 1 语法没看明白
// 2 这里这样写的意义是???
// 3 泛型约束在这里是有什么好处???
function createInstance<T extends Animal>(c: new() => T): T {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask