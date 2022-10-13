import React, { FC } from "react";
import InputMask from 'react-input-mask';
import { Input, InputProps } from "../Input";

export const TelephoneInput: FC<InputProps> = (props) => {
  return (
    <InputMask mask="+7\(999) 999-99-99" maskChar=" " {...props}>
      {/* @ts-ignore */}
      {(inputProps) => (<Input {...inputProps}/>)}
    </InputMask>
  )
}