class GenericNumber<T> {
  zeroVal: T    // 成员变量
  add: (x: T, y: T) => T    // 成员方法
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroVal = 0
myGenericNumber.add = function(x, y) {
  return x + y
}

// 泛型类只指实例部分的类型，静态属性不能使用泛型类型