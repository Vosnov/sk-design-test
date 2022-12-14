import React, { FC } from 'react'

import styled from 'styled-components';
import { ButtonLoader } from '../ButtonLoader';

type ButtonProps = {
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<ButtonProps>`
  color: var(--color-white);
  background-color: var(--color-blue1);
  padding: 0 25px;
  height: 50px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${(props) => {
    if (props.isLoading) return '' 
    return `
      &:hover {
        background-color: var(--color-blue2);
      };
      &:active {
        background-color: var(--color-blue3);
      }
      &:disabled {
        background-color: var(--color-grey2);
        color: var(--color-grey1);
      }
    `
  }}
`

export const Button: FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {props.isLoading ? <ButtonLoader/> : props.children}
    </StyledButton>
  )
}