import React from "react";
import PropTypes from "prop-types";
import "../styles/SideNav.css";
import classNames from "classnames";
import Link from "./Link";
import AccountRow from "./AccountRow";
import { preventFocus } from "lib/accessibilityUtils";

class SideNav extends React.Component {
  render() {
    const { sideNavShown, hideSideNav } = this.props;
    const navClasses = classNames("SideNav", {
      "SideNav--shown": sideNavShown
    });

    const backdropClass = classNames({ SideNav__backdrop: sideNavShown });

    const linkProps = [
      { name: "Preferences", path: "/preferences", iconName: "settings" },
      { name: "Logout", path: "/logout", iconName: "lock" },
      { name: "Solution Matching", path: "/solutionlist", iconName: "" }
    ];

    return (
      <div>
        <nav className={navClasses} draggable="false">
          <AccountRow firstName="MyName" onClick={hideSideNav} />
          {linkProps.map(props => (
            <Link
              {...props}
              key={props.name}
              onClick={hideSideNav}
              onMouseDown={preventFocus}
            />
          ))}
        </nav>
        {sideNavShown && (
          <div className={backdropClass} onClick={hideSideNav} />
        )}
      </div>
    );
  }
}

SideNav.propTypes = {
  sideNavShown: PropTypes.bool,
  hideSideNav: PropTypes.func
};

export default SideNav;
