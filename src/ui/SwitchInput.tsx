import {useField} from "formik";
import {Switch, SwitchProps} from "@mui/material";
import styled from "styled-components";
import {FC} from "react";

type SwitchInputProps = SwitchProps & {
  name: string;
  label: string
};

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SwitchStyled = styled(Switch)`
  && {
    
    &.MuiSwitch-root .Mui-checked {
      color: ${props => props.theme.color.purple1};
    }
  }
`

const Title = styled('span')`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.color.gray1}
`

export const SwitchInput: FC<SwitchInputProps> = (props) => {
  const [field] = useField({name: props.name});

  return (
      <Wrapper>
        <SwitchStyled {...props} {...field} />
        <Title>{props.label}</Title>
      </Wrapper>
  )
}