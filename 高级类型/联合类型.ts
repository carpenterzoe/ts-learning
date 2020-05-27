// case 1
function padLeft(val: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + val
  }
  if (typeof padding === 'string') {
    return padding + val
  }
  // 前两种情况如果满足，则已经return出去了。
  throw new Error(`Expected string or number but got ${padding}.`)
}

padLeft('Hello world', 4)

// 交叉类型：几种类型之和   竖杠分隔  padding: string | number
// 联合类型：几种类型之一满足即可

// case 2
interface Bird {
  fly()
  layEggs()
}
interface Fish {
  swim()
  layEggs()
}

// 这里是冒号是表示函数类型还是函数返回值？？？
function getSmallPet(): Fish | Bird {
  return  // 为什么这里return就不报错了？？？
}

let pet = getSmallPet()
pet.layEggs()
// pet.swim() 访问不了，联合类型只能访问二者的共有成员