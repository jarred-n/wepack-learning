import wofl from './images/20131204184148_hhXUT.jpeg';

function createImg () {
    var img = document.createElement('img');
    img.src = wofl;
    img.classList.add('imgItem')
    document.getElementsByTagName('body')[0].append(img);
}

export default createImg;