import './home.css';
// import modulesImg from './modules.svg';

const htmlStr = `
    <div class="Home">
        <h1>Home</h1>
        <p>HOME HOME HOME</p>
    </div>`;

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
	container.innerHTML = htmlStr;
}

export default home;
