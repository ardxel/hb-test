import {useField} from "formik";
import {TextField} from "@mui/material";
import styled from "styled-components";

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled('span')`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 9px;
  color: ${props => props.theme.color.gray1};
`

const TextFieldStyled = styled(TextField)`
  && {
    width: 100%;
    height: 56px;
    padding: 8px 0px;
    border-color ${props => props.theme.color.gray2};

    .Mui-focused fieldset {
      border-color: ${props => props.theme.color.purple1};
    }

    input {
      font-weight: 400;
      color: ${props => props.theme.color.gray1};
      font-size: 16px;
      line-height: 24px;
    }

    & .MuiFormHelperText-root {
      font-weight: 400;
      font-size: 12px;
      color: ${props => props.theme.color.gray1};
    }
  }
`
const Error = styled('span')`
  font-weight: 400;
  line-height: 18px;
  font-size: 12px;
  color: red;
`

export const TextInput = (props) => {
  const [field, meta] = useField({name: props.name});
  const {isError, helperText} = _textInputHelper();

  function _textInputHelper() {
    const {touched, error} = meta;

    const isError = touched && !!error;
    const helperText = touched && error;

    return {isError, helperText};
  }

  return (
      <Wrapper>
        <Title>{props.label}</Title>
        <TextFieldStyled
            type='text'
            {...props}
            helperText={!isError && props.helperText}
            label={undefined}
            {...field}
            hiddenLabel
            placeholder={'Enter username'}/>
        <Error>{isError && helperText}</Error>
      </Wrapper>
  )
}