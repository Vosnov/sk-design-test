import { useFormik, FormikHelpers } from "formik";
import React, { FC, useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Dropdown, Option } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import { SlideDown } from "../../components/SlideDown";
import * as Yup from 'yup';
import { TelephoneInput } from "../../components/InputNumber";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FormData, formFetchSubmit } from "../../store/reducers/form";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 30px;
  width: 440px;
  background: var(--color-white);
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  gap: 20px;
`

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

const SlideRow = styled.div`
  margin-top: 20px;
  display: flex;
`

const formSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа'),
  telephone: Yup.string().required('Обязательное поле').length(17, 'Введите телефон полностью'),
  email: Yup.string().required('Обязательное поле').matches(/.+@.+\..+/, 'Введите Email'),
  profileLink: Yup.string().required('Обязательное поле').min(3, 'Минимум 3 символа'),
  city: Yup.object().required('Обязательное поле')
})

export const Form: FC = () => {
  const dispatch = useAppDispatch()
  const {cities, sources} = useAppSelector(state => state)
  const {data, isLoading} = useAppSelector(state => state.form)

  const [cityOptions, setCityOptions] = useState<Option[]>([])
  const [sourceOptions, setSourceOptions] = useState<Option[]>([])

  useEffect(() => {
    setCityOptions(cities.map(data => ({value: data.id, label: data.name})))
  }, [cities])

  useEffect(() => {
    setSourceOptions(sources.map(data => ({value: data, label: data})))
  }, [sources])

  const onSubmit = useCallback((data: FormData, handlers: FormikHelpers<FormData>) => {
    dispatch(formFetchSubmit({data, callback: handlers.resetForm}))
  }, [dispatch])

  const {errors, values, handleSubmit, handleChange, isValid, setFieldValue, handleReset} = useFormik({
    initialValues: data,
    validationSchema: formSchema,
    validateOnMount: true,
    onSubmit,
  })
  
  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <Wrapper>
        <Row>
          <Input 
            errorLabel={errors.name} 
            isError={errors.name !== undefined} 
            name="name" value={values.name} 
            onChange={handleChange} 
            placeholder="Иван" 
            label="Ваше имя *"
          />
          <TelephoneInput 
            errorLabel={errors.telephone} 
            isError={errors.telephone !== undefined} 
            name="telephone" 
            value={values.telephone} 
            onChange={handleChange} 
            placeholder="+ 7 (000) 000-00-00" 
            label="Номер телефона *"
          />
        </Row>
        <Row>
          <Input 
            errorLabel={errors.email} 
            isError={errors.email !== undefined} 
            name="email" 
            value={values.email} 
            onChange={handleChange} 
            placeholder="example@skdesign.ru" 
            label="Email *"
          />
          <Input 
            errorLabel={errors.profileLink} 
            isError={errors.profileLink !== undefined} 
            name="profileLink" value={values.profileLink} 
            onChange={handleChange} 
            placeholder="instagram.com/skde…" 
            label="Ссылка на профиль *"
          />
        </Row>
        <Row>
          <Dropdown 
            errorLabel={errors.city} 
            isError={errors.city !== undefined} 
            selectedOption={values.city} 
            label="Выберите город *" 
            onChange={(value) => setFieldValue('city', value)} 
            options={cityOptions}
          />
        </Row>
        <Row>
          <Input 
            name="organization" 
            value={values.organization} 
            onChange={handleChange} 
            placeholder="SK Design" 
            label="Название организации/студии"
          />
        </Row>
        <SlideDown label="Скрыть дополнительные поля">
          <SlideRow>
            <Input 
              name="fullName" 
              value={values.fullName} 
              onChange={handleChange} 
              placeholder="ФИО" 
              label="Получатель"
            />
          </SlideRow>
          <SlideRow>
            <Dropdown 
              selectedOption={values.source} 
              label="От куда узнали про нас?" 
              onChange={(value) => setFieldValue('source', value)} 
              options={sourceOptions}
            />
          </SlideRow>
        </SlideDown>
        <Row>
          <Button disabled={!isValid} isLoading={isLoading} type="submit">Отправить заявку</Button>
        </Row>
      </Wrapper>
    </form>
  )
}