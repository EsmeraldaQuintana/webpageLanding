import './home.css';
// import modulesImg from './modules.svg';

const htmlStr = `
    <div class="Home">
        <h2>Home</h2>
        <p>Maecenas porttitor purus at lacus faucibus, sed eleifend erat eleifen
        d. Mauris pulvinar enim odio, et tempus ante fringilla sed. In porttitor
         sodales lacus, eu tempor sem commodo vitae. Maecenas sollicitudin lectu
         s sed facilisis aliquam. Lorem ipsum dolor sit amet, consectetur adipis
         cing elit. Sed tincidunt magna eu augue volutpat, nec ultricies mauris
         gravida. Sed id convallis ligula. Vivamus ultrices metus eu turpis ulla
         mcorper varius. Nullam dignissim congue gravida. Phasellus imperdiet ma
         uris vitae sem porta porttitor. Vestibulum ac libero at mi pretium pell
         entesque. Aenean ac facilisis ligula. Nunc ultrices rutrum metus ut eff
         icitur. Vestibulum nisi odio, venenatis varius felis vel, gravida condi
         mentum nulla.</p>
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
