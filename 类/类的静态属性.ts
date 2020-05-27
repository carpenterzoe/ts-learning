
// 静态属性，直接在类上面访问，而不是在this实例访问
// 后续实战中会用到静态属性
class Grid {
  static origin = { x:0, y:0 }
  scale: number
  constructor(scale: number) {
    this.scale = scale
  }

  // 传入坐标点，计算坐标点到原点的距离
  calcDistanceFromOrigin(point: {x: number, y: number}) {
    
    // 静态属性，直接在类上面访问，而不是在this实例访问
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    // 数学公式 求距离，知道即可
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)