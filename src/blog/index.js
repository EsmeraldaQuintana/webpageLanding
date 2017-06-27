import htmlStr from './blog.html';
import './blog.css';

let container;

const blog = {
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
 * Renders the page component.
 */
function render() {
	container.innerHTML = htmlStr;
}

export default blog;
