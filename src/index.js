import createHeader from './component/header/index.js';
import wofl from './images/20131204184148_hhXUT.jpeg';
import createImg from './createImg.js';
import style from './_index.scss';
import './index.scss'

createHeader();

var img = document.createElement('img');
var icon = document.createElement('span');
img.classList.add(style.imgItem)
img.src = wofl;

document.getElementsByTagName('body')[0].append(img);
icon.classList.add('iconfont');
icon.classList.add('icon-baogao-copy');
document.getElementsByTagName('body')[0].append(icon);

createImg();