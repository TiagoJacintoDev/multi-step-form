type Props = {
  value: string
  values: [string, string]
  handleClick: () => void
}

export const Toggle = ({ value, values, handleClick }: Props) => {
  return (
    <button
      className='relative flex items-center rounded-full w-10 h-5 bg-primary-marine-blue'
      onClick={handleClick}
      type='button'
    >
      <div
        className={`bg-white rounded-full h-3 w-3 absolute ${
          value === values[0] ? 'left-1' : 'right-1'
        }`}
      />
    </button>
  )
}
