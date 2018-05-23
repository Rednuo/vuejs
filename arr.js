
// 面试：forEach ,for in ,for,for of 的区别
let arr=[1,2,3,4,5];
    arr.b='100';
for(let i=0;i<arr.length;i++){//编程式
    // console.log(arr[i])
}
// es5的方法基本有2个参数
//index很少用
// 推荐
arr.forEach(function (item, index) {//声明式（不关心如何实现，不支持return）
    // console.log(item)
});

for(let key in arr){//key会变成字符串类型，包括数组的私有属性也可以打印出来
    // console.log(typeof key)
}

let obj={school:'sdf',age:8};
for(let val of Object.keys(obj)){//支持return 并且是值of数组（不能直接遍历对象）
    // console.log(obj[val])
}

//用的多，filter 是否操作原数组：否  返回结果：过滤后的新数组  回调函数的返回结果：
// 如果返回true,表示这一项放到新数组中
let newArray=[1,2,3,4,5].filter(function (item) {//                 （删除--多）
    return item<4;
});

// console.log(newArray);


//用的多，map映射 将原有的数组映射成一个新数组[1,2,3]
//不操作原数组 返回新数组 回调函数中返回什么这一项就是什么

let arr1=[1,2,3].map(function (item) {//                            （更新--多）
    //``返点，tab键上面，是es6中的模板字符串 遇到变量用${}取值
    return  `<li>${item}</li>`
});
// console.log(arr1.join(''));


//返回boolean
let arr3=[1,2,3,4,55,555];
// console.log(arr3.includes(5));

//返回找到的那一项  不会改变数组   回掉函数返回true表示找到了，并停止循环
let result=arr3.find(function (item, index) {//找到具体的某一项
    return item.toString().indexOf(5)>-1
});
// console.log(result);

//some  找true 找到后停止 返回true  找不到返回false            [find换成some]
//every 找false 找到false停止 返回false


//reduce收敛  4个参数  返回的是叠加后的结果

let sum=[1,2,3,4,5].reduce(function (prev, next, index, item) {
    return prev+next
});
// console.log(sum);

let sum2=[{price:30,count:2},{price:30,count:3},{price:30,count:4}].reduce(function (prev, next) {
    return prev+next.price*next.count
},0);
// console.log(sum2);

//二维数组变一维数组
let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce(function (prev, next) {
    return prev.concat(next)
});
console.log(flat);


