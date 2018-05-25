//箭头函数 不具备this  arguments
//自己家没有this  就找上一级的this

//如何更改this指向
//call  apply  bind
//var that=this

//如何确定this是谁，看谁调用的，前面是谁this就是谁

// function a(b) {
//     return b+1
// }

// let a=b=>b+1;

//去掉function关键字  参数有一个可以省略小括号 小括号与大括号之间有一箭头
//如果没有大括号则直接是返回值   有大括号必须写return

// function a(b) {
//     return function (c) {
//         return b+c
//     }
// }

 a=b=>c=> b+c;//高阶函数，俩箭头或以上
console.log(a(1)(2));
//闭包：函数执行的一瞬间叫闭包（不销毁的作用域），当执行后返回的结果必须是引用数据类型，被外界变量接受 此时这个函数不会销毁
//作用：模块化