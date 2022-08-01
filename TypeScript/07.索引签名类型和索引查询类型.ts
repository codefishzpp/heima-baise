// 1.无法确定对象中有哪些属性（对象中可以出现任意多个属性），y用索引签名类型了
interface AnyObject {
    [key: string]: number
}
let obj: AnyObject = {
    a: 1,
    b: 2
}
// keys是占位符
// js里面[对象{}的类型是[tring类型]的


// js数组是一类特殊的对象，特殊在数组的键（索引）是数组类型
interface MyArray<T> {
    [n: number]: T
}
let arr: MyArray<number> = [1, 3, 5]
arr[0]


// 2.索引查询类型的其他使用方式:同时查询多个索引的类型
type Propss = { a: number; b: string; c: boolean }
type TypeB = Propss['a' | 'b']//string/number
// 解释:使用字符串面量的联合类型,获取属性a和b对应的类型,结果为string/number
type TypeC = Propss[keyof Propss]//string/number/boolean
// 解释:使用keyof操作符获取Props中所有键对应的类型,结果为string/number/boolean