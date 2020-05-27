interface Square {
    color: string
    area: number
}

// 可选属性
// 1. 对可能存在的属性做预定义
// 2. 可以捕获引用了不存在的属性带来的错误
interface SquareConfig {
    color?: string
    width?: number
}

// Square 函数返回值
function createSquare(config: SquareConfig): Square {
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