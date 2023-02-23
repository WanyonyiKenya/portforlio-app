import React from 'react'
import CV from '../../Assets/bw.pdf'

const Extra = () => {
  return (
    <div className='extra'> 
        <a href={CV} download className='btn'>Download Cv</a>
        <a href='#contact' className='btn btn-primary'> CHAT</a>
    </div>
  )
}

export default Extra