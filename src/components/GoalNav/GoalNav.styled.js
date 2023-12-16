import styled from 'styled-components';

export const LoseFat = styled.img`
  width: 28px;
  height: 28px;
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const DivImage = styled.div`
  border: 1px solid #292928;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.01);
  padding: 10px;
`;

export const MainText = styled.p`
  font-family: 'Poppins600', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  color: var(--primary-color-white);
`;

export const Text = styled.p`
  font-family: 'Poppins500', sans-serif;
  font-size: var(--main-font-size);
  font-style: normal;
  line-height: var(--main-line-height);
  color: var(--primary-color-white);
`;

export const MenuTitle = styled.p`
  font-family: 'Poppins500', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;
  color: var(--primary-color-white);
`;

export const MenuText = styled.p`
  font-family: 'Poppins400', sans-serif;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  color: var(--primary-color-grey);
  margin-bottom: 7px;
`;

export const BtnText = styled.p`
  font-family: 'Poppins500', sans-serif;
  font-size: var(--main-font-size);
  line-height: var(--main-line-height);
  color: var(--primary-color-black-one);
`;
