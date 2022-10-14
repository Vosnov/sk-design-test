import styled from 'styled-components'
import { device, size } from '../../appConstants/media'

export const Layout = styled.div`
  display: flex;
  gap: 60px;
  max-width: 1440px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 16px auto;
  flex-direction: column;
  max-width: 90%;

  @media ${device.tablet} {
    margin: auto;
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