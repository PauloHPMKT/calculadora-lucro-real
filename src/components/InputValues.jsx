import { useContext, useEffect, useState } from 'react';
import CalcCostoContext from './context/CalcCostContext';
import './InputValues.css';

export const InputValues = ({ onCompraChange, compra }) => {
    const [custo, setCusto] = useState(0);
    const value = useContext(CalcCostoContext);

    useEffect(() => {
        setCusto(value.calcCustoDeCompra());
    }, [value])

    return (
        <form className="form-data">
            <label>Produto</label>
            <div className="base-input">
            <span>R$</span>
            <input 
                type="text" 
                value={compra}
                onChange={onCompraChange}
            />
            </div>  
            <hr />
            <div style={{ display: "flex", flexDirection: "column", padding: "5px 10px", border: "1px solid gray", borderRadius: 8 }}>
                <label>Custo de compra R$</label>
                <input 
                    type="text" 
                    value={custo} 
                    onChange={(e) => setCusto(e.target.value)} 
                />
                <label>Custo de venda R$</label>
                <input type="text" />
                <label>Preço venda bruta R$</label>
                <input type="text" />
                <label>Preço Liquido R$</label>
                <input type="text" />
            </div>
        </form>
    );
};
