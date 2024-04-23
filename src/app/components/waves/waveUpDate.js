const WaveUpDate = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1440 150'
    style={{ width: "100vw", height: "auto" }}
  >
    <defs>
      <filter id='shadowUpDate' x='-20%' y='-20%' width='140%' height='140%'>
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
      d='M0,7 C350,110 700,180 1120,80 S1700,-60 1440,1'
      filter='url(#shadowUpDate)'
    ></path>
  </svg>
)

export default WaveUpDate
