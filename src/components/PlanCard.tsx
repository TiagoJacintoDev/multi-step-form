import { FormData, PlanTypes } from '../App'
import { upperFirst } from 'lodash'

type Props = PlanTypes[0] & {
  isSelected: boolean
  handleClick: () => void
  planDuration: FormData['planDuration']
  yearlyFreeMonths: number
}

export const PlanCard = ({
  handleClick,
  image,
  isSelected,
  name,
  planDuration,
  pricePerMonth,
  yearlyFreeMonths,
}: Props) => {
  return (
    <button
      className={`${
        isSelected ? 'bg-neutral-magnolia border-primary-purplish-blue' : ''
      } p-3.5 md:p-4 w-full max-md:flex items-center gap-5 md:w-1/3 text-left border rounded-lg`}
      type='button'
      onClick={handleClick}
    >
      <img className='mt-1' src={image} alt={`${name} plan`} />
      <div>
        <p className='md:mt-9 text-primary-marine-blue font-bold'>
          {upperFirst(name)}
        </p>
        <p className='text-neutral-cool-gray md:mt-1'>
          $
          {planDuration === 'monthly'
            ? pricePerMonth
            : pricePerMonth * (12 - yearlyFreeMonths)}
          /{planDuration === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
      {planDuration === 'yearly' && (
        <p className='text-primary-marine-blue text-sm font-medium md:mt-0.5 ml-auto'>
          {yearlyFreeMonths} months free
        </p>
      )}
    </button>
  )
}
