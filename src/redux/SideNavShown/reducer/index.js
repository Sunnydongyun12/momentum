import { SHOW_SIDENAV, HIDE_SIDENAV } from '../actions';

// SideNav reducer
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
