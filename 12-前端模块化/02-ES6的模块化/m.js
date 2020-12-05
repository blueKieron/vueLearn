import {
  flag,
  sum
} from './a.js'
if (flag) {
  console.log('xiaoming 是天才');
  console.log(sum(20, 30));
}
//直接导入export定义的变量
import {num1,height} from './a.js'
console.log(num1)
console.log(height)

//导入 export的function/class
import {mul,Person} from './a.js'
console.log(mul(12,90))

const p=new Person()
p.run()
//导入export default中的内容
import addr from './a.js'
console.log(addr)

//统一全部导入
//import {flag,num1,height,Person,mul,sum} from './a.js'
import * as a from './a'
console.log(a.flag)
console.log(a.height)