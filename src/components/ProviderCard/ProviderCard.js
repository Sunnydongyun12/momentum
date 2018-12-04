import React from 'react';
import PropTypes from 'prop-types';
import { getPng } from 'lib/assetsUtils';
import CTABtn from 'components/CTABtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Card = styled.div`
  display: grid;
  grid-template-columns: 200px 0.7fr 1fr;
  grid-column-gap: 30px;
  background: white;

  color: black;
  height: 200px;
  width: 80%;

  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  transition: all 0.25s ease-out;
  text-align: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
    transform: translateY(-1px);
    z-index: 0;
    margin-right: -10px;
  }
`;

const Middle = styled.div`
  display: grid;
  grid-template-rows: auto auto 40px 40px 10px;
  grid-row-gap: 10px;
  overflow: hidden;

`;

const RightSide = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  padding: 0 10px;
  overflow: hidden;
`;

const ProviderDescription = styled.div`
  text-align: left;
  color: #5a5c59;
  padding: auto auto 15px;
  overflow: hidden;
`;

const Heading = styled.div`
  width: 230px;
  max-height: 30px;
  text-align: left;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 600;
  overflow: hidden;
`;

const ZipCode = styled.div`
  padding: 5px 10px;
  display: inline-block;
  background: #eee;
  text-align: left;
  font-weight: 400;
  width: 160px;
`;

const TextIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const ImgBackground = styled.div`
  background: #eee;
`;

const ProfilePic = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  align-self: center;
  background: #eee;
`;

const ActionBtn = styled(CTABtn)`
  width: 190px;
`;

const ProviderCard = ({ providerId, description, zipCode, imgName, name, history, startDate, endDate }) => {
  
  return (
    <Card>
      <ImgBackground>
        <ProfilePic alt="profile picture" src={getPng(imgName)} />
      </ImgBackground>

      <Middle>
        <Heading>{name}</Heading>

        <ZipCode>
          <TextIcon icon="map-marker-alt" />
          Zip Code: {zipCode}
        </ZipCode>

        <ActionBtn theme="pink" onClick={() => history.push(`/providers/${providerId}`)}>
          <TextIcon icon="user" color="#fff" />
          <span>View Profile</span>
        </ActionBtn>

        <ActionBtn theme="outlineBlue" onClick={() => history.push('/messenger')}>
          <TextIcon style={{ marginLeft: '-20px' }} icon="envelope" />
          <span>Message</span>
        </ActionBtn>
      </Middle>

      <RightSide>
        <Heading>DESCRIPTION</Heading>
        <ProviderDescription>{`${description.split(' ').slice(0, 30).join(' ')}...`}</ProviderDescription>
        {startDate && <ProviderDescription>from {startDate} to {endDate}, awaiting confirmation</ProviderDescription>}
      </RightSide>
    </Card>
  );
};

ProviderCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  imgName: PropTypes.string,
  zipCode: PropTypes.string,
  history: PropTypes.object,
  providerId: PropTypes.string,
};

export default ProviderCard;
