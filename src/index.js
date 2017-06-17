import page from 'page';
import shell from './shell';
import about from './about';

// shell rendered in document in root div
const docRoot = document.querySelector('#root');
shell.setContainer(docRoot);
shell.render();

page('/', about.render);
// start router
page.start();
