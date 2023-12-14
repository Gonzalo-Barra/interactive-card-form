import React from 'react'

export default function backCard({cardData}) {
  const { cardValues } = cardData;

  return (
    <>
        <section className='backCard'>
            {cardValues.cvc==='' ? (<h1>000</h1>):(<h1>{cardValues.cvc}</h1>)}
        </section>
    </>
  )
}

