import './blog.css';
// import modulesImg from './modules.svg';

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
	container.innerHTML = `
		<h1 class="blog">Blog</h1>
        <p>BLOG BLOG BLOG</p>`;
}

export default blog;
