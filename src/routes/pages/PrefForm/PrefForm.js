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
  font-size: 0.85rem;
  margin-right: 10px;
  /* font-weight: 300; */
`;

const DateContainer = styled.div`
  width: 600px;
`;

const SpaceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-column-gap: 1em;
`;

const DateField = styled.div`
  display: inline-block;
  width: 50%;
`;

const DateInput = styled(Field)`
  box-sizing: border-box;
  background: #eee;
  border: 2px rgb(177, 177, 177) solid;
  border-radius: 0;
  padding: 0.2em;
  margin-bottom: 5px;
  height: 40px;
  cursor: text;
  min-width: 100%;

  &:focus {
    border-color: black;
    outline: 0;
    transition: all 0.2s;
  }
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
  margin-top: 2em;
  height: 50px;
  width: 45%;
  margin-right: 1em;
  font-size: 1.3em;
`;

const PrefForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>

    <Heading>Where do you want to leave your stuff?</Heading>
    <div>
      <div><StyledLabel for="zipCode">Zip Code</StyledLabel></div>
      <TextInput
        type="text"
        name="zipCode"
        style={{ width: '100px' }}
        placeholder="Anywhere"
      />
    </div>

    <Heading>How much space do you need?</Heading>
    <SpaceContainer>

      <div>
        <div><StyledLabel for="length">Length</StyledLabel></div>
        <TextInput
          type="number"
          name="length"
          placeholder="ft"
        />
      </div>

      <div>
        <div><StyledLabel for="length">Width</StyledLabel></div>
        <TextInput
          type="number"
          name="width"
          placeholder="ft"
        />
      </div>

      <div>
        <div><StyledLabel for="length">Height</StyledLabel></div>
        <TextInput
          type="number"
          name="height"
          placeholder="ft"
        />
      </div>
    </SpaceContainer>

    <Heading>How long do you want to store it for?</Heading>

    <DateContainer>

      <DateField>
        <div><StyledLabel for="from">Start Date</StyledLabel></div>
        <DateInput
          type="date"
          name="from"
          placeholder="mm/dd/yyyy"
        />
      </DateField>

      <DateField style={{ marginLeft: '-1px' }}>
        <div><StyledLabel for="to" >End Date</StyledLabel></div>
        <DateInput
          type="date"
          name="to"
          placeholder="mm/dd/yyyy"
        />
      </DateField>

    </DateContainer>
    <NextBtn theme="pink" type="submit">
      Next
    </NextBtn>
    <NextBtn theme="outlineBlue" type="submit">
      Previous
    </NextBtn>
  </Form>
);

PrefForm.propTypes = {
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
})(PrefForm);

export default formikForm;
