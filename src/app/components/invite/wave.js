const Wave = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 150'>
    <defs>
      <filter id='shadow' x='-20%' y='-20%' width='140%' height='140%'>
        <feGaussianBlur in='SourceAlpha' stdDeviation='6' />
        <feOffset dx='5' dy='-5' result='offsetblur' />
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
      d='M1,150 C800,120 800,80 1440,40'
      filter='url(#shadow)'
    ></path>
  </svg>
)

export default Wave
