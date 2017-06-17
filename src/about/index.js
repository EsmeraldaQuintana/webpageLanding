import './about.css';
// import modulesImg from './modules.svg';

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
	container.innerHTML = `
		<h1 class="home">About</h1>
        <p>ABOUT ABOUT ABOUT</p>`;
}

export default about;
