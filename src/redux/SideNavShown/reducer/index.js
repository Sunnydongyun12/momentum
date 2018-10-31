import { SHOW_SIDENAV, HIDE_SIDENAV } from '../actions';

// SideNav reducer
// want sideNav to initially be not shown because
// our CSS for mobile only cares about whether it's shown or not
// widths above mobile don't care about this state
const sideNavShown = (state = false, action) => {
  switch (action.type) {
    case SHOW_SIDENAV:
      return true;
    case HIDE_SIDENAV:
      return false;
    default:
      return state;
  }
};

export default sideNavShown;
