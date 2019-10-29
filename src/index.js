import createHeader from './component/header/index.js';
import wofl from './images/20131204184148_hhXUT.jpeg';
import createImg from './createImg.js';
import Counter from './counter';
import Numbers from './Number';
import style from './_index.scss';
import "@babel/polyfill";
import './index.scss'



const arr = [
    new Promise(()=> {}),
    new Promise(()=> {})
];

arr.map((item)=>{
    console.log('item', item);
})

// Counter();
// Numbers();


//HMR 接口暴露在module.hot 检查是否可用
// if(module.hot) {
//     module.hot.accept('./Number.js', function(){
//         //使用更新过的模块执行一些操作<div className="">
//        document.body.removeChild(document.getElementById('numbers'));
//        Numbers();
//     })
// }

// createHeader();

// var img = document.createElement('img');
// var icon = document.createElement('span');
// img.classList.add(style.imgItem)
// img.src = wofl;

// document.getElementsByTagName('body')[0].append(img);
// icon.classList.add('iconfont');
// icon.classList.add('icon-baogao-copy');
// document.getElementsByTagName('body')[0].append(icon);

// createImg();