import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../styles/FilterTags.css';
import { preventFocus } from 'lib/accessibilityUtils';

export const FilterTags = ({ className, onClick, filters, ...rest }) => {
  const buttonClasses = classNames('FilterTags FilterTags--outline', className);

  return (
    <div>
      <h3 style={{ fontWeight: '400', color: '#121212' }}>Filters</h3>
      {filters.map(el => {
        return (
          <button
            className={buttonClasses}
            // onClick={onClick(el)}
            onMouseDown={preventFocus}
            {...rest}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

FilterTags.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.string),
};

export default FilterTags;
