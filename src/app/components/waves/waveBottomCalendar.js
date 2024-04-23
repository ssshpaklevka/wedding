const WaveBottomCalendar = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 150'>
    <defs>
      <filter id='shadowBottom' x='-20%' y='-20%' width='140%' height='140%'>
        <feGaussianBlur in='SourceAlpha' stdDeviation='6' />
        <feOffset dx='5' dy='5' result='offsetblur' />
        <feComponentTransfer>
          <feFuncA type='linear' slope='0.3' />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
    </defs>
    <path
      fill='none'
      stroke='#e4c868'
      strokeWidth='7'
      d='M1,6 C1000,120 800,100 1440,100'
      filter='url(#shadowBottom)'
    ></path>
  </svg>
)

export default WaveBottomCalendar
