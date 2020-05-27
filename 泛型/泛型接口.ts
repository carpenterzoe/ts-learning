// 泛型 类似于一种类型的指代符
// 想象一下，当希望函数入参返回值都是同一种类型
// 如果写明某种单一类型，那样太不灵活，无法重用
// 写成any，虽然可以正常编译，但却无法实现类型约束

// case 1
// <T> 类型变量，只用于表示变量，不用于表示值
// T 帮我们捕获用户传入的类型
function identity<T>(arg: T): T {
  // console.log(arg.length)  // T 可能是任意类型，所以不能访问length属性
  return arg
}

// 调用
let output = identity<string>('myStr')

let output1 = identity('myStr') // 类型推论

// case 2 泛型函数的类型
let myIdentity: <T>(arg: T) => T = identity
// 对象字面量的方式
let myIdentity1: { <T>(arg: T): T } = identity

// case 3 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T
}
let myIdentity2: GenericIdentityFn = identity

// case 4 T作为接口的参数  调用时就知道使用的是什么类型
interface GenericIdentityFn1<T> {
  (arg: T): T
}
let myIdentity3: GenericIdentityFn1<number> = identity