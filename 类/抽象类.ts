

// 抽象类一般作为其他派生类的基类使用，不能直接被实例化
abstract class myClass {

  // 抽象类中的 抽象方法，不能直接实现，必须在派生类中实现
  // 抽象方法也可以使用private等修饰符
  abstract makeSound(): void
  // 但抽象类中也可以包含一般的方法实现
  move():void {
    console.log('roaming the earth...')
  }
}

// case 1
abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void {
    console.log('Department name ' + this.name)
  }
  // 定义抽象方法，需要在派生类中实现
  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  printMeeting():void {
    console.log('accounting department meeting')
  }
  generateReports(): void {
    console.log('Generating accounting reports..')
  }
}

// let department: Department z
// 如果指定了类型为Department，则无法在实例中调用generateReports
// 因为generateReports是AccountingDepartment这个类中实现的
let department = new AccountingDepartment('account')
department.printName()
department.printMeeting()
department.generateReports()