import './blog.css';
// import modulesImg from './modules.svg';

const htmlStr = `
    <div class="Blog">
        <h1>Blog</h1>
        <p>BLOG BLOG BLOG</p>
    </div>`;

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
 * Renders the about component.
 * <!--<img src="${modulesImg}"`;-->
 */
function render() {
	container.innerHTML = htmlStr;
}

export default blog;
