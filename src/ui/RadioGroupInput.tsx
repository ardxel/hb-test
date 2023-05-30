import {useField} from "formik";
import {FormControl, FormLabel, Radio, RadioGroup, RadioGroupProps} from "@mui/material";
import {FC, PropsWithChildren} from "react";

type RadioGroupInput = RadioGroupProps & {
  name: string,
  label: string
};

export const RadioGroupInput: FC<PropsWithChildren<RadioGroupInput>> = (props) => {
  const [field, meta] = useField({name: props.name});

  return (
      <FormControl>
        <FormLabel id={props.label}>
          {props.label}
        </FormLabel>
        <RadioGroup {...field} aria-labelledby={props.label}>
          {props.children}
        </RadioGroup>
      </FormControl>
  )
}