
// 用接口来明确一个类要符合某种契约

// 实例接口
interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}
// 构造器接口
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface
}

// 定义一个类去实现接口
// 需要拥有接口中定义的属性和方法

class Clock implements ClockInterface {
    currentTime: Date

    constructor (h: number, m: number) {

    }

    setTime(d: Date) {
        this.currentTime = d
    }
}