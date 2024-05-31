import { useState } from 'react';
import CalcCostoContext from './CalcCostContext'; // Import the context

const CalcCostoProvider = ({ children }) => {
  const [receiveCompra, setReceiveCompra] = useState(0);

  const calcCustoDeCompra = () => {
    const cost = Number(receiveCompra);// - reductionValue - pisConfinsValue + retencaoValue;
    console.log('OOOOPA')
    return cost;
  };

  return (
    <CalcCostoContext.Provider value={{ calcCustoDeCompra, receiveCompra, setReceiveCompra }}>
      {children}
    </CalcCostoContext.Provider>
  );
};

export { CalcCostoProvider };
