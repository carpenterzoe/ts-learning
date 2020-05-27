// case 1
class Greeter {
    greeting: string
    constructor(msg: string) {
        this.greeting = msg
    }
    greet() {
        return 'Hello, ' + this.greeting
    }
}

let greeter = new Greeter('world')
greeter.greet()

// case 2
class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!')
    }
}

class Snake extends Animal {
    move(distance: number = 5) {
        console.log('Slithering...')
        super.move(distance)
    }
}

class Horse extends Animal {
    move(distance: number = 45) {
        console.log('Galloping...')
        super.move(distance)
    }
}

const dog = new Dog('Bob')
dog.bark()
dog.move(10)

const snake = new Snake('Sis')
snake.move(999)

const horse = new Horse('Jack')
horse.move(888)