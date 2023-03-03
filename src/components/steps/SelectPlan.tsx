import { FormData, PlanTypes } from '../../App'
import { Toggle } from '../Toggle'
import { PlanCard } from '../PlanCard'

type Plan = Pick<FormData, 'planType' | 'planDuration'>

type Props = Plan & {
  planTypes: PlanTypes
  updateField: (field: keyof Plan, value: any) => void
}

export const SelectPlan = ({
  planTypes,
  planType,
  planDuration,
  updateField,
}: Props) => {
  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold text-primary-marine-blue'>
        Select your plan
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 lg:mt-2.5'>
        You have the option of monthly or yearly billing.
      </h2>
      <div className='mt-5 lg:mt-9 flex max-lg:flex-col gap-3 lg:gap-4 items-center justify-between'>
        {planTypes.map(currentType => (
          <PlanCard
            {...currentType}
            yearlyFreeMonths={2}
            key={currentType.name}
            isSelected={currentType.name === planType.name}
            handleClick={() => updateField('planType', currentType)}
            planDuration={planDuration}
          />
        ))}
      </div>
      <div className='lg:absolute top-80 mt-6 lg:mt-8 w-full gap-6 bg-neutral-magnolia rounded-lg p-2.5 lg:p-3 flex items-center justify-center'>
        <span
          className={`${
            planDuration === 'monthly'
              ? 'text-primary-marine-blue'
              : 'text-neutral-cool-gray'
          } font-bold`}
        >
          Monthly
        </span>
        <Toggle
          value={planDuration}
          values={['monthly', 'yearly']}
          handleClick={() =>
            updateField(
              'planDuration',
              planDuration === 'monthly' ? 'yearly' : 'monthly'
            )
          }
        />
        <span
          className={`${
            planDuration === 'yearly'
              ? 'text-primary-marine-blue font-bold'
              : 'text-neutral-cool-gray'
          } font-bold`}
        >
          Yearly
        </span>
      </div>
    </>
  )
}
