
// 交叉类型 将多个类型合并为一个类型

function extend<T, U>(first: T, second: U): T & U {
  let res = {} as T & U   // 类型断言

  for (let k in first) {
    // res[k] = first[k]   // 报错 类型T不能赋值给T & U, why??? 
    res[k] = first[k] as any    // any类型可以赋值给任何类型????
  }

  for (let k in second) {
    if (!res.hasOwnProperty(k)) {   // 避免重复赋值
      // res[k] = second[k]   // 报错 类型U不能赋值给 T & U
      res[k] = second[k] as any
    }
  }
  return res
}

class Person {
  // 相当于在 class中定义了name属性，在构造函数中赋值
  // 一种简写的方式
  constructor(public name: string) {

  }
}

interface Loggable {
  log(): void
}

class ConsoleLogger implements Loggable {
  log() {

  }
}

// 两个实例扩展到一起，成为交叉类型
// 于是jim实例既有Person的name属性，又有ConsoleLogger的log方法
var jim = extend(new Person('jim'), new ConsoleLogger())
jim.name
jim.log()