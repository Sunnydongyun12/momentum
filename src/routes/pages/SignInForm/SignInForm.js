import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-right: 10px;
  /* font-weight: 300; */
`;

const TextInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px solid ${props => props.error ? 'red' : 'rgb(177, 177, 177)'};
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 1em;
  max-width: 80%;
  height: 40px;
  cursor: text;

  &:focus {
    border: 2px solid ${props => props.error ? 'red' : 'black'};
    outline: 0;
    transition: all 0.2s;
  }
`;

const NextBtn = styled(CTABtn)`
  display: block;
  margin-top: 2em;
  height: 50px;
  width: 100%;
  font-size: 1.3em;
`;

const SignInForm = ({ user, values, errors, touched, isSubmitting }) => (
  <Form style={{ marginTop: '2em' }}>
    <div>
      <div>
        <StyledLabel htmlFor="email">Email</StyledLabel>
      </div>
      <TextInput
        type="text"
        name="email"
        style={{ width: '300px' }}
        placeholder="you@example.com"
      />
    </div>

    <div>
      <div>
        <StyledLabel htmlFor="username">Email</StyledLabel>
      </div>
      <TextInput
        type="text"
        name="username"
        style={{ width: '300px' }}
        placeholder="username"
      />
    </div>

    <div>
      <div>
        <StyledLabel htmlFor="password">Password</StyledLabel>
      </div>
      <TextInput
        autoComplete="new-password"
        type="password"
        name="password"
        style={{ width: '300px' }}
        placeholder="Create a password"
      />
    </div>
    <NextBtn theme="pink" type="submit">
      Next
    </NextBtn>
  </Form>
);

SignInForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  updateUser: PropTypes.func,
  user: PropTypes.object,
  logIn: PropTypes.func,
};

const formikForm = withFormik({
  /* if we get initial props from somewhere else and you want to put those values in there initially */
  /* need to initialize them all to at least empty string to get rid of "uncontrolled to controlled" error */
  mapPropsToValues({ user }) {
    return {
      email: (user && user.email) || '',
      username: (user && user.username) || '',
      password: '',
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .required('Email is required.'),
    username: yup
      .string()
      .required('Username is required.'),
    password: yup
      .string()
      .required('Password is required.'),
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { logIn, updateUser, history },
  }) {
    setSubmitting(false);
    resetForm();
    updateUser(values);
    logIn();
    history.push('/providers');
  },
})(SignInForm);

export default formikForm;
