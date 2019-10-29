// import _ from "lodash";
// import jquery from "module";

// var element = document.createElement('dev');
// element.innerHTML = _.join(['jj','eee'], '--');
// document.body.appendChild(element);
import './_index.css';

async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName:"lodash" */ 'lodash');
    var element = document.createElement('dev')
    element.innerHTML = _.join(['jj', 'eee'], '--')
    return element;
}
document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})
