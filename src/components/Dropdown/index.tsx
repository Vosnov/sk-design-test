import React, { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Arrow } from '../Arrow'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const Select = styled.button<SelectWrapperProps>`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: 0 15px;
  background: #FFFFFF;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  position: relative;
  transition: .25s;

  ${props => {
    if (props.isActive && !props.isError) {
      return `
        border-color: #0086A8;
        ${Label} {
          color: #0086A8;
        }
      `
    }

    if (props.isError) {
      return `
        border-color: #EB5E55;
      `
    }
  }}
`
const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 2px solid #E3E3E3;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  width: 100%;
  top: 53px;
  left: 0;
  max-height: calc(50px * 10);
  overflow: auto;
  z-index: 1;
`
const ListItem = styled.button`
  &:not(:last-child) {
    border-bottom: 2px solid #E3E3E3;
  }
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  text-align: left;
  background-color: #FFF;
`

type SelectWrapperProps = Pick<Props, 'isError'> & {
  isActive: boolean
}

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

const ErrorLabel = styled.p`
  color: #EB5E55;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
`

export type Option = {
  value: string
  label: string
}

type Props = {
  label?: string
  errorLabel?: string
  isError?: boolean
  options: Option[]
  selectedOption?: Option
  emptyLabel?: string
  onChange: (option: Option) => void
}

export const Dropdown: FC<Props> = ({errorLabel, label, isError, options, selectedOption, onChange, emptyLabel = 'Пусто'}) => {
  const [listActive, setListActive] = useState(false)

  const toggleList = useCallback(() => {
    setListActive(prevState => !prevState)
  }, [])

  const onSelectClick = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleList()
  }, [toggleList])

  const onSelectOption = useCallback((option: Option) => {
    return () => {
      onChange(option)
      toggleList()
    }
  }, [toggleList, onChange])

  useEffect(() => {
    const listener = () => {
      if (listActive) toggleList()
    }
    window.addEventListener('click', listener)

    return () => {
      window.removeEventListener('click', listener)
    }
  }, [toggleList, listActive])

  return (
    <Wrapper>
      <Select isError={isError} isActive={listActive} type='button' onClick={onSelectClick}>
        {selectedOption?.label || label}
        <Arrow isOpen={listActive}/>
      </Select>
      {selectedOption && !isError && <Label>{label}</Label>}
      {isError && <ErrorLabel>{errorLabel}</ErrorLabel>}
      {listActive && (
        <List>
          {options.length === 0 && <ListItem>{emptyLabel}</ListItem>}
          {options.map(option => (
            <ListItem type='button' key={option.value} onClick={onSelectOption(option)}>{option.label}</ListItem>
          ))}
        </List>
      )}
    </Wrapper>  
  )
}