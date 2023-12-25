import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../../redux/dailyFoodStatistics/foodOperations';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/Planner.styled';
import {
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  RecordInputBig,
  SubInput,
  SubInputBlock,
  Title,
} from './Reacord.styled';

export const Record = ({ isOpen, type }) => {
  const dispatch = useDispatch();
  const iconPath = 'src/assets/images/sprite.svg';

  const [name, setName] = useState('');
  const [calories, setColories] = useState('');
  const [carbogidrate, setCarbogidrate] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const arr = {
    typeFood: type,
    userFood: [
      {
        name,
        calories,
        nutrition: { carbogidrate, protein, fat },
      },
    ],
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(arr));
    isOpen(false);
  };

  return (
    <BackDrop>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>Breakfast</MealTitle>
        </MealContainer>
        <form onSubmit={formHandler}>
          <InputBlock>
            <RecordInputBig
              value={name}
              placeholder="The name of the product or dish"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <RecordInputBig
              onChange={(e) => {
                setCarbogidrate(e.target.value);
              }}
              value={carbogidrate}
              placeholder="Carbonoh"
            />
            <RecordInputBig
              onChange={(e) => {
                setProtein(e.target.value);
              }}
              value={protein}
              placeholder="Protein"
            />
            <SubInputBlock>
              <SubInput
                onChange={(e) => {
                  setFat(e.target.value);
                }}
                value={fat}
                placeholder="Fat"
              />
              <SubInput
                onChange={(e) => {
                  setColories(e.target.value);
                }}
                value={calories}
                placeholder="Calories"
              />
              <svg
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: ' 20px',
                  fill: 'white',
                }}
              >
                <use href={`${iconPath}#trash-delete`}></use>
              </svg>
            </SubInputBlock>
          </InputBlock>
          <ButtonBlock>
            <Button type="submit" value={'Confirm'} />
            <button
              onClick={() => isOpen(false)}
              style={{
                textAlign: 'center',
                background: 'transparent',
                color: '#B6B6B6',
                border: 'none',
              }}
            >
              Cancel
            </button>
          </ButtonBlock>
        </form>
      </ContentBlock>
    </BackDrop>
  );
};
