// case 1
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 10    报错，不能修改只读属性

// case 2   只读数组  
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

// ro[0] = 12   给只读数组中的元素重新赋值，编译时会报错
// ro.length = 100  只读数组无法修改length，报错
// ro.push(5)   只读数组没有push方法

// a = ro   注意：即使是重新赋值回去也报错，a是可修改的数组，ro为只读数组。
a = ro as number[]  // 重新赋值回去的办法

/**
 * const & readonly
 * 作为变量使用const
 * 作为属性则用readonly
 */