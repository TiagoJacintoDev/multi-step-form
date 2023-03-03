import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { PersonalInfo } from './components/steps/PersonalInfo'
import { SelectPlan } from './components/steps/SelectPlan'
import { useMultiStepForm } from './useMultiStepForm'
import { SelectAddOns } from './components/steps/SelectAddOns'
import { Summary } from './components/steps/Summary'
import { ThankYou } from './components/ThankYou'
import { addOns, planTypes } from './constants'
import { StepSelector } from './components/StepSelector'

export type PlanTypes = typeof planTypes
export type AddOnTypes = typeof addOns

export type FormData = {
  name: string
  email: string
  phoneNumber: string
  planType: PlanTypes[0]
  planDuration: 'monthly' | 'yearly'
  selectedAddOns: AddOnTypes
}

export type Inputs = Pick<FormData, 'name' | 'email' | 'phoneNumber'>

export const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    planType: planTypes[0],
    planDuration: 'monthly',
    selectedAddOns: [],
  })

  const [showThankYou, setShowThankYou] = useState(false)
  const [resetStep, setResetStep] = useState(false)

  const handleResetStep = () => {
    setResetStep(true)
    setTimeout(() => setResetStep(false), 10)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>()

  const updateField = (field: keyof FormData, value: any) =>
    setFormData(prev => ({ ...prev, [field]: value }))

  const {
    currentStepId,
    goToStep,
    isFirstStep,
    isLastStep,
    stepBack,
    stepNext,
    steps,
    step,
  } = useMultiStepForm([
    {
      id: 1,
      name: 'Your Info',
      component: <PersonalInfo register={register} errors={errors} />,
    },
    {
      id: 2,
      name: 'Select Plan',
      component: (
        <SelectPlan planTypes={planTypes} {...formData} updateField={updateField} />
      ),
    },
    {
      id: 3,
      name: 'Add-Ons',
      component: (
        <SelectAddOns addOns={addOns} {...formData} updateField={updateField} />
      ),
    },
    {
      id: 4,
      name: 'Summary',
      component: (
        <Summary resetStep={handleResetStep} {...formData} yearlyFreeMonths={2} />
      ),
    },
  ])

  useEffect(() => {
    if (resetStep) goToStep(0)
  }, [resetStep])

  const [navigationAction, setNavigationAction] = useState<{
    method: keyof typeof navigationMethods
    attributes?: any
  }>({ method: 'stepNext' })

  const navigationMethods = {
    stepBack,
    stepNext,
    goToStep,
  }

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (isLastStep && navigationAction.method === 'stepNext')
      return setShowThankYou(true)

    const navigateToStep = navigationMethods[navigationAction.method]

    navigateToStep(navigationAction.attributes)
  }

  return (
    <div className='lg:h-full flex items-center'>
      <form
        className='lg:relative lg:grid grid-flow-col lg:rounded-xl w-full lg:w-[940px] mx-auto bg-white lg:p-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <StepSelector
          steps={steps}
          currentStepId={currentStepId}
          setNavigationAction={setNavigationAction}
        />
        <div
          className={`${
            showThankYou ? '' : 'lg:mt-9'
          } absolute lg:-ml-12 max-lg:py-6  max-lg:top-24 max-lg:px-5 max-lg:bg-white max-lg:rounded-lg max-lg:w-11/12 -translate-x-1/2 left-1/2 lg:relative lg:w-[450px] max-lg:shadow-lg`}
        >
          {showThankYou ? <ThankYou /> : <>{step.component}</>}
        </div>
        {!showThankYou && (
          <div className='max-lg:bg-white w-full lg:w-[450px] lg:text-lg absolute bottom-0 max-lg:left-0 lg:bottom-4 lg:right-24 flex items-center max-lg:p-3.5 lg:font-medium'>
            {!isFirstStep && (
              <button
                className='text-neutral-cool-gray'
                onClick={() => setNavigationAction({ method: 'stepBack' })}
              >
                Go Back
              </button>
            )}
            <button
              className={`${
                isLastStep ? 'bg-primary-purplish-blue' : 'bg-primary-marine-blue'
              } rounded-md w-28 lg:w-32 py-2 lg:py-2.5 text-white ml-auto`}
              onClick={() => setNavigationAction({ method: 'stepNext' })}
            >
              {isLastStep ? 'Confirm' : 'Next Step'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
