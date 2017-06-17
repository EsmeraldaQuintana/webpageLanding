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
 * Renders the about component.
 * <!--<img src="${modulesImg}"`;-->
 */
function render() {
	container.innerHTML = `
		<h1 class="home">Home</h1>
        <p>HOME HOME HOME</p>`;
}

export default home;
