import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProviderCard.css';
import { getPng, getSvg } from 'lib/assetsUtils';
import CTABtn from 'components/CTABtn';

class ProviderCard extends React.Component {
  render() {
    const { description, zipCode, imgName, name, history } = this.props;
    
    return (
      <div className="ProviderCard">
        <div className="ProviderCard__x">
          <img className="ProviderCard__image" alt={imgName} src={getPng(imgName)}></img>
        </div>
        <div class="ProviderCard__middle">
          <div className="ProviderCard__name"> {name} </div>
          <div style={{ display:'inline' }} style={{ textAlign: 'left', fontWeight: '500' }}>Zip Code: {zipCode}</div>
          <CTABtn className="CTABtn--dark" onClick={() => history.push('/providers/2')} style={{ color: 'white', display: 'block', width: '200px' }}>
            <img style={{ height: '15px', marginRight: '5px' }}src={getSvg('patients')}></img>
        View Profile
          </CTABtn>
          <CTABtn className="CTABtn--dark" style={{ width: '200px', color: 'white', display: 'block'  }}>
            <img style={{ height: '15px', marginRight: '5px' }}src={getSvg('mail')}></img>
        Message
          </CTABtn> 
        </div>
        <div class="ProviderCard__right">
          <div className="ProviderCard__name">DESCRIPTION</div>
          <div style={{ textAlign: 'left' }} class="ProviderCard__description"> {description}</div>
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
