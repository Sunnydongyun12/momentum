import React, { Component } from 'react';
import '../styles/styles.scss';
import '../styles/SideMessenger.scss';
import Avatar from 'react-avatar';
import {
  Message,
  MessageText,
  Row,
  MessageGroup,
  MessageMedia,
} from '@livechat/ui-kit';

const Mp1 = () => {
  return (
    <React.Fragment>
      <MessageGroup
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        onlyFirstWithMeta
      >
        <Message date="21:25" authorName="Jon Smith" />
        <MessageText
          style={{
            background: 'rgb(250, 137, 137)',
            borderRadius: '5px',
            border: '1px solid gb(250, 137, 137)',
            padding: '15px',
            width: '300px',
          }}
        >
          The fastest way to help your customers - start chatting with
          visitors
        </MessageText>

      </MessageGroup>
      <Row reverse>
        <Avatar
          src="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
          round={true}
          size="30"
        />
        <MessageGroup onlyFirstWithMeta>
          <Message date="21:36" isOwn={true}>
            <MessageText
              style={{
                borderRadius: '5px',
                border: '1px solid rgb(190, 184, 184)',
                padding: '15px',
                width: '275px',
              }}
            >
              I love them soooooooooooooooooooooo much!
            </MessageText>
          </Message>
          <Message date="21:38" isOwn={true}>
            <MessageText
              style={{
                borderRadius: '5px',
                border: '1px solid rgb(190, 184, 184)',
                padding: '15px',
                width: '275px',
              }}
            >
              This helps me a lot
            </MessageText>
          </Message>
        </MessageGroup>
      </Row>
      <MessageGroup
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        onlyFirstWithMeta
      >
        <Message authorName="Jon Smith" date="21:37">
          <MessageText
            style={{
              background: 'rgb(250, 137, 137)',
              borderRadius: '5px',
              border: '1px solid gb(250, 137, 137)',
              padding: '15px',
              width: '300px',
            }}
          >
            No problem!
          </MessageText>
        </Message>
        <Message
          authorName="Jon Smith"
          imageUrl="https://randomuser.me/api/portraits/women/21.jpg"
          date="21:39"
        >
          <MessageText
            style={{
              background: 'rgb(250, 137, 137)',
              borderRadius: '5px',
              border: '1px solid gb(250, 137, 137)',
              padding: '15px',
              width: '300px',
            }}
          >
            The fastest way to help your customers - start chatting with
            visitors who need your help using a free 30-day trial.
          </MessageText>
        </Message>
      </MessageGroup>
    </React.Fragment >


  );
};
const Mp2 = () => {
  return (
    <MessageGroup
      avatar="https://randomuser.me/api/portraits/women/21.jpg"
      onlyFirstWithMeta
    >
      <Message authorName="Olivia Black" date="21:37">
        <MessageMedia>
          <img src="http://picsum.photos/223" />
        </MessageMedia>
        <MessageText
          style={{
            background: 'rgb(250, 137, 137)',
            borderRadius: '5px',
            border: '1px solid gb(250, 137, 137)',
            padding: '15px',
            width: '300px',
          }}
        >
          Hey my friend!
        </MessageText>
      </Message>
      <Message authorName="Olivia Black" date="21:37">
        <MessageText
          style={{
            background: 'rgb(250, 137, 137)',
            borderRadius: '5px',
            border: '1px solid gb(250, 137, 137)',
            padding: '15px',
            width: '300px',
          }}
        >
          Hi!
        </MessageText>
      </Message>
      <Message authorName="Olivia Black" date="21:37">
        <MessageText
          style={{
            background: 'rgb(250, 137, 137)',
            borderRadius: '5px',
            border: '1px solid gb(250, 137, 137)',
            padding: '15px',
            width: '300px',
          }}
        >
          Hello, are you there?
        </MessageText>
      </Message>
    </MessageGroup>
  );
};

const Mp3 = () => {
  return (
    <Row reverse>
      <Avatar
        src="https://d3iw72m71ie81c.cloudfront.net/8912fe22-7970-4e15-a3a1-abef9f2fb4b5"
        round={true}
        size="30"
      />
      <MessageGroup onlyFirstWithMeta>
        <Message date="21:37" isOwn={true}>
          <MessageText
            style={{
              borderRadius: '5px',
              border: '1px solid rgb(190, 184, 184)',
              padding: '15px',
              width: '275px',
            }}
          >
            Hi!
          </MessageText>
        </Message>
        <Message date="21:37" isOwn={true}>
          <MessageText
            style={{
              borderRadius: '5px',
              border: '1px solid rgb(190, 184, 184)',
              padding: '15px',
              width: '275px',
            }}
          >
            Hello, are you there?
          </MessageText>
        </Message>
      </MessageGroup>
    </Row>
  );
};

export { Mp1, Mp2, Mp3 };
