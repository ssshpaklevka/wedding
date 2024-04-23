const Wave = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 10 1440 150'
  >
    <path
      fill='none'
      stroke='gold'
      strokeWidth='7'
      d='M1,150 C800,120 800,80 1440,40'
    ></path>
  </svg>
)

export default Wave
