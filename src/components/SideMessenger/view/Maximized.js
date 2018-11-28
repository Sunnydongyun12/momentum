import * as React from 'react';
import {
  TextInput,
  MessageList,
  Message,
  MessageText,
  MessageGroup,
  MessageTitle,
  TextComposer,
  Row,
  Fill,
  Fit,
  SendButton,
} from '@livechat/ui-kit';
import Avatar from 'react-avatar';
import '../styles/styles.scss';
import { Mp1, Mp2, Mp3 } from './MessagesLists';

function PreviousMessage(props) {
  const option = props.selection;
  if (option === 'p1') return <Mp1 />;
  if (option === 'p2') return <Mp2 />;
  if (option === 'p3') return <Mp3 />;
}

class Maximized extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: false,
    };
    this.avatarShow = this.avatarShow.bind(this);
  }

  avatarShow() {
    console.log(this.state.avatar);
    this.setState(prevState => ({
      avatar: true,
    }));
    console.log(this.state.avatar);
  }

  render() {
    var { events, onMessageSend, ownId, selection } = this.props;
    
    return (
      <div
        style={{
          position: 'fixed',
          left: '68px',
          top: '50px',
          width: '500px',
          height: '82%',
        }}
      >
        <div
          style={{
            background: '#db3d44',
            color: 'white',
            padding: '2px 2px 2px 2px',

          }}
        />
        <MessageList active containScrollInSubtree>
          <PreviousMessage selection={selection} />
          <Row reverse>
            <Avatar
              src="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
              round={true}
              size="30"
            />
            {events.map((messageGroup, index) => (

              <MessageGroup
                key={index}
                // avatar="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
                onlyFirstWithMeta
              >
                {messageGroup.map(message => (
                  <div>
                    {(message.authorId === ownId || message.own === true) && (

                      <Message
                        date={message.parsedDate}
                        // avatar="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
                        isOwn={
                          message.authorId === ownId || message.own === true
                        }
                        key={message.id}
                      >
                        <MessageText
                          style={{
                            borderRadius: '5px',
                            border: '1px solid rgb(190, 184, 184)',
                            padding: '0px',
                            width: '300px',
                          }}
                        >
                          {message.title && (
                            <MessageTitle title={message.title} />
                          )}
                          {message.text && (
                            <MessageText>{message.text}</MessageText>
                          )}
                        </MessageText>
                      </Message>

                    )}
                  </div>
                ))}
              </MessageGroup>
            ))}
          </Row>
        </MessageList>
        <TextComposer onSend={onMessageSend} onButtonClick={this.avatarShow}>
          <Row align="center">
            <Fill>
              <TextInput />
            </Fill>
            <Fit>
              <SendButton />
            </Fit>
          </Row>
        </TextComposer>
        <div
          style={{
            textAlign: 'center',
            fontSize: '.6em',
            padding: '.4em',
            background: '#fff',
            color: '#888',
          }}
        />
      </div>
    );
  }
}

export default Maximized;
