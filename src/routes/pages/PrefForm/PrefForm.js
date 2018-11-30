import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import CTABtn from 'components/CTABtn';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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


const StyledErrorLabel = styled(StyledLabel)`
  color: red;
  text-transform: none;
`;


const PrefForm = ({ values, errors, touched, isSubmitting, updatePreferences, loggedIn }) => { 
  const SignUpFlowButtons = (
    <React.Fragment>
      <NextBtn theme="pink" type="submit">
        Next
      </NextBtn>

      <Link to="/signup" onClick={() => updatePreferences(values)}>
        <NextBtn theme="outlineBlue">
          Previous
        </NextBtn>
      </Link>
    </React.Fragment>
  );

  const SignedInButton = (
    <NextBtn theme="pink" type="submit">
      Save
    </NextBtn>
  );

  return(
    <Form>
      <Heading>Where do you want to leave your stuff?</Heading>
      <div>
        <div><StyledLabel htmlFor="zipCode">Zip Code</StyledLabel>
          {touched.zipCode && errors.zipCode && <StyledErrorLabel htmlFor="zipCode">{errors.zipCode}</StyledErrorLabel>}
        </div>
        <TextInput
          type="number"
          name="zipCode"
          style={{ width: '100px' }}
          placeholder="Anywhere"
        />
      </div>

      <Heading>How much space do you need?</Heading>
      <SpaceContainer>

        <div>
          <div><StyledLabel htmlFor="length">Length</StyledLabel>
            {touched.length && errors.length && <StyledErrorLabel htmlFor="length">{errors.length}</StyledErrorLabel>}
          </div>
          <TextInput
            type="number"
            name="length"
            placeholder="ft"
          />
        </div>

        <div>
          <div><StyledLabel htmlFor="width">Width</StyledLabel>
            {touched.width && errors.width && <StyledErrorLabel htmlFor="width">{errors.width}</StyledErrorLabel>}
          </div>
          <TextInput
            type="number"
            name="width"
            placeholder="ft"
          />
        </div>

        <div>
          <div><StyledLabel htmlFor="height">Height</StyledLabel>
            {touched.height && errors.height && <StyledErrorLabel htmlFor="height">{errors.height}</StyledErrorLabel>}
          </div>
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
          <div><StyledLabel htmlFor="startDate">Start Date</StyledLabel>
            {touched.startDate && errors.startDate && <StyledErrorLabel htmlFor="startDate">{errors.startDate}</StyledErrorLabel>}
          </div>
          <DateInput
            type="date"
            name="startDate"
            placeholder="mm/dd/yyyy"
          />
        </DateField>

        <DateField>
          <div><StyledLabel htmlFor="endDate" >End Date</StyledLabel>
            {touched.endDate && errors.endDate && <StyledErrorLabel htmlFor="endDate">{errors.endDate}</StyledErrorLabel>}
          </div>
          <DateInput
            type="date"
            name="endDate"
            placeholder="mm/dd/yyyy"
          />
        </DateField>

      </DateContainer>

      {loggedIn ? SignedInButton : SignUpFlowButtons}

    </Form>
  );
};

PrefForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool,
  loggedIn: PropTypes.bool,
  updatePreferences: PropTypes.func,
};

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; 
  var yyyy = today.getFullYear();
  if(dd < 10) { dd = `0${dd}`; } 
  if(mm < 10) { mm = `0${mm}`; } 
  today = `${mm}/${dd}/${yyyy}`;

  return today;
}

// var max;
  
//   return evt.target.value;

// }

const min = getDate();

const formikForm = withFormik({
  mapPropsToValues({ user }) {
    let prefs = {};
    if (user)
      prefs = user.preferences;

    if (prefs) {
      return prefs;
    } else {
      return {
        zipCode: '',
        length:'',
        width: '',
        height: '',
        startDate: '',
        endDate: '',
      };
    }

  },
  validationSchema: yup.object().shape({
    zipCode: yup
      .number() 
      .min(10000, 'Must be exactly 5 digits')
      .max(99999, 'Must be exactly 5 digits')
      .required('Valid zipcode is required.'),
    length:yup
      .number()
      .required('Required')
      .test('val', 'Invalid', val => val > 0),
    width:yup
      .number()
      .required('Required')
      .test('val', 'Invalid', val => val > 0),
    height:yup
      .number()
      .required('Required')
      .test('val', 'Invalid', val => val > 0),
    startDate: yup
      .date()
      .min(min, 'Enter a date later than today')
      .required('Start date required'),
    endDate: yup
      .date()
      .min(min, 'Enter a date later than today')
      .required('End date required'),
  }),
  
  handleSubmit(values, {
    setErrors, resetForm, setSubmitting, props: { history, updatePreferences, loggedIn },
  }) {
    setSubmitting(false);
    resetForm();
    updatePreferences(values);
    const nextLink = loggedIn ? '/providers' : '/signup/finish';
    history.push(nextLink);
  },
})(PrefForm);

export default formikForm;
