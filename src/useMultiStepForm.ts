import { useState } from 'react'

export type Step = { id: number; name: string; component: React.ReactElement }

export const useMultiStepForm = (steps: Step[]) => {
  const [currentStepId, setCurrentStepId] = useState(0)

  const stepBack = () => setCurrentStepId(id => (id <= 0 ? id : id - 1))
  const stepNext = () => setCurrentStepId(id => (id >= steps.length - 1 ? id : id + 1))
  const goToStep = (newStep: number) => setCurrentStepId(newStep)

  return {
    currentStepId,
    steps,
    step: steps[currentStepId],
    stepBack,
    stepNext,
    goToStep,
    isFirstStep: currentStepId === 0,
    isLastStep: currentStepId === steps.length - 1,
  }
}
