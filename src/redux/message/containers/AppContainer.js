import { connect } from 'react-redux';
import App from 'components/SideMessenger/view/App';
import { getEvents } from '../reducers/events';
import { getOwnId } from '../reducers/users';
import { sendMessage } from '../actions/chatActions';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const parseTimestamp = timestamp => {
  const date = new Date(timestamp);

  return `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getHours()}:${date.getMinutes()}`;
};
// const mes = () => {};

const parseMessages = messages =>
  messages
    .map(message => ({
      ...message,
      parsedDate: parseTimestamp(message.timestamp),
    }))
    .reduce(
      (result, current) => {
        const previous = result[result.length - 1];
        if (
          !previous.length ||
          previous[previous.length - 1].authorId === current.authorId
        ) {
          result[result.length - 1].push(current);
          
          return result;
        }
        result.push([current]);
        
        return result;
      },
      [[]],
    );

const mapStateToProps = state => {
  return {
    events: parseMessages(getEvents(state)),
    ownId: getOwnId(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onMessageSend: data => {
    dispatch(
      sendMessage({
        text: data,
      }),
    );
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
export default AppContainer;
