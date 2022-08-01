//类型兼容性
let arr = ['a', 'b', 'c']
arr.forEach(item => { })
arr.forEach((item, index) => { })
arr.forEach((item, index, array) => { })
//1].Structural System(结构化类型系统)--TS使用这个，别名：鸭子系统，
// 【类型检查关注的值所具有的形状】也就是两个对象具有相同的形状，则认为属于同一个类型
// [成员多的赋值给成员少的]，至少有一个一样
class Point1 { x: number; y: number }
class Point2 { x: number; y: number; z: number }
const pp: Point1 = new Point2()

//2]Nominal Type System(标明类型系统)


//1. 接口兼容性--类似class，并且class和interface之间也可以兼容-多给少
interface Po1 { x: number; y: number }
interface Po2 { x: number; y: number }
interface Po3 { x: number; y: number; z: number }
let po1: Po1
let po2: Po2
let po3: Po3
// 正确
// po1 = po2
// po2 = po1
// po1 = po3

// 错误
// po3 = po1

//2.函数兼容性
// 1)参数个数：【参数少的可以赋值给参数多的】
type F1 = (a: number) => void
type F2 = (a: number, b: number) => void
let f1: F1
// let f2: F2 = f1
// 错误格式
// f1 = f2
//  2)参数类型
// 原始类型
type F3 = (a: number) => void
type F4 = (a: number) => void
let f3: F3
let f4!: F4
f3 = f4

// 对象类型-少给多
interface Point1D {
    a: number; b: number
}
interface Point2D {
    a: number; b: number; c: number
}
type P1 = { p: Point1D }//相当于2参数
type P2 = { p: Point2D }//相当于3参数
let pp1: P1
// let pp2: P2 = pp1
// pp1 = pp2错误的
// 3）返回值类型--多给少
// 原始类型
type F5 = () => string
type F6 = () => string
let f5: F5
let f6: F6
// f5 = f6
// f6 = f5
// 对象类型
type F7 = () => { name: string }
type F8 = () => { name: string; age: number }
let f7: F7
let f8: F8
// f7 = f8