import React from 'react'
import Wrapper from '../hoc/Wrapper'

const Footer = () => {
  return (
    <footer className='text-white'>
      <h3>Footer</h3>
    </footer>
  )
}

export default Wrapper(Footer, "footer")