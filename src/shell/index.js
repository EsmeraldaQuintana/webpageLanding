import './shell.css';

let container;

const htmlStr = `
    <div class="Shell">
        <header class="Shell__header">
            <h1 class="Shell__title">
                <a href="/home">Tiiiiitleeeeee</a>
            </h1>
            <nav class="Shell__nav">
                <a href="/blog">blog</a>
                <a href="/about">about</a>
            </nav>
        </header>
        <div class="Shell__contents">
            <!-- Content goes here. -->
        </div>
        <footer class="Shell__footer">
        <p>Party in the footer, woo~ </p>
        </footer>
    </div>`;

/**
 * Set container.
 * @param {Element} c - HTML element, acts as container
 */
function setContainer(c) {
    container = c;
}

/**
 * Render the page in container, using HTML string above.
 */
function render() {
    container.innerHTML = htmlStr;
}

const shell = {
        setContainer: setContainer,
        render: render,

};

export default shell;
