import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';


const Heading = styled.div`
  margin: 1em 0;
  font-size: 1.2em;
  font-weight: 500;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 1rem;
  margin-right: 10px;
  /* font-weight: 300; */
`;

const TextInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px rgb(177, 177, 177) solid;
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 5px;
  max-width: 80%;
  height: 40px;
  cursor: text;

  &:focus {
    border-color: black;
    outline: 0;
    transition: all 0.2s;
  }
`;

const NextBtn = styled(CTABtn)`
  display: block;
  margin-top: 20px;
  height: 50px;
  width: 100%;
  font-size: 1.3em;
`;

const SignUpForm = ({ values, errors, touched, isSubmitting }) => (
  <Form style={{ marginTop: '2em' }}>
    <div>
      <div><StyledLabel for="email">Email</StyledLabel></div>
      <TextInput
        type="email"
        name="email"
        style={{ width: '300px' }}
      />
    </div>

    <div>
      <div><StyledLabel for="password">Password</StyledLabel></div>
      <TextInput
        type="password"
        name="password"
        style={{ width: '300px' }}
      />
    </div>

    <NextBtn theme="pink" type="submit">
      Next
    </NextBtn>
  </Form>
);

SignUpForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  goBack: PropTypes.func,
};

const formikForm = withFormik({
  mapPropsToValues({ zipCode }) {
    return {
      zipCode: zipCode || '',
    };
  },
  validationSchema: yup.object().shape({
  }),
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { goBack },
  }) {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      goBack && goBack();
    }, 1000);
  },
})(SignUpForm);

export default formikForm;
