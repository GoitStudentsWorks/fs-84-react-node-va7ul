import styled from 'styled-components';
import { Field, Form } from 'formik';
import { hidden, theme } from '../../../GlobalStyle';

export const PageWrapper = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-bottom: 174px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 72px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins500';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;

  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;

    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 160px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;

  @media screen and (min-width: 834px) {
    width: 376px;
    height: 374px;
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 528px;
    margin-left: 116px;
  }
`;

export const FormWrapper = styled(Form)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 834px) {
    max-width: 491px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px 60px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 69px;
  }
`;

export const LabelInput = styled.label`
  font-family: 'Poppins500';
  font-weight: 500;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    width: 212px;
  }
`;

export const FieldStyled = styled(Field)`
  margin-top: 12px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  color: var(--primary-color-white);
  border: 1px solid var(--primary-color-grey);
  background: var(--primary-color-black-two);
  font-family: 'Poppins400';

  &:focus,
  &:hover {
    border-color: var(--primary-color-green-lite);
  }
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`;

export const InputWrapper = styled.div`
  width: 219px;
  display: flex;
  gap: 12px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`;

export const DownloadButton = styled.label`
  background-color: var(--primary-color-black-one);
  padding: 0px;
  border: transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export const DownloadSpan = styled.span`
  color: var(--primary-color-white);
  font-family: 'Poppins400';
  font-size: 13.5px;
`;

export const InputStyled = styled.input`
  ${hidden}
`;

export const formControlStyled = {
  gap: '12px',
  width: '300px',
  [theme.breakpoints.up('tablet')]: {
    width: '212px',
  },
};

export const formLabelStyled = {
  fontFamily: 'Poppins500',
  fontSize: '14px',
  color: 'white.main',
  '&.Mui-focused': {
    color: 'white.main',
  },
};

export const formControlLabel = {
  gap: '8px',
  margin: '0px',
  '& .MuiTypography-root': {
    fontFamily: 'Poppins400',
    fontWeight: 400,
    fontSize: '14px',
  },
  '& .MuiButtonBase-root': {
    padding: '0px',
  },
};

export const radioStyled = {
  color: 'grey.main',
  '&.Mui-checked': {
    color: 'greenlite.main',
  },
  '& .MuiSvgIcon-root': {
    width: '12px',
    height: '12px',
  },
};

export const buttonGroupStyled = {
  gap: '12px',
  width: '100%',
  [theme.breakpoints.down('tablet')]: {
    flexDirection: 'column',
  },
  '& .MuiButtonGroup-firstButton': {
    borderRadius: '12px',
    color: 'blacktwo.main',
    backgroundColor: 'greenlite.main',
    margin: '0px',
    borderRightColor: 'none',
  },
  '& .MuiButtonGroup-firstButton:hover': {
    borderRadius: '12px',
    color: 'blacktwo.main',
    backgroundColor: 'greenlite.main',
    border: '1px solid transparent',
    borderRightColor: 'transparent',
  },
  '& .MuiButtonGroup-lastButton': {
    borderRadius: '12px',
    color: 'grey.main',
    margin: '0px',
  },
  '& .MuiButtonGroup-lastButton:hover': {
    borderColor: 'greenlite.main',
    color: 'greenlite.main',
  },
};

export const buttonStyled = {
  width: '212px',
  padding: '8px 10px',
  border: '1px solid transparent',
  [theme.breakpoints.down('tablet')]: {
    width: '100%',
  },
};

export const ErrorMessageStyled = styled.div`
  color: #e74a3b;
  font-family: 'Poppins400';
  font-size: 12px;
  margin-left: 4px;
`;
