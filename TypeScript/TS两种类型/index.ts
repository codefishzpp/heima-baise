// 类型声明文件
// 类型
type Props3 = { x: number; y: number }

// 错误演示,.d.ts文件中,不能出现可执行代码(代码实现)
// 可执行文件
function add1(num1: number, num2: number) {
    return num1 + num2
}
console.log(add1(1, 2));

import { count, songName, add } from "./declare";
type Person = {
    name: string
    age: number
}
let p: Partial<Person> = {
    name: 'jack'
}
console.log('count', count);
console.log('songName', songName);
console.log('add()', add(1, 4));



