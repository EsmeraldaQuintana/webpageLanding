import './about.css';
// import modulesImg from './modules.svg';

const about = {
	render,
};

/**
 * Renders the about component.
 * <!--<img src="${modulesImg}"`;-->
 */
function render() {
	document.getElementById('root').innerHTML = `
		<h1 class="about">About</h1>
        <p>ABOUT ABOUT ABOUT</p>`;
}

export default about;
