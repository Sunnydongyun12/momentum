import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import '../styles/styles.css';

// Be sure to include styles at some point, probably during your bootstraping
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../styles/SideMessenger.css';
import 'font-awesome/css/font-awesome.min.css';
import Avatar from 'react-avatar';
import { Mp1, Mp2, Mp3 } from './MessagesLists';
import { getEvents } from '../reducers/events';
import { getOwnId, getCurrentAgent } from '../reducers/users';
import { sendMessage } from '../actions/chatActions';

// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec'
// ];

// const parseTimestamp = timestamp => {
//   const date = new Date(timestamp);

//   return `${date.getDate()} ${
//     months[date.getMonth()]
//   } ${date.getHours()}:${date.getMinutes()}`;
// };

// const parseMessages = messages =>
//   messages
//     .map(message => ({
//       ...message,
//       parsedDate: parseTimestamp(message.timestamp)
//     }))
//     .reduce(
//       (result, current) => {
//         const previous = result[result.length - 1];
//         if (
//           !previous.length ||
//           previous[previous.length - 1].authorId === current.authorId
//         ) {
//           result[result.length - 1].push(current);

//           return result;
//         }
//         result.push([current]);

//         return result;
//       },
//       [[]]
//     );

// const mapStateToProps = state => {
//   return {
//     events: parseMessages(getEvents(state)),
//     ownId: getOwnId(state),
//     currentAgent: getCurrentAgent(state)
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onMessageSend: data => {
//     dispatch(
//       sendMessage({
//         text: data
//       })
//     );
//   }
// });

function PreviousMessage(props) {
  if (!props.warn) {
    console.log(props.warn);

    return null;
  }

  // if (props.warn === 'p1') return <Mp1 {...this.props} />;
  if (props.warn === 'p1') return <Mp1 />;
  if (props.warn === 'p2') return <Mp2 />;
  if (props.warn === 'p3') return <Mp3 />;
}

class SideMessenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToggle: false,
      showWarning: null,
      avatar: [
        {
          pic:
            'https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5'
        },
        { pic: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { pic: 'https://randomuser.me/api/portraits/women/21.jpg' },
        { pic: 'https://randomuser.me/api/portraits/women/44.jpg' }
      ]
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: 'p1',
      showToggle: !prevState.showToggle
    }));
  }
  handleToggleClickItem(selected) {
    if (this.state.showToggle) {
      if (selected === this.state.showWarning) {
      } else {
        console.log(selected);
        this.setState(prevState => ({
          showWarning: selected
        }));
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <PreviousMessage
            warn={this.state.showToggle && this.state.showWarning}
            avatar={this.state.avatar}
          />
        </div>
        <SideNav
          onSelect={selected => {
            this.handleToggleClickItem(selected);
            // Add your code here
          }}
        >
          <SideNav.Toggle onClick={this.handleToggleClick} />
          <SideNav.Nav>
            <NavItem eventKey="p1">
              <NavIcon onclick={this.handleToggleClick}>
                <Avatar
                  name="Jon Smith"
                  src={this.state.avatar[1].pic}
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem>
            <NavItem eventKey="p2">
              <NavIcon>
                <Avatar
                  name="Olivia Black"
                  src={this.state.avatar[2].pic}
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem>
            <NavItem eventKey="p3">
              <NavIcon>
                <Avatar
                  name="Foo Bar"
                  src={this.state.avatar[3].pic}
                  size="40"
                  round={true}
                />
              </NavIcon>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </React.Fragment>
    );
  }
}

// SideMessenger = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Mp1);
export default SideMessenger;
