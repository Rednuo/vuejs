//如果引用第三方模块不需加 ./
//如果是文件模块需加 ./
//import拥有申明功能
// import './a.js';   // 1
// import {str,str2} from './a.js';  // 2
// console.log(str,str2);
import Vue from 'vue';

//直接引用vue，引用的是vue的runtime
//vue=compiler+runtime(compiler可以编译模板)
//compiler有6k
new Vue({
    // template:'<div>hello</div>'//不用compiler，节省6k空间
    // render ：将虚拟dom渲染成真实dom
    // createElement 返回的是虚拟dom
    render:function (createElement) {
        return createElement('h1',[
            'hello',
            createElement('span','一则头条')
        ])
    }
}).$mount('#app');

import './../css/index.css'
import './../css/style.less'
let str=require('./a.js');

import * as b from './a.js';  // 3
console.log(b.str,b.str2);
b.a();

import xxx from './b.js';
console.log(xxx);
console.log(str);

// 在js中引入图片需要import，或者写一个线上路径

// import img1 from './../img/1.jpg'
// let img=new Image();
// img.src=img1;
//
// document.body.appendChild(img1);