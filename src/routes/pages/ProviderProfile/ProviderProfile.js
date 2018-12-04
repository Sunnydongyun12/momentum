import React from 'react';
import CTABtn from 'components/CTABtn';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getPng } from 'lib/assetsUtils';
import TagList from 'components/TagList';
import { databaseRef } from 'config/firebase';
import Avatar from 'react-avatar';
import { addBooking } from '../../../redux/bookings/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const List = styled.div`
  display: grid;
  grid-template-columns: 10% 45% 35% 10%;
  grid-template-rows: 1fr auto;
  justify-items: flex-start;
  align-items: center;
  margin-top: 2em;
  padding-bottom: 100px;
`;
const Section12 = styled.div`
  grid-row: 1;
  grid-column: 2;
  border-bottom: 3px rgb(211, 211, 211) solid;
`;
const Section13 = styled.div`
  grid-row: 1;
  grid-column: 3;
`;
const Section22 = styled.div`
  grid-row: 2;
  grid-column: 2;
`;
const Section23 = styled.div`
  grid-row: 2;
  grid-column: 3;
  padding-left: 100px;
`;
const SpaceTypeStyle = styled.div`
  text-align: left;
  font-size: 12px;
  margin-top: 0px;
  font-weight: 600;
  text-transform: uppercase;
  overflow: hidden;
  color: rgb(100, 100, 100);
`;
const NameStyle = styled.div`
  text-align: left;
  font-size: 33px;
  margin-top: 0px;
  font-weight: 600;
  overflow: hidden;
  color: rgb(70, 70, 70);
  letter-spacing: 0.3px;
`;
const ZipcodeStyle = styled.div`
  text-align: left;
  font-size: 15px;
  margin-top: 10px;
  font-weight: 200;
  overflow: hidden;
  color: rgb(150, 150, 150);
  margin-bottom: 10px;
`;
const DimensionStyle = styled.div`
  text-align: left;
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
  overflow: hidden;
  color: rgb(70, 70, 70);
  letter-spacing: 0.3px;
  word-spacing: 10px;
  padding-left: 3em;
`;
const TextStyle = styled.div`
  text-align: left;
  font-size: 15px;
  margin-top: 0px;
  font-weight: 200;
  overflow: hidden;
  color: rgb(100, 100, 100);
  padding-left: 3em;
  margin-bottom: 20px;
  padding-top: 10px;
`;
const ImgBackground = styled.div`
  background: #eee;
`;
const ProfilePic = styled.img`
  display: block;
  max-width: 70%;
  padding-left: 100px;
  height: auto;
  align-self: center;
  background: #eee;
  background-size: 100%;
`;
const ConfirmStyle = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  color: rgb(70, 70, 70);
  letter-spacing: 0.3px;
  word-spacing: 10px;
  margin-bottom: 10px;
`;
const HostAvatar = styled.div`
  grid-area: HostAvatar; 
  padding: 0 0 0 40px;
`;
const HostInfo = styled.div`
  grid-area: HostInfo; 
  font-size: 15px;
  font-weight: 200;
  color: rgb(100, 100, 100);
  text-align: left;
`;
const HostName = styled.div`
  grid-area: HostName; 
  font-size: 15px;
  font-weight: 400;
  color: rgb(50,50,50);
  text-align: left;
`;
const MessageMe = styled.div`
  grid-area: MessageMe; 
  text-align: left;
`; 
const ProviderStyle = styled.div`
  display: grid;
  grid-template-areas:
    'HostAvatar HostName MessageMe'
    'HostAvatar HostInfo MessageMe';
  grid-template-columns: 110px 200px 100px;
  padding: 10px;
`;
const ActionBtn = styled(CTABtn)`
  width: 180px;
  background: white;
`;
const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;


const provider = {
  name: 'myname',
  zipCode: 90021,
  description: `Please read everything below before booking. I am Durian,
  currently a third year physics PhD student at UCLA.I have been
  providing storage solutions on Momentum for more than two years.I take
  care of your stuff when your are not in town and make sure when you
  come back, your stuff will be in the same condition as before.I am
  happy to offer help if you need urgent access to your stuff when you
  are out of town.I will only touch the things under your permission.
  The storage place is at the corners of my bedroom.Two 3 ft * 6
  ft area is good to store boxes up to 5 ft tall.To see the condition of
  the room, please refer to pictures on the right.Water resistant
  material can be added to cover the boxes upon request but the area is
  usuall dry.`,
  price: 50,
};

const handleSubmit = ({ user, match }) => () => {
  addBooking(user.username, match.params.providerId, user.preferences.startDate, user.preferences.endDate);
  var booking = {};
  booking['username']=user.username;
  booking['providerId']= match.params.providerId;
  booking['startDate']=user.preferences.startDate;
  booking['endDate']=user.preferences.endDate;
  databaseRef.child('booking').push(booking);
};

export const ProviderProfile = ({ user, match, providers, users, addBooking, history }) => {
  const provider = providers.items[`${match.params.providerId}`];
  const { name, zipCode, description, price, tags, imgName, hostName, hostInfo } = provider;
  
  return (
    <List>
      <Section12>
        <SpaceTypeStyle> Private Indoor Space </SpaceTypeStyle>
        <NameStyle> {name} </NameStyle>
        <ZipcodeStyle> {zipCode} </ZipcodeStyle>
      </Section12>
      <Section22>
        <DimensionStyle> Host </DimensionStyle>
        <ProviderStyle>
          <HostAvatar>
            <Avatar
              name={hostName}
              size="60"
              round={true}
              textSizeRatio="2"
              color={Avatar.getRandomColor('sitebase', ['#AB2F52', '#E55D4A', '#E88554', '#4194A6', '#82CCD9', '#FFCC6B'])}
            />
          </HostAvatar>
          <HostName>{hostName} </HostName>
          <HostInfo>{hostInfo} </HostInfo> 
          <MessageMe>        
            <ActionBtn theme="outlineBlue" onClick={() => history.push('/messenger')}>
              <TextIcon style={{ marginLeft: '-20px' }} icon="envelope" />
              <span>Message</span>
            </ActionBtn>
          </MessageMe>
        </ProviderStyle>
        <DimensionStyle> Description </DimensionStyle>
        <TextStyle>
          {description}
        </TextStyle>
      </Section22>
      <Section13>
        <ImgBackground>
          <ProfilePic alt={imgName} src={getPng(imgName)} />
        </ImgBackground>
      </Section13>
      <Section23>
        <TagList filters={tags} />
        <ConfirmStyle> Price: ${price}/month </ConfirmStyle>
        <NavLink to="/bookings">
          <CTABtn onClick={handleSubmit({ user, match })} style={{ width: '300px', marginTop: '10px' }} theme="pink" >
            Book
          </CTABtn>
        </NavLink>
      </Section23>
    </List>
  );
};

ProviderProfile.PropTypes = {
  providers: PropTypes.object,
  users: PropTypes.object,
  history: PropTypes.object,
};
export default ProviderProfile;
