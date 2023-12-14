import React from 'react'

export default function Form({cardData}) {

    const { cardValues, setCardValues} = cardData
      const handleInputChange = (inputName, value) => {
        let updatedValue = value;
    
        if (inputName === 'name') {
          updatedValue = updatedValue.replace(/[^a-zA-Z\s]/g, '');
        }
    
        if (inputName === 'cardNumber') {
          updatedValue = updatedValue.replace(/\D/g, '').slice(0, 16);
    
          updatedValue = updatedValue.replace(/(\d{4})/g, '$1 ').trim();
        }
    
        if (inputName === 'MM' || inputName === 'YY') {
          updatedValue = updatedValue.replace(/\D/g, '').slice(0, 2);
        }
    
        if (inputName === 'CVC') {
          updatedValue = updatedValue.replace(/\D/g, '').slice(0, 3);
        }
    
        setCardValues({
          ...cardValues,
          [inputName]: updatedValue,
        });
      };
    
      function handleSubmit(e) {
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }
    
  return (
    <>
      <form method="post" onSubmit={handleSubmit} className="flex">
        <label>
          Cardholder Name
          <br />
          <input
            name="name"
            type="text"
            value={cardValues.name}
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </label>
        <label>
          Card Number
          <br />
          <input
            name="cardNumber"
            type="text"
            value={cardValues.cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          />
        </label>
        <label>
          Exp. Date (MM/YY)
          <br />
          <input
            name="MM"
            type="text"
            value={cardValues.MM}
            placeholder="MM"
            onChange={(e) => handleInputChange('MM', e.target.value)}
          />
          <input
            name="YY"
            type="text"
            value={cardValues.YY}
            placeholder="YY"
            onChange={(e) => handleInputChange('YY', e.target.value)}
          />
        </label>
        <label>
          CVC
          <input name="CVC"
            type="text"
            value={cardValues.CVC}
            onChange={(e) => handleInputChange('CVC', e.target.value)}
            placeholder='e.g. 123'
          />
        </label>
        <button type="submit">Confirm</button>
      </form>
    ;
  
  
    </>
  )
}
