import React from 'react'
import styled from 'styled-components'
import { LogoImage } from '../../assets/images'
import { Link } from '../Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`

const Logo = styled.img`
  height: 70px;
`

const SubTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: var(--color-black);
`

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: var(--color-black);
`

export const About = () => {
  return (
    <Wrapper>
      <Logo src={LogoImage} alt="logo" />
      <SubTitle>Оставьте заявку и станьте частью нашей команды</SubTitle>
      <Paragraph>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных дизайнеров, архитекторов и декораторов,
        дизайн-бюро и интерьерные студии — все, кто дизайн интерьера сделали своим призванием. 
        <br />
        <br />
        Партнерство мы видим как доверительные отношения, основанные на честности реализации бизнес идей в сфере создания и
        продаж современной, качественной, удобной, функциональной и эксклюзивной мебели.
        <br />
        <br />
        Ознакомиться с проектами можете в нашем <Link href='/'>портфолио</Link>. Если Вы оформляете интерьеры жилых или коммерческих помещений
        — мы с радостью поможем Вам: составим уникальные условия сотрудничества, предоставим 3D модели (уточняйте у менеджеров)
        и разработаем коммерческое предложение к Вашему проекту или изображениям.
      </Paragraph>
    </Wrapper>
  )
}