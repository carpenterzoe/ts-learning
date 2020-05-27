let suits = ['hearts', 'spades', 'clubs', 'diamonds']

// 函数重载
// 涵盖了下面函数实现的2种传参和返回值的场景
function pickCard(x: { suit: string, card: number }[]): number
function pickCard(x: number): { suit: string, card: number }
// 注意：编译器对函数重载的处理是依次重试的，所以最精确的定义应该写在最上面。

// 下面是函数实现，不是函数重载
function pickCard(x): any {
  // 参数 x 没有类型约束，但实际上这个函数期望传入输入或者数字
  // 对于这种场景，可以用函数重载做一些约定
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor( x / 13 )
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]

// 这里pickCard传入的参数没有类型约束，没有做类型检查
// 加入了前面的函数重载后，有了正确的类型检查
let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)