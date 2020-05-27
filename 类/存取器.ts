
let password = 'mypass'

class Employee {
  private _fullName: string

  // Object.defineProperty 对象劫持
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (password && password === 'mypass') {
      this._fullName = newName
    } else {
      console.log('Error: have no access')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}