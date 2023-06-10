import React from 'react'
import {
  Header, 
  Transactions, 
  Footer, 
  Welcome, 
  Services, 
  Loader
} from './components'

const App = () => {
  return (
    <>
      <div className='gradient-bg-welcome'>
        <Header />
        <Welcome />
      </div>
      <div className='gradient-bg-services'>
        <Services  />
      </div>
      <div className='gradient-bg-transactions'>
        <Transactions />
      </div>
      <div className='gradient-bg-footer'>
        <Footer />
      </div>
    </>
  )
}

export default App