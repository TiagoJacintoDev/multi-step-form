import { AddOnTypes, FormData } from '../../App'
import { AddOnCard } from '../AddOnCard'

type AddOns = Pick<FormData, 'selectedAddOns' | 'planDuration'>

type Props = AddOns & {
  addOns: AddOnTypes
  updateField: (field: keyof AddOns, value: any) => void
}

export const SelectAddOns = ({
  planDuration,
  addOns,
  selectedAddOns,
  updateField,
}: Props) => {
  return (
    <>
      <h1 className='text-2xl md:text-3xl font-bold text-primary-marine-blue'>
        Pick add-ons
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 md:mt-2.5'>
        Add-ons help enhance your gaming experience.
      </h2>
      <div className='flex flex-col gap-4 mt-6 md:mt-8'>
        {addOns.map(addOn => (
          <AddOnCard
            key={addOn.name}
            {...addOn}
            isSelected={selectedAddOns.includes(addOn)}
            planDuration={planDuration}
            yearlyFreeMonths={2}
            handleClick={() =>
              updateField(
                'selectedAddOns',
                selectedAddOns.includes(addOn)
                  ? selectedAddOns.filter(
                      selectedAddOn => selectedAddOn.name !== addOn.name
                    )
                  : [...selectedAddOns, addOn]
              )
            }
          />
        ))}
      </div>
    </>
  )
}
