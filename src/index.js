import './main.css';

import page from 'page';
import shell from './shell';
import home from './home';
import about from './about';
import blog from './blog';

// shell rendered in document in root div
const docRoot = document.querySelector('#root');
shell.setContainer(docRoot);
shell.render();

const shellRoot = docRoot.querySelector('.Shell__contents');
home.setContainer(shellRoot);
about.setContainer(shellRoot);
blog.setContainer(shellRoot);

page.base('/webpageLanding');

page('/', home.render);
page('/about', about.render);
page('/blog', blog.render);
page('*', home.render);

// start router
page.start({
    hashbang: true,
});
