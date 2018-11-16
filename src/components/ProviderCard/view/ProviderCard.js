import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProviderCard.css';
import { getPng } from 'lib/assetsUtils';
import CTABtn from 'components/CTABtn';

class ProviderCard extends React.Component {
  render() {
    const { description, zipCode, imgName, name, history } = this.props;
    
    return (
      <div className="ProviderCard">
        <div className="ProviderCard__x">
          <img className="ProviderCard__image" alt={imgName} src={getPng(imgName)}></img>
        </div>
        <div className="ProviderCard__name"> {name} </div>
        <div>
          <div class="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
          </div>
          <span style={{ color: 'rebeccapurple' }}>Zip Code: {zipCode}</span>
        </div>
        <div class="ProviderCard__description"> {description}</div>
        <div className="ProviderCard__actions"> 
          <CTABtn onClick={() => history.push('/providers/2')} style={{ background: '#B07480', color: 'white' }}>View Profile</CTABtn>
          <CTABtn style={{ background: '#6D6980', color: 'white' }}>Message</CTABtn> 
        </div>
      </div>
    );
  }
}

ProviderCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  imgName: PropTypes.string,
  zipCode: PropTypes.string,
  history: PropTypes.object,
};

export default ProviderCard;
