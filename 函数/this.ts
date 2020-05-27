let deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {

    // 改成箭头函数后，this指向的是函数定义时的this
    // 箭头函数保存的是函数创建时的this值
    // 于是后续调用this.suits 可以正确指向之前定义的属性了
    return () => {
      // 随机获取 0 ~ 51
      // Math.random() 范围 大于等于0，小于1
      // Math.floor() 向下取整
      let pickedCard = Math.floor(Math.random() * 52)
      
      // 获取 0 ~ 3
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],   // 获取花色
        // suit: this.a.s,  this是any why???
        card: pickedCard % 13   // 获取点数
      }
    }
  }
}

// createCardPicker: function() {
//   return function() {
//     let pickedCard = Math.floor(Math.random() * 52)
//     let pickedSuit = Math.floor(pickedCard / 13)
//     return {
//       suit: this.suits[pickedSuit],   // 获取花色
//       card: pickedCard % 13   // 获取点数
//     }
//   }
// }

//  这里调用createCardPicker返回的是上面的函数
let cardPicker = deck.createCardPicker()

// 此处执行上述函数，this是全局的global
// 因为js的this 指向运行时的this，而不是定义的时候
// 调用时，全局的this上面没有suits属性，所以报错
let pickedCard = cardPicker()
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

// suit: this.suits[pickedSuit],
// Cannot read property '3' of undefined


// case 2 重写

// Card接口 函数返回的对象
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  
  // 该函数的返回值也是函数，内部返回的函数的返回值符合Card接口
  // 显式指明这里的this是Deck
  createCardPicker(this: Deck): () => Card
}

let deck2: Deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        // 显式指定this为Deck之后，则无法访问不存在的属性
        // suit: this.suits.a
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker1 = deck2.createCardPicker()
let pickedCard1 = cardPicker1()


// case 3 this参数在回调函数中

interface UIElement {
  // 函数的参数是 onclick函数，且onclick的参数和返回值也指明了
  // 这里this显式指明了类型void
  addClickListener(onclick:(this: void, e: Event) => void): void
}

class Handler {
  type: string
  // onClickBad(this: Handler, e: Event) {
  //   this.type = e.type
  // }

  // 除了显式指明this以外，在类中使用箭头函数也可以使this指向类
  // 这种情况，可以用于接口中已经声明过this的类型
  // 接口实现时，指定另外的类型，则会导致不符合原本的this指定
  // 于是采用把类中的函数改成箭头函数的写法
  
  onClickBad = (e: Event) => {
    this.type = e.type
  }
}

let h = new Handler()
let uiElement: UIElement = {
  addClickListener() {

  }
}

// 定义 addClickListener 时，不需要写参数，调用时才需要写？？
uiElement.addClickListener(h.onClickBad)