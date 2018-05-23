
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
let newArray=[1,2,3,4,5].filter(function (item) {//                 （删除）
    return item<4;
});

// console.log(newArray);


//用的多，map映射 将原有的数组映射成一个新数组[1,2,3]
//不操作原数组 返回新数组 回调函数中返回什么这一项就是什么

let arr1=[1,2,3].map(function (item) {//                            （更新）
    //``返点，tab键上面，是es6中的模板字符串 遇到变量用${}取值
    return  `<li>${item}</li>`
});
console.log(arr1.join(''));