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

## v-model
- checkbox,select多选是数组，提供一个value属性
- radio  checkbox分组靠的是v-model
- checked selected不存在

## 修饰符
- .lazy  .number
- 按键修饰符 .enter  .ctrl .keyCode
- 事件

    - @事件.stop
    ```
        stopPropagation (阻止冒泡，阻止事件传播) ,
        cancelBubble=true;
    ```
    -@事件.capture(捕获)
    ```
    xxx.addEventListener('click',fn)
    ```
    -@事件.prevent（阻止默认行为）
    ```
    preventDefault,returnValue=false
    ```
    - @事件.once(绑定移除，只执行一次)
    ```
    on('click') off('click')
    ```
    -@事件.self
    ```
    e.srcElement && e.target 判断事件源绑定事件
    ```
- jquery once
- e.srcElement && e.target 判断事件源绑定事件

## filters实例上可以用
```
{{'123' | my(1,2,3)}}
filters:{
    my(data,param1,param2,param3...){}
}
```

## computed 计算‘属性’，不是方法，不支持异步
- 方法不会有缓存，computed会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成有get 和set (不能只写set)，一般情况下，通过js赋值影响其他人或者表单元素设置值的时候会调用set方法

## v-if 操作dom，可以与v-else-if,v-else连写
## v-show 操作样式

## v-bind简写：

- 动态绑定‘属性’
```
  <img :src="src" :width="w"/>
```

## 实现单页开发的方式
- 通过hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方法 history  (history.pushState())，可能会导致404错误

> 开发时使用hash的方式  上线的话使用history的方式

## EventBus同级组件或隔级组件间的数据传递（不用），使用vuex

## 路由
- 返回不同的路径，就可以返回不同的结果

## 多页面（spa single page application）

## 全局生成 vue-cli 脚手架

```
npm install vue-cli -g
vue init webpack <项目名>
cd 项目名
npm install -y
```

## 模块
- node 模块的规范commonjs
- cmd:seajs   amd:require
- umd 为了做兼容处理
- esmodule
    - 如何定义模块（一个js就是一个模块）
    - 如何导出模块 （export）
    - 如何使用模块 （import）

## 下载webpack，--save-dev上线就不需要了

```
npm init -y
npm install webpack --save-dev
```

> 安装webpack或者less最好不要安装全局的，否则可能导致版本差异

- 在package.json中配置一个脚本，这个脚本用的命令是webpack.会去当前的node_modules下找bin对应
 的webpack名字让其执行，执行的是bin/webpack.js，webpack.js需要当前目录下有个名字叫
 webpack.config.js的文件，我们通过npm run build 执行的目录是当前文件的目录，所以会去当前的目录下查找。

## babel转义es6->es5，一个翻译一个解析
- 安装
```
npm install babel-core babel-loader --save-dev
```

## babel-preset-es2015   配置.babelrc文件，预设可以做的事，babel-loader会找这个文件
- 让翻译官拥有解析es6语法的功能

## babel-preset-stage-0
- 解析es7，在.babelrc中配置

## 解析样式，解析模块，再将解析内容插入到style标签内
```
npm install css-loader style-loader --save-dev
```

## css less sass stylus

- less-loader less css-loader style-loader
- sass-loader
- stylus-loader

```
npm install less-loader less --save-dev
```

## 解析图片
- file-loader url-loader(依赖于file-loader)