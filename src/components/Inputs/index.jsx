import './Input.css';

export const Inputs = ({ text, compra, onCompraChange }) => {
  <>
    <label>{ text }</label>
    <div className="base-input">
      R$
      <input 
        type="text" 
        value={compra}
        onChange={onCompraChange}
      />
    </div>
  </>
}