// 通过es6模块化的方式导入jquery
import $ from 'jquery'
import './css/index.css'
import './css/index.less'
// 实现隔行变色
$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor','blue')
})

class Person{
    static info='person info'
}
console.log(Person.info);