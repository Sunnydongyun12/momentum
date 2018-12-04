import { Component } from 'react';
import * as React from 'react';
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import Avatar from 'react-avatar';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Maximized from './Maximized';

class Minimized extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMax: false,
      selection: 'p1',
      avatar: [
        {
          pic:
            'https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5',
        },
        { pic: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { pic: 'https://randomuser.me/api/portraits/women/21.jpg' },
        { pic: 'https://randomuser.me/api/portraits/women/44.jpg' },
      ],
    };
    this.handleToggleClickItem = this.handleToggleClickItem.bind(this);
    this.ToggleshowMax = this.ToggleshowMax.bind(this);
    this.TogglekeepMax = this.TogglekeepMax.bind(this);
  }
  handleToggleClickItem(selected) {
    this.setState(prevState => ({
      selection: selected,
    }));
    if (this.state.showMax === false) {
      document.getElementById('1').click();
    }
  }
  ToggleshowMax() {
    this.setState(prevState => ({
      showMax: !prevState.showMax,
    }));
  }

  TogglekeepMax() {
    if (this.state.showMax === false) {
      document.getElementById('1').click();
      this.setState(prevState => ({
        showMax: !prevState.showMax,
      }));
    }
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: '50px',
          width: '64px',
          height: '94%',
          padding: '2px 2px',
          background: '#db3d44',
        }}
      >
        <SideNav
          style={{ position: 'relative', zindex: '100' }}
          onSelect={selected => {
            this.handleToggleClickItem(selected);
            // Add your code here
          }}
        >
          <SideNav.Toggle onClick={this.ToggleshowMax} id="1" ref={input => this.inputElement = input} />
          <SideNav.Nav style={{ width: '80px' }}>

            <NavItem eventKey="p1" onClick={this.TogglekeepMax} >
              <NavIcon>
                <Avatar
                  name="Olivia Black"
                  src="https://randomuser.me/api/portraits/women/21.jpg"
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem>

            {/* <NavItem eventKey="p2" onClick={this.TogglekeepMax}>
              <NavIcon>
                <Avatar
                  name="Jon Smith"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem> */}
            {/* <NavItem eventKey="p3" onClick={this.TogglekeepMax}>
              <NavIcon>
                <Avatar
                  name="Foo Bar"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem> */}
          </SideNav.Nav>
        </SideNav>
        {this.state.showMax && (
          <Maximized {...this.props} selection={this.state.selection} />
        )}
      </div>
    );
  }
}

export default Minimized;
