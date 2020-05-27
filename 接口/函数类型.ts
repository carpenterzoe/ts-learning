/** 函数类型 */
interface SearchFn {
    // 函数的参数列表及类型: 返回值
    (source: string, subString: string): boolean
}

let mySearch: SearchFn

// 函数调用时的传参和返回值，都需要符合接口中定义的要求。
mySearch = function(src, sub) {
    let res = src.search(sub)   // search 字符串方法，检索子字符串
    return res > -1
}