// case 1
let s = 'foo'
s = null    // Type 'null' is not assignable to type 'string'.

let sn:string | null = 'bar'
sn = null
sn = undefined  // Type 'undefined' is not assignable to type 'string | null'.

// 这样写不会报错，null undefined可以赋值给任何类型

// tsc 可以为null的类型.ts --strictNullChecks
// 这样编译则会报错

// --strictNullChecks
// 在写第三方库的时候很有用，但是我暂时还用不到？？ 哈哈

// case 2  strictNullChecks 在可选属性和可选参数上的应用
function f(x:number, y?:number) {
  return x + (y || 0)
}
// 可选参数不传的时候是undefined，所以y是number | undefined 的联合类型
f(1, 2)
f(1)
f(1, undefined)
f(1, null)  // 使用strictNullChecks编译的话则会报错

// case 3
class C {
  a: number
  b?: number
}

let c = new C()
c.a = 12
c.a = undefined   // 编译时报错，a是number类型
c.b = 13
c.b = undefined   // 不报错，可选参数 undefined是其联合类型
c.b = null    // 报错 不能赋值为null

// case 4
function f1(sn: string | null): string {
  if (sn === null) {
    return 'default'
  } else {
    return sn
  }
}

function f2(sn: string | null): string {
  return sn || 'default'
}

function f3(sn: string | null): string {
  // 感叹号语法，推断出这里不是null ???
  return sn! || 'default'
}

function broken(name: string | null): string {
  // 编译器无法识别内部函数name是否为null，所以编译时会报错
  // 类型断言 name! 表示 name肯定不为null
  function postfix(epithet: string) {
    return name!.charAt(0) + '.the' + epithet
  }
  name = name || 'Bob'    // 这里已经给了默认值，所以name肯定不为null
  return postfix(name)
}
broken(null)