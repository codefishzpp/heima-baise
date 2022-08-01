//  class类
// 1.实例化属性初始值
class Person {
    age: number
    sex: string
    // 构造函数不用返回值类型
    // 成员初始化（age:number)，才可以通过this.age来访问实例成员
    constructor(age: number, sex: string) {
        this.age = age
        this.sex = sex
    }
}
// 实例化
const p = new Person(18, '男') //p的类型为Person
p.age
p.sex
// 解释：Person类的实例对象p的类型是Person；TS中的class,不仅提供了class的语法功能，也作为一种类型的存在


// 2.实例方法
class Point {
    x = 1
    y = 2
    scale(n: number): void {
        this.x *= n //  *=为恒等于n
        this.y *= n
    }
}
const p1 = new Point()
p1.scale(10)
console.log(p1.x, p1.y);



// 3.类继承
// 1）extends继承父类
class Animal {
    move() { console.log('moving alone!'); }
}
class Dog extends Animal {
    back() { console.log('汪汪汪'); }
}
const dog = new Dog()
dog.move()//moving alone!
dog.back()//汪汪汪

// 2）implements(实现接口)
// Persona中的类必须提供Singable接口中指定的【所有方法和属性】
interface Singable {
    sing(): void
}
class Persona implements Singable {
    sing(): void {
        console.log("implements");

    }
}

// 4.类成员可见性
// 可见修饰符
// &1.public(公有的)--共有成员可以被任何地方访问，public可省略
class Animal1 {
    public move() {
        console.log('都能用');

    }
}

// &2.protected(受保护的)--仅在对其声明所在的类和子类中可见(实例对象不可见)
class Animal2 {
    protected move() { console.log('moving alone!'); }
}
class Dog2 extends Animal {
    back() {
        console.log('汪汪汪');
        this.move()
    }
}

// &3.private(私有的)--子类、实例对象中不可见
class Animal3 {
    private move() { console.log('moving alone!'); }
}

// &4.readonly(只读修饰符)--防止构造函数之外对属性进行赋值
// 只能修饰属性不能修饰方法
// 属性有默认值得加类型，readonly修饰的属性，必须给类型
// 接口或者{}表示的对象类型，也可以使用readonly
class Person2 {

    readonly age: number = 18
    constructor(age: number) {
        this.age = age
    }
    // 错误演示
    setAge() {
        // this.age = 20
    }
}
// 5.接口
interface IPerson {
    readonly name: string
}
let objj: IPerson = {
    name: 'jack'
}
// {}
let obj1: { readonly name: string } = {
    name: 'jack'
}
// obj.name = 'rose'


