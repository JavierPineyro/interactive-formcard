import './tickicon.css'

export function TickIcon() {
  return (
    <div className="w4rAnimated_checkmark">
      <svg className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
        <circle
          cx={65.1}
          cy={65.1}
          r={62.1}
          fill="none"
          stroke="none"
          strokeMiterlimit={10}
          strokeWidth={6}
          className="path circle"
        />
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="M100.2 40.2 51.5 88.8 29.8 67.5"
          className="path check"
        />
      </svg>
    </div>
  )
}

export function Eye() {
  return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
  </svg>)
}

export function EyeClosed2() {
  return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-closed" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"></path>
    <path d="M3 15l2.5 -3.8"></path>
    <path d="M21 14.976l-2.492 -3.776"></path>
    <path d="M9 17l.5 -4"></path>
    <path d="M15 17l-.5 -4"></path>
  </svg>)
}
export function EyeClosed() {
  return (<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"></path>
    <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"></path>
    <path d="M3 3l18 18"></path>
  </svg>)
}
