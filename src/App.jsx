import { useState } from 'react'
import { InputValues } from './components/InputValues'
import { TaxationCalc } from './components/TaxationCalc'
import './App.css'

function App() {  
  const [compra, setCompra] = useState("")


  const handleCompraChange = (e) => {
    const { value } = e.target;
    setCompra(value)
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>Calculadora de Lucros</h1>
        <p>Simplifique o cálculo do Lucro Real e tenha uma compreensão mais clara das finanças da sua empresa.</p>
      </div>

      <div className='content'>
        <InputValues 
          onCompraChange={handleCompraChange} 
          compra={compra}
        />
        <TaxationCalc receiveCompra={compra} />
      </div>
    </div>
  )
}

export default App
