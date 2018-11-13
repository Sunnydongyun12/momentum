import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PrefForm.css';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import CTABtn from 'components/CTABtn';

const CreatePatientForm = ({ values, errors, touched, isSubmitting }) => (
  <Form className="Form">
    <p style={{ fontSize: '1.3em' }} >Where do you want the storage to be?</p>
    <div className="Form__field">
      <Field
        className="Form__input"
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        style={{ width: '100px' }}
      />
      <label class="Form__label" for="zipCode">Zip Code</label>
    </div>
    <p style={{ fontSize: '1.3em' }} >How much space do you need?</p>
    <label class="Form__label" for="length">Length</label>
    <Field
      className="Form__input"
      type="number"
      name="length"
      placeholder="ft"
      style={{ width: '40px' }}
    />
    <p style={{ display: 'inline', margin: '20px', fontSize: '0.9em' }}>X</p>
    <label class="Form__label" for="length">Width</label>
    <Field
      className="Form__input"
      type="number"
      name="width"
      placeholder="ft"
      style={{ width: '40px' }}
    />
    <p style={{ display: 'inline', margin: '20px', fontSize: '0.9em' }}>X</p>
    <label class="Form__label" for="length">Height</label>
    <Field
      className="Form__input"
      type="number"
      name="height"
      placeholder="ft"
      style={{ width: '40px' }}
    />
    <p style={{ fontSize: '1.3em' }} >Please enter the duration of time you would like to store your belongings.</p>
    <div className="Form__field">
      <Field
        className="Form__input"
        type="date"
        name="from"
        placeholder=""
        style={{ width: '100px' }}
      />
      <label class="Form__label" for="from">From</label>
    </div>
    <div className="Form__field">
      <Field
        className="Form__input"
        type="date"
        name="to"
        placeholder=""
        style={{ width: '100px' }}
      />
      <label class="Form__label" for="to">To</label>
    </div>
    <div className="Form__button-container">
      <CTABtn
        className="CTABtn--dark Form__button"
        type="submit"
      >
        Submit
      </CTABtn>
    </div>
  </Form>
);

CreatePatientForm.propTypes = {
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
})(CreatePatientForm);

export default formikForm;
