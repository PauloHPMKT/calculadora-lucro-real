import './InputValues.css';

export const InputValues = ({ onCompraChange, compra }) => {
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
                <input type="text" />
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
