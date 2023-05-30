import {useField} from "formik";
import {CheckboxProps} from "@mui/material";
import {Checkbox} from "@mui/material";
import {FC} from "react";
import styled from "styled-components";

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const CheckboxStyled = styled(Checkbox)`
  && {
    display: block;
  }
`

const Title = styled('span')`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.gray1}
`

type CheckboxInputProps = CheckboxProps & {
  name: string;
  label: string
};

export const CheckboxInput: FC<CheckboxInputProps> = (props) => {
  const [field, meta] = useField({name: props.name});

  return (
      <Wrapper>
        <CheckboxStyled {...props} {...field} />
        <Title>{props.label}</Title>
      </Wrapper>
  )
}