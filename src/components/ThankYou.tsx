import ThankYouIcon from '../assets/icon-thank-you.svg'

export const ThankYou = () => {
  return (
    <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col items-center text-center w-full'>
      <img src={ThankYouIcon} alt='Thank You' />
      <h1 className='mt-9 text-2xl lg:text-3xl font-bold text-primary-marine-blue'>
        Thank you!
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 lg:mt-2.5'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  )
}
