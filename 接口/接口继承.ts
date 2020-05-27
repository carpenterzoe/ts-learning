interface Shape {
    color: string
}

interface PenStroke {
    penWidth: number
}

// 接口继承，可以继承多个接口
interface Square extends Shape, PenStroke {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 9