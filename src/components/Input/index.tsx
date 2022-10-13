import React, { FC } from 'react'
import styled from 'styled-components'

export type InputProps = {
  isError?: boolean
  label?: string
  errorLabel?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Label = styled.p`
  color: #828282;
  padding: 0 5px;
  background-color: #FFF;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: -10px;
  left: 10px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &::placeholder {
    color: #CDCAD0;
  }
`

const InputWrapper = styled.div<Pick<InputProps, 'isError'>>`
  height: 50px;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  position: relative;
  transition: .25s;
  width: 100%;

  ${props => {
    if (props.isError) {
      return `
        border-color: #EB5E55;
        
        ${Label} {
          color: #EB5E55;
        }
      `
    }

    if (!props.isError) {
      return `
        &:focus-within {
          border-color: #0086A8;
        }

        &:focus-within ${Label} {
          color: #0086A8;
        }
      `
    }
  }}
`

const ErrorLabel = styled.p`
  color: #EB5E55;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Input: FC<InputProps> = ({isError, label, errorLabel, ...props}) => {
  return (
    <Wrapper>
      <InputWrapper isError={isError}>
        <StyledInput type="text" {...props}/>
        <Label>{label}</Label>
      </InputWrapper>
      {isError && <ErrorLabel>{errorLabel}</ErrorLabel>}
    </Wrapper>
  )
}