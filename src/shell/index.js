import htmlStr from './shell.html';
import './shell.css';

let container;

/**
 * Set container.
 * @param {Element} c - HTML element, acts as container
 */
function setContainer(c) {
    container = c;
}

/**
 * Render the page in container, using HTML string above.
 */
function render() {
    container.innerHTML = htmlStr;
}

const shell = {
        setContainer: setContainer,
        render: render,

};

export default shell;
