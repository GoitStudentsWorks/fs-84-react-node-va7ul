import Modal from 'react-modal';
import { useSelector } from 'react-redux';

import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  Button,
  ButtonBlock,
  ContentBlock,
  Title,
  CancelButton,
} from './Reacord.styled';
import { AddIcon, ButtonAdd } from './MealPopUpModal.styled';
import { ModalInput } from '../ModalInput/ModalInput';
import sprite from '../../assets/images/sprite.svg';
import { selectInputCounter } from '../../redux/dailyFoodStatistics/foodSelectors';
import {} from '../../redux/dailyFoodStatistics/foodSlice';
import { Formik, FieldArray, Form } from 'formik';

const customStyles = {
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
    width: '100vw',
    height: '100vh',
  },
};

Modal.setAppElement('#root');

export const MealPopUpModal = ({ stateModal, closeModal }) => {
  let inputCounter = useSelector(selectInputCounter);

  // const arr = {
  //   typeFood: typefood,
  //   userFood: [
  //     // {
  //     //   name,
  //     //   calories,
  //     //   nutrition: { carbogidrate, protein, fat },
  //     // },
  //   ],
  // };

  const initialCard = {
    name: '',
    carbogidrate: '',
    protein: '',
    fat: '',
    calories: '',
    productId: '',
  };

  return (
    <Modal isOpen={stateModal} onRequestClose={closeModal} style={customStyles}>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>
            {/* {secondType === undefined ? secondType : type} */}
          </MealTitle>
        </MealContainer>

        <Formik
          initialValues={{
            products: inputCounter.map(() => initialCard),
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values.products);
            // dispatch(addFood(arr));
            // closeModal();
            resetForm();
          }}
        >
          {({ values, resetForm, setFieldValue }) => {
            return (
              <Form>
                <FieldArray name="products">
                  {({ remove }) => {
                    <>
                      {values.products.map((item, i) => {
                        return (
                          <ModalInput
                            key={i}
                            dataIndex={i}
                            resetForm={resetForm}
                            values={values}
                            remove={remove}
                          />
                        );
                      })}
                      <ButtonAdd
                        onClick={() => {
                          setFieldValue('products', [
                            ...values.products,
                            initialCard,
                          ]);
                          // const index = values.products.length - 1;
                          // const counter = inputCounter[index] + 1;
                          // console.log(counter);
                          // dispatch(addInputHandler(counter));
                        }}
                        type="button"
                      >
                        <AddIcon>
                          <use href={`${sprite}#icon-add-converted`}></use>
                        </AddIcon>
                        Add more
                      </ButtonAdd>
                      <ButtonBlock>
                        <Button type="submit">Confirm</Button>
                        <CancelButton onClick={closeModal} type="button">
                          Cancel
                        </CancelButton>
                      </ButtonBlock>
                    </>;
                  }}
                </FieldArray>
              </Form>
            );
          }}
        </Formik>
      </ContentBlock>
    </Modal>
  );
};
