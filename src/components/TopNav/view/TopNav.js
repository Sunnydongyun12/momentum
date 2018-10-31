import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopNav.css';
import { enterKeyHandler, preventFocus } from 'lib/accessibilityUtils';

class TopNav extends React.Component {
  render() {
    const { showSideNav } = this.props;

    return (
      <div className="TopNav">
        <div
          className="TopNav__hamburger"
          onClick={showSideNav}
          onKeyDown={enterKeyHandler(showSideNav)}
          onMouseDown={preventFocus}
          role="button"
          aria-label="Show side navigation"
          aria-controls="navigation"
          tabIndex="0"
        >
          <span className="TopNav__hamburger__row" />
          <span className="TopNav__hamburger__row" />
          <span className="TopNav__hamburger__row" />
        </div>
        <span className="TopNav__project-name">Momentum</span>
      </div>
    );
  }
}

TopNav.propTypes = {
  showSideNav: PropTypes.func,
};

export default TopNav;
