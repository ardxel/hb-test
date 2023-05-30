import styled from "styled-components";
import {Form, Formik} from "formik";
import {Button} from "@mui/material";

export const Wrapper = styled('div')`
  
  width: 760px;
  height: 100vh;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegistrationForm = styled(Form)`
  width: 564px;
  height: 1012px;
  margin: 8px auto 0; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
  padding: 0;
`

export const ButtonGroup = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  
`

export const ButtonStyled = styled(Button)<{$clear: boolean}>`
  && {
    width: 172px;
    height: 56px;
    padding: 16px;
    border: 1px solid ${props => props.theme.color.purple1};
    background: ${props => props.$clear ? 'white' : props.theme.color.purple1};
    color: ${props => props.$clear ? props.theme.color.purple1 : 'white'};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    &.MuiButton-root.Mui-disabled {
      color: ${props => props.$clear ? props.theme.color.purple1 : 'white'};
    }
  }
`