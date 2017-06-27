import './blog.css';
// import modulesImg from './modules.svg';

const htmlStr = `
    <div class="Blog">
        <h2>Blog</h2>
        <p>Cras at blandit ligula, id viverra nibh. Ut convallis malesuada sem,
        et pretium elit varius quis. Quisque risus orci, maximus non nunc vitae,
         bibendum faucibus dolor. Donec eu odio orci. Duis quis scelerisque dolo
         r, eu tempor tellus. Aliquam varius, eros a ullamcorper malesuada, feli
         s diam suscipit enim, vitae condimentum elit libero ac risus. Suspendis
         se neque est, ornare lacinia mollis gravida, sagittis et mi. Sed ullam
         corper lacus nec ligula semper, nec vestibulum eros luctus. Etiam tempo
         r enim malesuada, ultricies magna in, facilisis metus. Duis ante nisi,
         hendrerit id magna nec, tempor dictum nisi. Quisque id egestas est, nec
          condimentum felis. Nulla a varius nulla. Vestibulum cursus urna at tur
          pis egestas, vel interdum lorem malesuada. Donec scelerisque tincidunt
           pellentesque.</p>
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
