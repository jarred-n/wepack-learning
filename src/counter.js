function Counter() {
    var body = document.getElementsByTagName('body')[0];
    var button = document.createElement('button');
    button.innerText = 1;
    button.onclick = function() {
        button.innerText = parseInt(button.innerText, 10) + 1;
    };
    body.appendChild(button);
}
export default Counter;