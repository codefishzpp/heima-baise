// 交叉类型：类似接口继承，用于组合东哥类型为一个类型（常勇敢与对象类型）
interface Person {
    name: string
    say(): number
}
interface Contact {
    phone: string
}
type PersonContact = Person & Contact//具备这俩的所有属性和类型
// let obj: PersonContact = {
//     name: 'jack',
//     phone: '123123..',
//     say() {
//         return 1
//     },
// }

// 交叉类型和接口继承对象
// 相同点:都可以实现对象类型的组合
// 不同点:两种方式实现类型组合时,对于同名属性之间,处理类型冲突的方式不同
interface A {
    fn: (value: number) => string
}
// interface B extends A {
//     fn: (value: string) => string
// }
interface B {
    fn: (value: string) => string
}
type AB = A & B
let ab!: AB
ab.fn(1)
ab.fn('a')
// 接口继承会报错(类型不兼容)
// 交叉类型没有错,简单理解为   fn: (value: string | number) => string
