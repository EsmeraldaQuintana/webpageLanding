import './about.css';
// import modulesImg from './modules.svg';

const htmlStr = `
    <div class="About">
        <h1>About</h1>
        <p>ABOUT ABOUT ABOUT</p>
    </div>`;

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
}

export default about;
