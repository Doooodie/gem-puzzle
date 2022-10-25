import 'modern-normalize/modern-normalize.css';
import '../styles/index.css';
import '../styles/responsive.css';

import container from './modules/container';

const wrapper = document.querySelector('.wrapper');

wrapper.append(container);

window.onload = () => {
  alert(
    'Уважаемый студент! В работе еще не готовы разные размеры полей. По возможности проверь работу к концу кросс-чека или напиши мне в дискорд. Спасибо.',
  );
};

export default wrapper;
