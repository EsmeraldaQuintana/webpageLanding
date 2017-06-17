import './about.css';
import modulesImg from './modules.svg';

const about = {
	render,
};

/**
 * Renders the about component.
 */
function render() {
	document.getElementById('root').innerHTML = `
		<h1 class="about">About</h1>
		<img src="${modulesImg}">`;
}

export default about;
