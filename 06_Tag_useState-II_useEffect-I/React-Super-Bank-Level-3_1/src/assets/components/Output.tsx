import { useState } from "react"
import { CreditCard } from "react-kawaii"

const Output = () => {
    const [amount, setAmount] = useState(0)
    const [inputValue, setInputValue] =useState(0)

    

    const minusAmount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setAmount(amount + inputValue)
    }


    const plusAmount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setAmount(amount - inputValue)
    }

    const changeMood = () => {
        if(amount <= (-2000)) {
            return "shocked"
        } else if(amount < 0){
            return "sad"
        }  else if(amount>=2000) {
            return "blissful"
        } else {
            return "happy"
        }
    }

  return (
    <div className="output">
      <CreditCard size={300} mood={changeMood()} color="#FDA7DC" />

      {/* <CreditCard size={300} mood={amount >0 ? "happy" : "sad"} color="#FDA7DC" /> */}
      <h1>Super Bank</h1>
      <div className="box">
        <h4>Dein Girokonto</h4>
        <p>{amount}€</p>
        <form>
            <input onChange={(event)=> setInputValue(Number(event.target.value))} type="number" name="money" id="money" placeholder="Gib einen Geldbetrag ein"/>
            <div className="buttons">
                <button onClick={minusAmount}>Einzahlen</button>
                <button onClick={plusAmount}>Auszahlen</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Output
