import React, { FC, useCallback, useState } from "react";
import {SlideDown as RSlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import styled from "styled-components";
import { Arrow } from "../Arrow";

type Props = {
  children: React.ReactNode
  label?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Head = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  color: var(--color-black);
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const SlideDown: FC<Props> = ({children, label}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <Wrapper>
      <Head>
        <Label>{label}</Label>
        <Button type="button" onClick={onToggle}>
          <Arrow isOpen={isOpen} />
        </Button>
      </Head>
      <RSlideDown className={'my-dropdown-slidedown'}>
        {isOpen ? children : null}
      </RSlideDown>
    </Wrapper>
  )
}