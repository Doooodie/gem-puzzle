import 'modern-normalize/modern-normalize.css';
import '../styles/index.css';
import '../styles/responsive.css';

import container from './modules/container';

const wrapper = document.querySelector('.wrapper');

wrapper.append(container);

export default wrapper;
