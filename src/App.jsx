import FrontCard from "./component/frontCard.jsx";
import BackCard from './component/backCard.jsx'

import Form from './component/form.jsx'
import { useState } from "react";

function CompleteForm() {
  return <p> Thank you! We've added your card details Continue</p>;
}

export default function App() {
  const [cardValues, setCardValues] = useState({
    name: '',
    cardNumber: '',
    MM: '',
    YY: '',
    CVC: ''
  });

  return (
    <>
      <header className="header"></header>
      <section className="cards">
        <FrontCard cardData={{cardValues}} />
        <BackCard  cardData={{cardValues}}/>
      </section>
      <main>
     <Form cardData={{cardValues, setCardValues}}/>
      </main>
    </>
  );
}
