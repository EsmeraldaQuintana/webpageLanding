import './main.css';

import routie from './scripts/routie';
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

routie('about', about.render);
routie('/blog', blog.render);
routie('*', home.render);
routie('/', home.render);
