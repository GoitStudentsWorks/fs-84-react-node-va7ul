import { styled } from 'styled-components';

export const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ContentBlock = styled.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 676px;
    height: 280px;
    padding: 24px;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`;

export const RecordInputName = styled.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    min-width: 255px;
  }
`;

export const RecordInputCarbo = styled.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 100px;
  }
`;

export const RecordInputProtein = styled.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 86px;
  }
`;

export const RecordInputFat = styled.input`
  min-width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 61px;
  }
`;

export const RecordInputCalories = styled.input`
  min-width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 78px;
  }
`;

export const RecordInputBigFirst = styled.input`
  min-width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 255px;
  }
`;

export const InputBlock = styled.div`
  min-width: 660px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`;

export const SubInputBlock = styled.div`
  min-width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`;

export const SubInput = styled.input`
  display: flex;
  min-width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 60px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    position: absolute;
    right: 24px;
    bottom: 24px;
    gap: 86px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`;

export const AddMore = styled.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`;

export const CancelButton = styled.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;
`;
