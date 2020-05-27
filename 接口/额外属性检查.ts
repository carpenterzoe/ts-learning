
// case 1
interface labelVal {
    label: string
}

// printLabel 函数要接收的参数，定义在了labelVal这个接口中
function printLabel(labelObj: labelVal) {
    console.log(labelObj.label)
}

let myObj = { size: 10, label: 'size 10 Object' }
printLabel(myObj)

// case 2
interface Square {
    color: string
    area: number
}

interface SquareConfig {
    color?: string
    width?: number

    // 表示SquareConfig可以有任意数量的属性
    // 只要不是color width
    [propName:string]: any  // 索引属性名是字符串，值是任意类型
}

function createSquare1(config: SquareConfig): Square {
    let newSquare = {
        color: 'white',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

// 类型断言
// let mySquare = createSquare1({ colour: 'black', width: 100 } as SquareConfig)

let mySquare = createSquare1({ color: 'black', width: 100 })

// 注意这种把变量保存起来再传入的方法，会绕过类型检查!!!
// 是否需要避免这种写法??
let squareOptions = {
    colour: 'black',
    width: 100
}
let mySquare1 = createSquare1(squareOptions)
/**
 * 总结
 * 跳过类型检查的方式
 * 1. 类型断言
 * 2. 索引签名?? 音译
 * 3. 把要传入的参数先用变量保存 ??? 注意这是我常用的写法!!
 * 
 * 如果需要额外的属性，应该考虑在接口中再去定义它。
 * 而不是绕过类型检查。
 */