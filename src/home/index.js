import htmlStr from './home.html';
import './home.css';
// import modulesImg from './modules.svg';

let container;

const home = {
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
 * Renders the home component.
 */
function render() {
	container.innerHTML = htmlStr;
}

export default home;
