import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  StepContainer,
  StepButton,
  RadioGroupContainer,
  FormControlLabel,
  StepTitle,
  StepDescription,
  Image,
  BackButton,
} from './Components.styled';
import image from '../../assets/backgroundImages/goals.png';

const validationSchema = Yup.object().shape({
  activityLevel: Yup.string().required('Required'),
});

const ActivityLevel = ({ nextStep, prevStep }) => {
  const saveToLocalStorage = (values) => {
    localStorage.setItem('activityLevel', values.activityLevel);
  };
  return (
    <Formik
      initialValues={{
        activityLevel: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        saveToLocalStorage(values);
        nextStep(values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <StepContainer>
            <Image src={image} alt="Activity Illustration" />
            <StepTitle>Your Activity</StepTitle>
            <StepDescription>
              To correctly calculate calorie and water intake
            </StepDescription>
            <RadioGroupContainer
              role="group"
              aria-labelledby="activity-level-group"
            >
              <FormControlLabel>
                <Field type="radio" name="activityLevel" value="1.2" />
                1.2 - if you do not have physical activity and sedentary work
              </FormControlLabel>
              <FormControlLabel>
                <Field type="radio" name="activityLevel" value="1.375" />
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </FormControlLabel>
              <FormControlLabel>
                <Field type="radio" name="activityLevel" value="1.55" />
                1.55 - if you play sports with average loads 3-5 times a week
              </FormControlLabel>
              <FormControlLabel>
                <Field type="radio" name="activityLevel" value="1.725" />
                1.725 - if you train fully 6-7 times a week
              </FormControlLabel>
              <FormControlLabel>
                <Field type="radio" name="activityLevel" value="1.9" />
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </FormControlLabel>
            </RadioGroupContainer>
            <StepButton
              type="submit"
              disabled={isSubmitting}
              onClick={nextStep}
            >
              Next
            </StepButton>
            <BackButton type="button" onClick={prevStep}>
              Back
            </BackButton>
          </StepContainer>
        </Form>
      )}
    </Formik>
  );
};

export default ActivityLevel;
