import React from 'react';
import PropTypes from 'prop-types';
import { getPng } from 'lib/assetsUtils';
import CTABtn from 'components/CTABtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
`;

const RightSide = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0 10px;
`;

const ProviderDescription = styled.div`
  text-align: left;
  color: #5A5C59;
`;

const Heading = styled.div`
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  display: block;
  width: 200px;
`;

const ProviderCard = ({ description, zipCode, imgName, name, history }) => {
  return (
    <Card>

      <ImgBackground>
        <ProfilePic alt={imgName} src={getPng(imgName)} />
      </ImgBackground>

      <Middle>
        <Heading>{name}</Heading>
          
        <ZipCode>
          <TextIcon icon="map-marker-alt" />
           Zip Code: {zipCode}
        </ZipCode>

        <ActionBtn theme="dark" onClick={() => history.push('/providers/2')}>
          <TextIcon icon="user" color="#fff"/>
        View Profile
        </ActionBtn>

        <ActionBtn theme="outline">
          <TextIcon icon="envelope"/>
        Message
        </ActionBtn> 

      </Middle>

      <RightSide>
        <Heading>DESCRIPTION</Heading>
        <ProviderDescription>{description}</ProviderDescription>
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
};

export default ProviderCard;