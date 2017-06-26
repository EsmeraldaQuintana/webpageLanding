import htmlStr from './about.html';
import './about.css';

let container;

const about = {
	render: render,
    setContainer: setContainer,
};

/**
 *
 * @param {Element} c - The container element.
 */
function setContainer(c) {
    container = c;
}


/**
 * Renders the about component.
 * <!--<img src="${modulesImg}"`;-->
 */
function render() {
    container.innerHTML = htmlStr;
    // ajax solution
    // let xhandle = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest()
    //                : new ActiveXObject('Microsoft.XMLHTTP');
    // xhandle.open('get', 'about.html', true);
    // xhandle.onreadystatechange = function() {
    //     if (xhandle.readyState == 4 && xhandle.status == 200) {
    //         container.innerHTML = xhandle.responseText;
    //     }
    // };
    // xhandle.send();
    // The line below uses public/about.html
    // container.innerHTML = `<object type="text/html" data="about.html">
    //     </object>`;
}

export default about;
