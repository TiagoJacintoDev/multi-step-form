import { upperFirst } from 'lodash'
import { FormData } from '../../App'

type FormValues = Pick<FormData, 'planType' | 'planDuration' | 'selectedAddOns'>

type Props = FormValues & {
  yearlyFreeMonths: number
  resetStep: () => void
}

export const Summary = ({
  resetStep,
  planDuration,
  yearlyFreeMonths,
  planType,
  selectedAddOns,
}: Props) => {
  const addOnsTotalMonthlyPrice = selectedAddOns.reduce(
    (total, addOn) => total + addOn.pricePerMonth,
    0
  )

  const totalMonthlyPrice = planType.pricePerMonth + addOnsTotalMonthlyPrice

  const totalPrice =
    planDuration === 'monthly'
      ? totalMonthlyPrice
      : totalMonthlyPrice * (12 - yearlyFreeMonths)

  return (
    <>
      <h1 className='text-2xl md:text-3xl font-bold text-primary-marine-blue'>
        Finishing up
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 md:mt-2.5'>
        Double-check everything looks OK before confirming.
      </h2>
      <div className='mt-6 md:mt-8 bg-neutral-magnolia rounded-md py-3.5 px-6'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-primary-marine-blue font-bold'>
              {upperFirst(planType.name)} ({upperFirst(planDuration)})
            </h3>
            <button
              type='button'
              className='text-neutral-cool-gray text-sm underline underline-offset-[3.33px] mt-1'
              onClick={resetStep}
            >
              Change
            </button>
          </div>
          <span className='font-bold text-primary-marine-blue'>
            $
            {planDuration === 'monthly'
              ? planType.pricePerMonth
              : planType.pricePerMonth * (12 - yearlyFreeMonths)}
            /{planDuration === 'monthly' ? 'mo' : 'yr'}
          </span>
        </div>
        {selectedAddOns.length > 0 && <hr className='mt-3.5 md:mt-6 mb-3.5' />}
        {selectedAddOns.map(addOn => (
          <div className='mt-2 flex justify-between items-center'>
            <span className='text-neutral-cool-gray text-sm'>{addOn.name}</span>
            <span className='text-primary-marine-blue text-sm font-medium'>
              +$
              {planDuration === 'monthly'
                ? addOn.pricePerMonth
                : addOn.pricePerMonth * (12 - yearlyFreeMonths)}
              /{planDuration === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        ))}
      </div>
      <div className='flex justify-between items-center mt-5 px-6'>
        <span className='text-sm text-neutral-cool-gray'>
          Total (per {planDuration === 'monthly' ? 'month' : 'year'})
        </span>
        <span className='text-primary-purplish-blue text-xl font-bold'>
          ${totalPrice}/{planDuration === 'monthly' ? 'mo' : 'yr'}
        </span>
      </div>
    </>
  )
}
