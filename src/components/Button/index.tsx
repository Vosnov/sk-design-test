import React, { FC } from 'react'

import styled from 'styled-components';
import { ButtonLoader } from '../ButtonLoader';

type ButtonProps = {
  isLoading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<ButtonProps>`
  color: #FFF;
  background-color: #0086A8;
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
        background-color: #007693;
      };
      &:active {
        background-color: #00657E;
      }
      &:disabled {
        background-color: #E3E3E3;
        color: #828282
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