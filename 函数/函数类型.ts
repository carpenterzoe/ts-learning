
// case 1 剩余参数
function buildName(firstName: string, ...rest:string[]): string {
  return firstName + ' ' + rest[0]
}

// ... 剩余参数，会收集后续所有传入的参数放入数组
let res1 = buildName('Bob')
let res2 = buildName('Bob', 'Adams', 'Sammy', 'Mary')
let res3 = buildName(undefined, 'Adams')