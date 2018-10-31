import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AccountRow.css';
import circle from 'components/assets/circle.svg';

class AccountRow extends React.Component {
  render() {
    const { firstName, onClick } = this.props;

    return (
      <div className="AccountRow">
        <img
          className="AccountRow__icon"
          draggable="false"
          src={circle}
          alt={firstName}
          onClick={onClick}
        />
        <p className="AccountRow__first-name">{firstName}</p>
      </div>
    );
  }
}

// these'll be redux props anyway.
AccountRow.propTypes = {
  firstName: PropTypes.string,
  onClick: PropTypes.func,
};

export default AccountRow;
