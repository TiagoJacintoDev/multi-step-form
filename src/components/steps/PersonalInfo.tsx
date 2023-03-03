import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types'
import { Inputs } from '../../App'

type Props = {
  register: UseFormRegister<Inputs>
  errors: FieldErrors<Inputs>
}

export const PersonalInfo = ({ register, errors }: Props) => {
  return (
    <>
      <h1 className='text-2xl lg:text-3xl font-bold text-primary-marine-blue'>
        Personal info
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 lg:mt-3'>
        Please provide your name, email address, and phone number.
      </h2>
      <div className='mt-6 lg:mt-8'>
        <label className='flex flex-col gap-1.5 lg:gap-2' htmlFor='name'>
          <div className='flex justify-between'>
            <span className='text-primary-marine-blue text-sm'>Name</span>
            {errors.name ? (
              <span className='text-primary-strawberry-red font-bold'>
                This field is required
              </span>
            ) : null}
          </div>
          <input
            className={`${
              errors.name ? 'border-primary-strawberry-red' : ''
            } focus:border-primary-purplish-blue border text-primary-marine-blue font-medium outline-none border-neutral-light-gray rounded-md px-4 py-2.5`}
            placeholder='e.g Stephen King'
            autoFocus
            id='name'
            {...register('name', { required: true })}
          />
        </label>
        <label className='flex flex-col gap-1 mt-3.5 lg:mt-5' htmlFor='email'>
          <div className='flex justify-between'>
            <span className='text-primary-marine-blue text-sm'>Email Address</span>
            {errors.email ? (
              <span className='text-primary-strawberry-red font-bold'>
                This field is required
              </span>
            ) : null}
          </div>
          <input
            className={`${
              errors.email ? 'border-primary-strawberry-red' : ''
            } focus:border-primary-purplish-blue border text-primary-marine-blue font-medium outline-none border-neutral-light-gray rounded-md px-4 py-2.5`}
            placeholder='e.g stephenking@lorem.com'
            id='email'
            type='email'
            {...register('email', { required: true })}
          />
        </label>
        <label className='flex flex-col gap-1 mt-3.5 lg:mt-5' htmlFor='phone-number'>
          <div className='flex justify-between'>
            <span className='text-primary-marine-blue text-sm'>Phone Number</span>
            {errors.phoneNumber ? (
              <span className='text-primary-strawberry-red font-bold'>
                This field is required
              </span>
            ) : null}
          </div>
          <input
            className={`${
              errors.phoneNumber ? 'border-primary-strawberry-red' : ''
            } focus:border-primary-purplish-blue border text-primary-marine-blue font-medium outline-none border-neutral-light-gray rounded-md px-4 py-2.5`}
            placeholder='e.g +1 234 567 890'
            id='phone-number'
            {...register('phoneNumber', { required: true })}
          />
        </label>
      </div>
    </>
  )
}
