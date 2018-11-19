import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TopNav.css';
import { enterKeyHandler, preventFocus } from 'lib/accessibilityUtils';
import styled from 'styled-components';
import CTABtn from 'components/CTABtn';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Title = styled(NavLink)`
  align-self: center;
  justify-self: center;
  color: #eee;
  font-weight: 300;
  font-size: 1.5rem;
  padding-left: 15px;
  box-sizing: border-box;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
`;

const activeClassName = 'nav-item-active';
const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  color: #eee;
  font-weight: 300;
  font-size: 1.3rem;
  padding-left: 15px;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  transition: all 0.2s;
  text-align: center;
  vertical-align: middle;

  &:hover {
    color: #FC5C63;
  }

  &.${activeClassName} {
    color: #FC5C63;
  }
`;

const AccountButton = styled.div`
  color: #eee;
  font-weight: 300;
  font-size: 1.3rem;
  padding-left: 15px;
  box-sizing: border-box;
  padding: 0 15px;
  border-bottom: 2px solid transparent;
  box-sizing: border-box;
  transition: all 0.2s;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    color: #FC5C63;
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #242729
  width: 100vw;
  border-top: 2px solid #eee;
  padding: 15px;
  box-sizing: border-box;
`;

class TopNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      acctDropdownShown: false,
    };
  }

  handleAccountClick = () => {
    this.setState({ acctDropdownShown: !this.state.acctDropdownShown });
  }

  render() {
    const { showSideNav } = this.props;

    return (
      <div style={{ position: 'sticky', top: '0', zIndex: '1' }}>
        <div className="TopNav">
          <Title to="/home">
            <span role="img" aria-label="box" style={{ marginRight: '5px' }}>📦</span>
        Momentum
          </Title>

          <Right>
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
            </div>
            <StyledLink to="/providers" activeClassName={activeClassName}>Providers</StyledLink>
            <AccountButton onClick={this.handleAccountClick}>
              <FontAwesomeIcon style={{ marginRight: '5px' }} icon="user"/>
          Username
            </AccountButton>
            {/*<CTABtn theme="outlineWhiteBlue">Sign In</CTABtn>*/}
          </Right>
        </div>
        {this.state.acctDropdownShown && <Dropdown><div style={{ background: '#242729' }}><StyledLink to="/preferences" activeClassName={'f'}>Settings</StyledLink></div></Dropdown>}
      </div>
    );
  }
}

TopNav.propTypes = {
  showSideNav: PropTypes.func,
};

export default TopNav;
