//做饭 ->  买菜

let a='';
function buy(callback) {
    setTimeout(()=>{
        a='蘑菇';
        callback(a)
    },2000)
}
buy(function cookie(val) {
console.log(val)
});

//回调函数 将后续的处理逻辑传入到当前要做的事，事情做好后调用此函数
// function cookie() {}


//promise 解决回调问题  promise 三个状态：成功态 失败态 等待
//resolve 代表转向成功态 、reject 代表转向失败态
// reject  resolve 都是函数，promise的实例就一个then方法，then方法中有两个参数
let p=new Promise((resolve,reject)=>{
    setTimeout(function () {
        let b='大蒜';
        let c='小龙虾';
        // resolve(b);//成功态
        reject(c);//失败态
    },2000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});

function buyPack() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.4){
                resolve('买')
            }else{
                reject('不买')
            }
        },Math.random()*1000)
    })
}
buyPack().then(function (data) {
    console.log(data)
},function (data) {
    console.log(data)
});

// 封装promise ajax
function ajax({url='',type='get',dataType='json'}) {
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType=dataType;
        xhr.onload=function () {//xhr.readState=4  xhr.readState=200
            if(xhr.status ==200){
                resolve(xhr.response)
            }else{
                reject('not found');
            }

        };
        xhr.onerror=function (err) {
            reject(err)
        };
        xhr.send();
    })
}
//调用方法
ajax({url:'./data/shop.json'}).then((res)=>{
    console.log(res.data)
},(err)=>{
    console.log(err)
});