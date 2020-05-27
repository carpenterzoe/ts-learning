
interface Counter {
    
    // 这个接口实现的函数
    (start: number): string
    
    // 接口中可以访问的属性和方法
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function(start: number) {

    }) as Counter

    counter.interval = 123
    counter.reset = function() {

    }

    return counter
}

/**
 * getCounter() 函数返回的是Counter
 * 所以调用之后拿到的返回值中，可以实现接口中定义的混合类型
 * 即 既可以直接作为函数去调用，也可以访问属性、方法。
 */
let c = getCounter()
c(10)
c.reset()
c.interval = 5.0