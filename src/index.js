import page from 'page';
import shell from './shell';
import home from './home';

// shell rendered in document in root div
const docRoot = document.querySelector('#root');
shell.setContainer(docRoot);
shell.render();

// shellRoot holds class .Shell_contents
const shellRoot = docRoot.querySelector('.Shell__contents');
// .Shell__contents will contain about
home.setContainer(shellRoot);


page('/', home.render);
// page('/blog', blog.render);
// page('/about', about.render)
page('*', home.render);
// start router
page.start();
