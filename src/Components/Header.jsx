import React from 'react'
import Logo from '../assests/3sigma-logo.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-black text-2xl sm:text-3xl not-italic font-normal'>Magnabox Private limited</h1>
      <img src={Logo} alt="3sigma" loading='lazy' />
    </div>
  )
}

export default Header
