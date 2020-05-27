/** 索引： ts支持两种索引签名，字符串和数字。*/

// case 1
interface StringArray {
    // 索引签名，索引是数字类型。 数组中的元素是字符串类型。
    // 表示当用数字类型的索引去查找数组中的元素时，会查找到字符串类型的返回值。
    [index: number]: string
}

let myArray: StringArray
myArray = ['1', '2']
let myStr:string = myArray[0]

// case 2
class Animal {
    name: string
}

class Dog extends Animal {
    breed: string
}

interface NotOkay {
/*
    这里数字索引签名返回的类型，
    不是字符串索引签名的返回的子类型，
    所以会报错。

    数字类型的索引签名会被转化为字符串再去检索，
    所以它的返回类型 需要是字符串类型索引签名的子类。
    [x: number]: Animal
    [x: string]: Dog
 */
    // 正确写法 (数字索引的是子类，字符串索引的父类)
    [x: number]: Dog
    [x: string]: Animal
}

// case 3
interface NumberDic {
    [index: string]: number

    // 添加一些额外的属性
    length: number
    // name: string   // 错 name返回的类型和索引返回类型不匹配
}

// case 4 只读的索引签名
interface ReadonlyStrArr {
    readonly [index: number]: string
}

let myArr: ReadonlyStrArr = ['Alice', 'Bob']
// myArr[2] = 'Mallory' 只读的索引签名，无法再新增