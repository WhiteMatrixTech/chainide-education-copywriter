import notFound from './404';
import common from './common';
import footer from './footer';
import header from './header';
import home from './home';

export default {
  ...header,
  ...footer,
  ...home,
  ...notFound,
  ...common
};
