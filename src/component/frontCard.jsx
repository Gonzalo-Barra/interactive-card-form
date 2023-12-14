import React from "react";

export default function frontCard({ cardData }) {
  const { cardValues } = cardData;
  return (
    <>
      <section className="frontCard">
        {cardValues.name === "" ? (
          <h1>Jane Appleseed</h1>
        ) : (
          <h1>{cardValues.name}</h1>
        )}
        {cardValues.cardNumber === "" ? (
          <h1>0000 0000 0000 0000</h1>
        ) : (
          <h1>{cardValues.cardNumber}</h1>
        )}
        {cardValues.MM === "" ? <h1>00/00</h1> : <h1>{cardValues.MM}</h1>}
        <h1>{cardValues.CVC}</h1>
      </section>
    </>
  );
}
