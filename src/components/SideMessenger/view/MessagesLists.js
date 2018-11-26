import React, { Component } from 'react';
import '../styles/styles.css';
import '../styles/SideMessenger.css';
import 'font-awesome/css/font-awesome.min.css';
import Avatar from 'react-avatar';
import {
  ThemeProvider,
  // Avatar,
  Message,
  MessageText,
  Row,
  MessageList,
  MessageGroup,
  MessageMedia,
  TextComposer,
  Fill,
  Fit,
  SendButton,
  TextInput,
  FixedWrapper
} from '@livechat/ui-kit';

// const avatar: [
//   {
//     pic:
//       'https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5'
//   },
//   { pic: 'https://randomuser.me/api/portraits/men/32.jpg' },
//   { pic: 'https://randomuser.me/api/portraits/women/21.jpg' },
//   { pic: 'https://randomuser.me/api/portraits/women/44.jpg' }
// ];

const Mp1 = onMessageSend => {
  return (
    <ThemeProvider>
      <div className="MessageBox">
        <MessageList active>
          <MessageGroup
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            onlyFirstWithMeta
          >
            <Message authorName="Jon Smith" date="21:20">
              {/* <MessageTitle title="Message title" subtitle="24h" /> */}
              <MessageMedia>
                <img src="http://picsum.photos/223" />
              </MessageMedia>
              <Message date="21:25" authorName="Jon Smith" />
              <MessageText className="others">
                The fastest way to help your customers - start chatting with
                visitors
              </MessageText>
              <Message date="21:30" authorName="Jon Smith" />
              <MessageText className="others">
                The fastest way to help your customers - start chatting with
                visitors who need your help using a free 30-day trial.
              </MessageText>
            </Message>
            <Message date="21:32" authorName="Jon Smith">
              <MessageText className="others">
                Hi! I would like to buy those shoes
              </MessageText>
            </Message>
          </MessageGroup>
          <Row reverse>
            <Avatar
              src="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
              round={true}
              size="30"
            />
            <MessageGroup onlyFirstWithMeta>
              <Message date="21:36" isOwn={true} authorName="Visitor">
                <MessageText className="self">
                  I love them soooooooooooooooooooooo much!
                </MessageText>
              </Message>
              <Message date="21:38" isOwn={true} authorName="Visitor">
                <MessageText className="self">This helps me a lot</MessageText>
              </Message>
            </MessageGroup>
          </Row>
          <MessageGroup
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
            onlyFirstWithMeta
          >
            <Message authorName="Jon Smith" date="21:37">
              <MessageText className="others">No problem!</MessageText>
            </Message>
            <Message
              authorName="Jon Smith"
              imageUrl="https://randomuser.me/api/portraits/women/21.jpg"
              date="21:39"
            >
              <MessageText className="others">
                The fastest way to help your customers - start chatting with
                visitors who need your help using a free 30-day trial.
              </MessageText>
            </Message>
            <Message authorName="Jon Smith" date="21:39">
              <MessageMedia>
                <img src="http://picsum.photos/100" />
              </MessageMedia>
            </Message>
          </MessageGroup>
        </MessageList>
        <TextComposer onSend={onMessageSend}>
          <Row align="center">
            <Fill>
              <TextInput />
            </Fill>
            <Fit>
              <SendButton />
            </Fit>
          </Row>
        </TextComposer>
      </div>
    </ThemeProvider>
  );
};
const Mp2 = () => {
  return (
    <ThemeProvider>
      <div className="MessageBox">
        <MessageList>
          <MessageGroup
            avatar="https://randomuser.me/api/portraits/women/21.jpg"
            onlyFirstWithMeta
          >
            <Message authorName="Olivia Black" date="21:37">
              <MessageText className="others">Hey my friend!</MessageText>
            </Message>
            <Message authorName="Olivia Black" date="21:37">
              <MessageText className="others">Hi!</MessageText>
            </Message>
            <Message authorName="Olivia Black" date="21:37">
              <MessageText className="others">
                Hello, are you there?
              </MessageText>
            </Message>
          </MessageGroup>
        </MessageList>
        <TextComposer>
          <Row align="center">
            <Fill>
              <TextInput />
            </Fill>
            <Fit>
              <SendButton />
            </Fit>
          </Row>
        </TextComposer>
      </div>
    </ThemeProvider>
  );
};

const Mp3 = () => {
  return (
    <ThemeProvider>
      <div className="MessageBox">
        <MessageList>
          <Row reverse>
            {/* <Avatar src={props.avatar[0].pic} round={true} size="30" /> */}
            <MessageGroup onlyFirstWithMeta>
              {/* <MessageGroup
            avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
            onlyFirstWithMeta
          > */}
              <Message date="21:36" authorName="Visitor" isOwn={true}>
                <MessageText className="self">Hey my friend!</MessageText>
              </Message>
              <Message date="21:37" authorName="Visitor" isOwn={true}>
                <MessageText className="self">Hi!</MessageText>
              </Message>
              <Message date="21:37" authorName="Visitor" isOwn={true}>
                <MessageText className="self">
                  Hello, are you there?
                </MessageText>
              </Message>
            </MessageGroup>
          </Row>
        </MessageList>
        <TextComposer>
          <Row align="center">
            <Fill>
              <TextInput />
            </Fill>
            <Fit>
              <SendButton />
            </Fit>
          </Row>
        </TextComposer>
      </div>
    </ThemeProvider>
  );
};

export { Mp1, Mp2, Mp3 };
