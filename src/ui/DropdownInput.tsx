import {useField} from "formik";
import {FormControl, FormLabel, Select, SelectProps} from "@mui/material";
import {FC} from "react";
import styled from "styled-components";

type DropdownInputProps = SelectProps & {
  name: string
};

const SelectStyled = styled(Select)`
  && {
    .MuiSelect-select fieldset {
      border-color: ${props => props.theme.color.purple1}!important;
    }
  }
`

export const DropdownInput: FC<DropdownInputProps> = (props) => {
  const [field, meta] = useField({name: props.name});

  return (
      <FormControl>
        <FormLabel>
          {props.label}
        </FormLabel>
        <SelectStyled {...field} {...props}>
          {props.children}
        </SelectStyled>
      </FormControl>
  )
}