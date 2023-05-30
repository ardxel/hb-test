import {ButtonGroup, ButtonStyled, RegistrationForm, Wrapper} from "./styles";
import {FormControlLabel, MenuItem, Radio} from "@mui/material";
import {Formik, FormikProps} from "formik";
import {TextInput} from "../../ui/TextInput/TextInput";
import {CheckboxInput} from "../../ui/CheckboxInput";
import {SwitchInput} from "../../ui/SwitchInput";
import {RadioGroupInput} from "../../ui/RadioGroupInput";
import {DropdownInput} from "../../ui/DropdownInput";
import {validateRegistration} from "./validation";

const initialValues = {
  username: '',
  password: '',
  inputTextLabel: '',
  checkbox: '',
  toggleOff: false,
  radioSelection: '',
  dropdownTitle: ''
}

export type RegistrationFormValues = typeof initialValues

export const RegistrationPage = () => {

  const _onSubmit = (values) => {
    window.alert(JSON.stringify(values, null, 2));
  }

  return (
      <Wrapper>
        <Formik
            initialValues={initialValues}
            onSubmit={_onSubmit}
            validate={validateRegistration}>
          {(props: FormikProps<any>) => (
              <RegistrationForm onSubmit={props.handleSubmit}>

                <TextInput name={'username'} label={'Username'}/>

                <TextInput name={'password'} helperText={'Your password is between 4 and 12 characters'} label={'Password'}/>

                <TextInput name={'inputTextLabel'} label={'Input Text Label'}/>

                <CheckboxInput name={'checkbox'} label={'Remember me'}/>

                <SwitchInput name={'toggleOff'} label={'Off'}/>

                <RadioGroupInput name='radioSelection' label='Radio Selection'>
                  {new Array(3).fill(Radio).map((Radio, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            value={`radioSelection${index + 1}`}
                            label={`Radio Selection ${index + 1}`}
                            control={<Radio/>}/>
                    )
                  })}
                </RadioGroupInput>

                <DropdownInput name='dropdownTitle' label={'Dropdown Title'}>
                  {new Array(3).fill(MenuItem).map((Item, index) => {
                    return <MenuItem key={index}
                                     value={`DropdownOption${index + 1}`}>{`Dropdown Option ${index + 1}`}</MenuItem>
                  })}
                </DropdownInput>


                <ButtonGroup>
                  <ButtonStyled
                      $clear>Cancel</ButtonStyled>
                  <ButtonStyled
                      $clear={!(props.isValid && props.dirty)}
                      disabled={!(props.isValid && props.dirty)}
                      type={"submit"}>Next</ButtonStyled>

                </ButtonGroup>
              </RegistrationForm>
          )}

        </Formik>
      </Wrapper>
  )
}