import './about.html';
import './about.css';

// original solution
// const htmlStr = `
//     <div class="About">
//         <h1>About</h1>
//         <p>ABOUT ABOUT ABOUT</p>
//     </div>`;

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
    let xhandle = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest()
                   : new ActiveXObject('Microsoft.XMLHTTP');
    xhandle.open('get', 'about.html', true);
    xhandle.onreadystatechange = function() {
        if (xhandle.readyState == 4 && xhandle.status == 200) {
            container.innerHTML = xhandle.responseText;
        }
    };
    xhandle.send();
    // original solution
	// container.innerHTML = htmlStr;

    // The line below uses public/about.html
    // container.innerHTML = `<object type="text/html" data="about.html">
    //     </object>`;
}

export default about;
