import { Step } from '../useMultiStepForm'
import DesktopSidebar from '../assets/bg-sidebar-desktop.svg'
import MobileSidebar from '../assets/bg-sidebar-mobile.svg'
import { useMediaQuery } from 'react-responsive'

type Props = {
  steps: Step[]
  currentStepId: number
  setNavigationAction: React.Dispatch<
    React.SetStateAction<{
      method: 'goToStep' | 'stepBack' | 'stepNext'
      attributes?: any
    }>
  >
}

export const StepSelector = ({ steps, currentStepId, setNavigationAction }: Props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return (
    <div className='relative'>
      <img
        className='max-lg:w-full'
        src={isDesktopOrLaptop ? DesktopSidebar : MobileSidebar}
      />
      <div className='absolute top-6 left-1/2 max-lg:-translate-x-1/2 lg:top-9 lg:left-9 max-lg:flex max-lg:gap-4'>
        {steps.map(step => (
          <div className='flex items-center gap-3 mb-6' key={step.id}>
            <button
              className={`${
                currentStepId + 1 === step.id
                  ? 'bg-primary-light-blue text-primary-marine-blue'
                  : 'border border-white text-white'
              } rounded-full h-[33px] w-[33px] text-sm font-bold`}
              onClick={() =>
                setNavigationAction({
                  method: 'goToStep',
                  attributes: step.id - 1,
                })
              }
            >
              {step.id}
            </button>
            {isDesktopOrLaptop && (
              <div>
                <p className='text-xs text-primary-pastel-blue uppercase'>
                  Step {step.id}
                </p>
                <p className='text-white text-sm uppercase font-bold'>{step.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
