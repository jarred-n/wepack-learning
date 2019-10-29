function Numbers() {
    var body = document.getElementsByTagName('body')[0];
    var h1 = document.createElement('h1');
    h1.id = 'numbers';
    h1.innerText = 3000;
    body.appendChild(h1);
}
export default Numbers;