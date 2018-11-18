import React from 'react';
import styled from 'styled-components';
import { preventFocus } from 'lib/accessibilityUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  
  border: ${props => props.active ?  '2px solid #B04235' : '2px solid #23272b'};
  color: ${props => props.active ? '#fff' : '#000'};
  background-color: ${props => props.active ? '#B04235' : '#fff'};

  &:hover {
    border: ${props => props.active ? '' : '2px solid #B04235'};
    color: ${props => props.active ? '' : '#B04235'};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
  font-size: 0.8em;
`;

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  handleClick = () => {
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
