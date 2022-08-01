// 泛型:[保证类型安全]前提下,让函数等[与多种类型一起工作],从而[实现服用],常用于:[函数/接口/class]中
// 创建泛型函数:
function id<Type>(value: Type): Type { return value }

//  1 调用泛型函数
const num = id<number>(10)

//  2 以string类型调用泛型函数
const str = id<string>('a')

// 简化泛型函数
let num1 = id(10)
let str1 = id('a')

// 泛型约束
// 默认情况下，泛型函数的变量类型Type可以代表多个类型，导致无法访问任何属性
// 如id('a')调用获取参数长度，无法保证一定存在length属性，比如number无length，这时就需要泛型函数约束类型

// 1）指定更加具体的类型
// 将类型改为Type[](Type类型的数组)，只要是数组一定有length属性
function id1<Type>(value: Type[]): Type[] {
    value: length
    return value
}

// 2）添加约束
interface Ilength { length: number }
function id2<Type extends Ilength>(value: Type): Type {
    console.log(value.length);
    return value
}
id2(['a', 'b'])
id2('a')
id2({ length: 10, name: 'jack' })
// 错误演示，数字没有length
// id2(123)

//3) 变量之间可以约束（如：第二个变量类型受第一个类型变量的约束）
// keyof关键字 【接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型】
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let person = { name: 'jack', age: 18 }
getProp({ name: 'jack', age: 18 }, 'name')
getProp(person, 'name')

// 了解
getProp(18, 'toFixed')
getProp('abc', 'split')
getProp('abc', 1)//1表示索引
getProp(['a'], 'length')
getProp(['a'], 1000)//1000为索引
// 错误演示
// getProp(person, 'name1')


// 泛型接口
// 接口配合泛型使用，增加灵活性，增强复用性
interface IdFunc<Type> {
    id: (value: Type) => Type
    ids: () => Type[]
}
let obj2: IdFunc<number> = {
    id(value) {
        return value
    },
    ids() {
        return [1, 3, 5]
    }
}

// 泛型实际上就是一个接口
const strs = ['a', 'b', 'c']
strs.forEach(item => { })

const nums = [1, 3, 5]
nums.forEach(item => { })
// ctrl+点击forEach，查看数组类型方法每一个信息

// 泛型类：class也可以配合泛型
// 如React的class组件的基类Component就是泛型类，不同的组件有不同的props和state
// interface IState { count: number }
// interface IProps { maxLength: number }
// class InputCount extends React.component<IProps, IState>{
//     state: IState = {
//         count: 0
//     }
//     reader() {
//         return <div>{ this.props.maxLength } < /div>
//     }
// }
// 解释：raeact.component泛指类两个类型变量，分别指定props和state类型
//
// 创建泛型类：
// class GenNum<NumType>{
//     defVal: NumType
//     add: (x: NumType, y: NumType) => NumType
// }
// **推荐明确指定<类型>
// const myNum = new GenNum<number>()
// myNum.defVal = 10

// 创建泛型类：
class GenNum<NumType>{
    defVal: NumType
    add: (x: NumType, y: NumType) => NumType
    constructor(value: NumType) {
        this.defVal = value
    }
}
// **此时可以省略<类型>不写
const myNum = new GenNum(100)
myNum.defVal = 10

// 泛型工具类型：内置了一些常用的工具类型，简化Ts中一些常见的操作
// 1.Partial < Type > --用来构造一个类型，将Type的所有属性设置为可选
interface Props {
    id: string
    children: number[]
}
type PartialProps = Partial<Props>
// 构造新的类型PartialProps和props相同，但是属性可选
let pq1: Props = {
    id: '',
    children: [1]
}
let p2: PartialProps = {
    id: ''
}

// 2.Readonly < Type >-将Type的所有属性都设置为readonly（只读）
interface Propss {
    id: string
    children: number[]
}
type ReadonlyPropss = Readonly<Propss>
// 构造新的类型ReadonlyProps和props相同，但是属性只读
let p3: ReadonlyPropss = {
    id: '2',
    children: [1, 2]
}
// p3.id = '4'--无法分配，只读

// 3.Pick < Type, Keys >--选择一组属性来构造新类型
// 第二个类型变量传入的属性只能是第一个类型变量中存在的属性
interface Propsss {
    id: string
    title: string
    children: number[]
}
type PickPropsss = Pick<Propsss, 'id' | 'title'>
// 4.Record<Keys, Type>--构造一个对象类型，属性键为Keys，属性类型为Type
// 变量1：对象有哪些属性   变量2：对象属性类型
type RecordObj = Record<'a' | 'b' | 'c', string[]>
let objo: RecordObj = {
    a: ['a'],
    b: ['a'],
    c: ['c']
}