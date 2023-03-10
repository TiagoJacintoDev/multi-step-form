import { AddOnTypes, FormData } from '../App'
import Checkbox from '../assets/icon-checkmark.svg'

type Props = AddOnTypes[0] & {
  isSelected: boolean
  handleClick: () => void
  planDuration: FormData['planDuration']
  yearlyFreeMonths: number
}

export const AddOnCard = ({
  description,
  handleClick,
  isSelected,
  name,
  planDuration,
  pricePerMonth,
  yearlyFreeMonths,
}: Props) => {
  return (
    <button
      className={`${
        isSelected
          ? 'bg-neutral-magnolia border-primary-purplish-blue'
          : 'hover:border-primary-purplish-blue'
      } flex w-full justify-between items-center py-3 px-4 md:py-4 md:px-6 text-left border rounded-lg`}
      type='button'
      onClick={handleClick}
    >
      <div className='flex items-center gap-3.5 md:gap-6'>
        <div
          className={`${
            isSelected
              ? 'bg-primary-purplish-blue'
              : 'border border-neutral-light-gray'
          } h-5 w-5 rounded-md flex items-center justify-center`}
        >
          {isSelected && <img src={Checkbox} alt='checkbox' />}
        </div>
        <div>
          <p className='font-bold text-primary-marine-blue'>{name}</p>
          <p className='text-neutral-cool-gray max-md:text-sm'>{description}</p>
        </div>
      </div>
      <p className='text-primary-purplish-blue max-md:text-sm'>
        +$
        {planDuration === 'monthly'
          ? pricePerMonth
          : pricePerMonth * (12 - yearlyFreeMonths)}
        /{planDuration === 'monthly' ? 'mo' : 'yr'}
      </p>
    </button>
  )
}
