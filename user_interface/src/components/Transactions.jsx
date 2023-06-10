import React from 'react'
import Wrapper from '../hoc/Wrapper'

const Transactions = () => {
  return (
    <section className='text-white min-h-screen'>
      <h3>Transactions</h3>
    </section>
  )
}

export default Wrapper(Transactions, "transactions")