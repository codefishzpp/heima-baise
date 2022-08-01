// 1.基于旧类型(联合类型)创建的新类型
type PropKeys = 'x' | 'y' | 'z'
type Type1 = { x: number; y: number; z: number }

// 简化
type PropKeys2 = 'x' | 'y' | 'z'
type Type2 = { [Key in PropKeys]: number }

// 映射类似基于索引签名类型，也使用了[]
// Key in PropKeys表示Key可以是PropKeys联合类型中的任意一个，类似forin(let k in obj)
// 使用映射类型创建的新对象类型Type1和类型Type2结构完全相同
// 注意:
//    映射类型只能在类型别名中使用,不能再接口中使用

// 错误演示
// interface Type3 {
//     [Key in PropKeys]: number
// }

// 2.基于对象类型创建的新类型
type Props1 = { x: number; y: number; z: number }
type Type3 = { [Key in keyof Props1]: number }
// 首先,先执行keyof Props获得对象类型中所有键的联合类型即 'x'|'y'|'z'
// 然后 Key in...就可以是Prop中所有的键名称中的任意一个]

// 3.泛型工具类型都是基于映射类型实现,如Partial<Type>实现
// type Partial<T> = {
//     [p in keyof T]?: T[p]
// }
type Props2 = { x: number; y: string; z: boolean }
type PartialProps = Partial<Props2>
// 解释:
//   keyof T 即对象类型转成联合类型,获取T所有键,'x'|'y'|'z'
//   []后面加个 ? 表示可选, 以此实现partial的功能
//   冒号后面的T[p]表示T中每个键对应的类型,如'a'是number,'b'是string
//   最终新类型PartialProps和旧类型Props结构完全相同,只是让所有类型变为可选

// 4.T[P]语法,叫做索引查询(访问)类型
// 作用:用来查询属性的类型
type Props3 = { a: number; b: string; c: boolean }
type TypeA = Props3['a']
// 注意:
// Props['a]表示查询类型Props中属性'a'对应的类型number,所以TypeA的类型为number
// []中的属性必须存在于被查询类型中国

// 模拟Partial类型
type MyPartial<T> = {
    [p in keyof T]?: T[p]
}
type PartialProps1 = MyPartial<Props3>