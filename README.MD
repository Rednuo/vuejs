## react

## angular4 +typescript

## es6 let const ... => class

## vue数据驱动 (主要操作数据)


- 操作dom
## js数据类型
- 基本  number string boolean null undefine
- Object func
- symbol(es6)

## 对象{}  数组[]

- 操作数组的方法

 数组的变异 即 可改变原数组
 (可改变原数组pop push unshift shift  splice reverse sort) indexOf
lastIndexof concat slice

## forEach:没有返回值  filter map:映射  some every  reduce (ES6:find includes)

## vue
- vm =>viewModel 数据最终被vm代理
- {{a}}取值表达式，默认可以不写this，可放 表达式 赋值运算 计算 三元表达式
- 一般html中少写逻辑，用computed代替

### 指令：内置指令必须v-开头
    - v-model （表单元素忽略value  checked  selected），将数据绑定到试图上，视图修改会影响数据变化。
    - v-text 取代{{}} v-clock解决（块级）闪烁问题，后期用不到
    - v-once 绑定一次，数据变化不会导致试图刷新，写在不想刷新的标签上
    - v-html 将html字符串转化成html
    - v-for 循环（数组，对象，字符串，数字）
    ```
    <div v-for="value in/of 数组"></div>
    <div v-for="(value,index) in/of 数组"></div>
    ```
### 事件v-on(@)
- 绑定给dom元素，函数定义在methods中，不能和data里的内容重名，this指向实例，不能使用箭头函数，事件源对象如果不写括号，
可以自动传入，否则只能手动传入$event
## 安装
```
npm install vue axios bootstrap
```
