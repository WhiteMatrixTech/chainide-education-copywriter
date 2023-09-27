import notFound from './404';
import common from './common';
import courseDetail from './courseDetail';
import courseList from './courseList';
import footer from './footer';
import header from './header';
import home from './home';
import lessonDetail from './lessonDetail';

export default {
  ...header,
  ...footer,
  ...home,
  ...notFound,
  ...courseList,
  ...courseDetail,
  ...lessonDetail,
  ...common
};
