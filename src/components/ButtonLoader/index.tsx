import React, { FC } from 'react'
import { LoaderImage } from '../../assets/images';

import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${rotate} 1s linear infinite;
`

export const ButtonLoader: FC = () => (<Image src={LoaderImage} alt='loader'/>)