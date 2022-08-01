// 1.原始数据类型
let a: number = 18
let b: string = 'aaa'
let c: boolean = false
let d: null = null
let e: undefined = undefined
let f: symbol = Symbol()

// 2.数组类型
let number: number[] = [1, 3, 5] //推荐使用
let strings: Array<string> = ['a', 'b', 'c']//只能出现字符串数值类型的数组

// 3.联合类型
let arr: (number | string)[] = [1, 'a', 3, 'b']//联合类型的语法，只有一根竖线|

// 4.类型别名
// 简化该类型的使用，type关键字来闯进啊类型别名
// 创建类型别名后，直接【使用该类型别名做欸变量的类型注解】即可
type CustomArray = (number | string)[]
let arr1: CustomArray = [1, 'a', 3, 'b']

// 5.函数类型:函数参数和返回值
// 1）单独指定参数， 返回值类型---function add():number
function add(num1: number, num2: number): number {
    return num1 + num2
}
console.log(add(1, 2));

// 2）同时指定参数，返回值的类型
// 通过，类似箭头函数的形式语法来为函数添加类型
const adda: (num1: number, num2: number) => number = (num1, num2) => {
    return num1 - num2
}
// 3）函数没有返回值，返回值类型是void
function greet(name: string): void {
    console.log('hello', name);
}
greet('jack')

// 4)参数可传可不传，用到可选参数
// 可选参数只能出现在参数列表最后
function mySlice(start?: number, end?: number): void {
    console.log("起始索引", start, "结束索引", end);
}
mySlice()
mySlice(1)
mySlice(1, 2)

// 6.对象类型：描述对象的结构
// 方法有参数，使用greet(name: string): void 
// 多个属性用;隔开
// 方法的类型也可以使用箭头函数(sayHi:()=>void)
let person: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
    name: 'aaa',
    age: 18,
    sayHi() {
    },
    greet(name) {
    }
}

//对象可选属性:使用axios({...}),如果发送get请求，method属性就可以省略
function myAxios(config: { url: string; method?: string }) {
    console.log(config);
}
myAxios({
    url: '',
})

// 7.接口
// 当一个对象类型被多次使用，一般会使用接口表述对象的类型，达到复用的目的
// 使用interface关键字来声明接口
// 接口名称(如:person)，可以任意合法的变量名称
// 声明接口后，直接使用【接口名称作为变量的类型】
// 因为每一行只有一个属性值，因此属性欸习惯后没；
interface IPerson {
    name: string
    age: number
    sayHi(): void
}
let person1: IPerson = {
    name: 'jack',
    age: 19,
    sayHi() { }
}

// interface接口，type类型对比
// 相同点:都可以给对象指定类型
// 不同点:接口只能为对象指定类型,类型别名,不仅可以为对象指定类型,实际上可以为任意类型指定的别名
type IPerson1 = {
    name: string
    age: number
    sayHi(): void
}
type NumStr = number | string

//若俩接口之间有相同的方法或者属性,可以将公共的属性或者方法抽离出来,通过继承来实现服用
interface Point2D { x: number; y: number }
interface Point3D { x: number; y: number; z: number }
// 优化
interface Point2D { x: number; y: number }
interface Point3D extends Point2D { z: number }
let p3: Point3D = {
    x: 1,
    y: 2,
    z: 3
}

// 7.元组
// 假设经纬度记坐标
// 该方法使用number[]的缺点:不严谨,因为该数组可以出现多个数字
let position: number[] = [39.1254, 116.2456]

// 改进
// 元组(Tuple),确切的知道包含多少个元素,以及特定索引对用的类型
let position1: [number, number] = [39.1254, 116.2456]

// 8。类型推理
// 场景1:声明变量并初始化的时候
// let age:number
// 注意:声明变量,并没有初始化的时候,还是要写便令类型
let age1 = 18

// 场景2:决定函数返回值时
function add2(num1: number, num2: number) {
    return num1 + num2
}
// 能省略类型注解的地方就省略


// 9.类型断言
// getElementById方法返回值是HTMLElement ,该类型只包含所有标签公共的属性或者方法,不包含a标签特有的href等属性
//因此,这个类型太宽泛(不具体),无法操作href等a标签特有的属性或方法
// 解决:使用类型断言指定更加具体的类型
// <a href="" id = "link" > </a>
const alink = document.getElementById('link') as HTMLAnchorElement
/* 解释:
    1.使用as关键字实现类型断言
    2.关键字as后面的类型是一个更加具体的类型(HTMLAnchorElement是HTMLElement的子类型)
    3.通过类型断言，alink的类型变得更加具体，这样即可访a标签特有的属性或方法了
 */
// 方法2，使用<>语法，不常用
// const alink = <HTMLAnchorElement>document.getElementById('link')
// 技巧：在浏览器控制台，通过console.dir()打印DoM元素，在属性列表的最后面，即可看到该元素的类型


// 10.字面量类型
let str1 = 'Hello TS'
const str2 = 'Hello TS'
let age2: 18 = 18
// TS类型推论机制，得到以下答案
/*
    str1类型为: string
    str2类型为：'Hello TS'
解释：
    str1是个变量，值可以是任意字符串，所有类型string
    str2是一个常量，值不能变化只能是'Hello TS' 所以类型为'Hello TS'
    此处的'Hello TS'，就是一个【字面量类型】。也就是说某个特定的字符串也可以作为TS中的类型
    除字符串外，任意的JS字面量(对象，数字等)都可作为类使用
    */
/*
使用模式：字面量类型配合联合类型一起使用
场景：用来表明一组民却的可选值列表
*/
//  贪吃蛇只能上下左右
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
    console.log(direction);
    // 参数direction的值只能是up/down/left/right中任意一个
    // 优势：相比较string ，使用字面量类型更加精确、严谨
}


// 11.枚举
// 字面量类型+联合类习惯组合功能，也可表明一组明确的可选值
// 定义一组命名常量。描述一个值，该值可以是命名常量中的一个
enum Direction { Up, Down, Left, Right }
function changeDirection1(direction: Direction) {
    console.log(direction)
}
/*
解释:
1.使用enum关键字定义枚举
2.约定枚举名称、枚举中的值以大写字母开头
3.枚举中的多个值之间通过，(逗号)分隔
4.定义好枚举后，直接使用枚举名称作为类型注解
 */

// 形参direction的类型为枚举Direction,那么，实参的值就应该是枚举Direction成员的任意一个，访问枚举成员：
changeDirection1(Direction.Up)
// 解释：直接通过点(.)语法访问枚举的成员

// 枚举成员有值，默认为0----数字枚举
// enum Direction { Up=10, Down, Left, Right }
// enum Direction { Up = 2, Down = 4, Left = 6, Right = 8 }

// 字符串枚举，必须每个成员有初始值


// 12.any类型--不推荐使用(失去ts类型的保护优势)
let obj: any = { x: 0 }
// 访问不存在的属性或者赋值
obj.bar = 100
// 当作函数调用
obj()
// 赋值给其他类型的变量
let n: number = obj
// 隐式具有any类型
// 1).声明变量，不给赋值和类型；
let qq;
// 2).函数参数不给类型
function add3(a, b) { }


// 13.typeof操作符
// Js获取数据的类型
console.log(typeof 'Hello world');
// TS在类型上下文中引用变量或属性的类型(类型查询)
let p = { x: 1, y: 2 }
// 下面两句效果一样
// function formatPoint(point: { x: number; y: number }) { }
function formatPoint(point: typeof p) { }
formatPoint(p)
// 解释：
// 使用typeof操作符来获取[变量p的类型]
// typeof出现在类型注解的位置（参数名称的冒号后面）所处的环就在类型上下文（区别于JS代码）[查询对象属性]
let num: typeof p.x
// 注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型（如，不能个查函数调用的类型）
// let num1: typeof add(1, 2)


