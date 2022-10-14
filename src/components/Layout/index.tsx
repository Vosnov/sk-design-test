import styled from 'styled-components'
import { device, size } from '../../appConstants/media'

export const Layout = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1440px;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  max-width: 90%;

  @media ${device.tablet} {
    max-width: ${size.mobileL};
  }

  @media ${device.laptop} {
    max-width: ${size.tablet};
    flex-direction: row;
  }

  @media ${device.laptopL} {
    max-width: ${size.laptop};
  }

  @media ${device.desktop} {
    max-width: ${size.laptopL};
  }
`