import './App.css'
import CardVorher from './components/CardVorher'
import Vorgabe from './components/Vorgabe'

type Card = {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  label: string;
};


function App() {

  return (
    <>
    <Vorgabe label="Test" />
    <br />
    <br />
    <CardVorher title="Willkommen!"
  description="Dies ist eine einfache, wiederverwendbare Card-Komponente in React + TypeScript."
  buttonLabel="Mehr erfahren"
  onButtonClick={() => alert("Button geklickt!")}/>
    </>
  )
}

export default App
