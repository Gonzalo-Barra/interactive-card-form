import FrontCard from "./component/frontCard.jsx";
import "./App.css";
import Form from './component/form.jsx'


function CompleteForm() {
  return <p> Thank you! We've added your card details Continue</p>;
}

export default function App() {
  return (
    <>
      <header className="header"></header>
      <section className="cards">
        <FrontCard />
      </section>
      <main>
     <Form />
      </main>
    </>
  );
}
