import React, { FC } from 'react'
import styled from 'styled-components'

export type InputProps = {
  isError?: boolean
  label?: string
  errorLabel?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Label = styled.p`
  color: var(--color-grey1);
  padding: 0 5px;
  background-color: var(--color-white);
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
    color: var(--color-grey3);
  }
`

const InputWrapper = styled.div<Pick<InputProps, 'isError'>>`
  height: 50px;
  background: var(--color-white);
  border: 2px solid var(--color-grey2);
  border-radius: 8px;
  position: relative;
  transition: .25s;
  width: 100%;

  ${props => {
    if (props.isError) {
      return `
        border-color: var(--color-red);
        
        ${Label} {
          color: var(--color-red);
        }
      `
    }

    if (!props.isError) {
      return `
        &:focus-within {
          border-color: var(--color-blue);
        }

        &:focus-within ${Label} {
          color: var(--color-blue);
        }
      `
    }
  }}
`

const ErrorLabel = styled.p`
  color: var(--color-red);
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