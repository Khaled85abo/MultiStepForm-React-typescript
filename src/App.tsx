import React, { FormEvent, useState } from "react"
import AccountForm from "./components/AccountForm"
import AddressForm from "./components/AddressForm"
import { useMultistepForm } from "./useMulitstepForm"
import UserForm from "./components/UserForm"
import { ActionButton, AppWrapper, PageIndicator } from "./components/StyledComponents"
type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}
const INITIAL_DATA: FormData = {
  firstName: 'Khaled',
  lastName: 'Abo',
  age: '38',
  street: 'Rontgenvagen 5',
  city: 'Huddinge',
  state: 'Stockholm',
  zip: '141 52',
  email: 'khaled.abo@vaimo.com',
  password: '123456'
}

function App() {

  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, step, goTo, back, next, currentStepIndex, isFirstStep, isLastStep } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm  {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ])



  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next()
  }
  return (
    <AppWrapper >
      <form onSubmit={onSubmit}>
        <PageIndicator >
          {currentStepIndex + 1}/{steps.length}
        </PageIndicator>
        {step}
        <ActionButton >
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          {<button type="submit" >{isLastStep ? 'Finish' : 'Next'}</button>}
        </ActionButton>
      </form>
    </AppWrapper>
  )
}

export default App
