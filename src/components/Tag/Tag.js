import React from 'react';
import styled from 'styled-components';
import { preventFocus } from 'lib/accessibilityUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blue } from 'lib/stylesConstants';

const StyledTag = styled.button`
  display: block;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  margin: 1em 0;
  padding: 0 10px;
  font-size: 1rem;
  line-height: 1.5;
  /* border-radius: 0.25rem; */
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  cursor: pointer;
  
  border: 2px solid ${props => props.active ?  blue : '#23272b'};
  color: ${props => props.active ? '#fff' : '#000'};
  background-color: ${props => props.active ? blue : '#fff'};

  &:hover {
    border: 2px solid ${props => props.active ? 'transparent' : blue};
    color: ${props => props.active ? '' : blue};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  font-size: 0.8em;
`;

class Tag extends React.Component {
  constructor(props) {
    super(props);
    const isSelected = this.props.providerFilters.includes(this.props.children);
    this.state = { active: isSelected };
  }

  handleClick = () => {
    if (this.state.active) {
      this.props.removeFilter(this.props.children);
    } else {
      this.props.addFilter(this.props.children);
    }
    this.setState({ active: !this.state.active });
  };

  render() {
    const { onClick, children, ...rest } = this.props;

    return (
      <StyledTag
        onClick={this.handleClick}
        onMouseDown={preventFocus}
        active={this.state.active}
        {...rest}
      >
        <Icon icon="tag" />
        {children}
      </StyledTag>
    );
  }
};

export default Tag;
