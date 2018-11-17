import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProviderCard.css';
import { getPng, getSvg } from 'lib/assetsUtils';
import CTABtn from 'components/CTABtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <div style={{ padding: '5px 10px', display: 'inline-block', background: '#eee', textAlign: 'left', fontWeight: '400', width: '160px'  }}>
            <FontAwesomeIcon icon="map-marker-alt" style={{ marginRight: '10px' }}/>
           Zip Code: {zipCode}
          </div>
          <CTABtn className="CTABtn--dark" onClick={() => history.push('/providers/2')} style={{ display: 'block', width: '200px' }}>
            <FontAwesomeIcon icon="user" color="#fff" style={{ marginRight: '10px' }}/>
        View Profile
          </CTABtn>
          <CTABtn className="CTABtn--outline" style={{  width: '200px', display: 'block'  }}>
            <FontAwesomeIcon icon="envelope" style={{ marginRight: '10px' }}/>
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
