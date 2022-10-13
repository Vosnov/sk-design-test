import { FC } from 'react'
import styled from 'styled-components'
import { ArrowImage } from '../../assets/images'

type Props = {
  isOpen: boolean
}

const StyledArrow = styled.img<Props>`
  transition: .25s;
  transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
`

export const Arrow: FC<Props> = (props) => (<StyledArrow src={ArrowImage} alt='arrow' {...props}/>)