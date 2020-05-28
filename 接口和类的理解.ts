

// case 1
// 实现一个print函数，它将传入的对象打印出来。在实际实现上，它将调用对象的getContent方法。
// 这样书写是有问题的，Typescript中有类型检查，必须要确保obj中存在getContent方法，才能让print函数正常工作不报错。
function print(obj): void {
  console.log(obj.getContent())
}

// case 2
// 用类来实现 打印a的内容，a实例上有getContent()方法。
class Article {
  getContent(): string {
    return 'I am an article.'
    
  }
}

function print(obj: Article): void {
  console.log(obj.getContent())
}

let a = new Article()
print(a)

/**
 * 这样的话，print函数只能打印Article类的对象。
 * 如果想要让它能够打印不止一个类的对象，如何保证他们都有getContent方法？
 */
 
 
// case 3  接口 声明getContent方法，这样一来，每个实现该接口的类，都必须实现getContent方法
interface ContentInterface {
  getContent(): string
}

class Article1 implements ContentInterface {
  getContent() {
    return 'I am an article.'
  }
}

class News implements ContentInterface {
  getContent() {
    return 'I am news.'
  }
}

class Passage implements ContentInterface {
  getContent() {
    return 'I am a passage.'
  }
}

function print(obj: ContentInterface): void {
   // 实现了ContentInterface的对象，一定有getContent方法。
  console.log(obj.getContent())
}

let a1 = new Article();
let p = new Passage();

print(a1); // "I am an article."
print(p); // "I am a passage."
}

// reference: https://segmentfault.com/q/1010000005648974
