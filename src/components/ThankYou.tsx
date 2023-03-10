import ThankYouIcon from '../assets/icon-thank-you.svg'

export const ThankYou = () => {
  return (
    <div className='md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center text-center w-full'>
      <img src={ThankYouIcon} alt='Thank You' />
      <h1 className='mt-9 text-2xl md:text-3xl font-bold text-primary-marine-blue'>
        Thank you!
      </h1>
      <h2 className='text-neutral-cool-gray mt-1 md:mt-2.5'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  )
}
