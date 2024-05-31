import { useContext, useEffect, useState } from "react";
import CalcCostoContext from "./context/CalcCostContext";

export const TaxationCalc = ({ receiveCompra }) => {
  const value = useContext(CalcCostoContext);

  const [ipiPercent, setIpiPercent] = useState("");
  const [frightPercent, setFrightPercent] = useState("");
  const [icmsPercent, setIcmsPercent] = useState("");
  const [reductionPercent, setReductionPercent] = useState("");
  const [pisConfinsPercent, setPisConfinsPercent] = useState("");
  const [retencaoPercent, setRetencaoPercent] = useState("");
  const [ipiValue, setIpiValue] = useState(0);
  const [frightValue, setFrightValue] = useState(0);
  const [icmsValue, setIcmsValue] = useState(0);
  const [reductionValue, setReductionValue] = useState(0);
  const [pisConfinsValue, setPisConfinsValue] = useState(0);
  const [retencaoValue, setRetencaoValue] = useState(0);

  useEffect(() => {
    const ipiAmount = calcTax(receiveCompra, ipiPercent);
    const frightAmount = calcTax(receiveCompra, frightPercent);
    const icmsAmount = calcTax(receiveCompra, icmsPercent);
    const pisConfinsAmount = calcTax(receiveCompra, pisConfinsPercent);
    const retencaoAmount = calcTax(receiveCompra, retencaoPercent);
    setIpiValue(ipiAmount);
    setFrightValue(frightAmount);
    setIcmsValue(icmsAmount);
    setPisConfinsValue(pisConfinsAmount);
    setRetencaoValue(retencaoAmount);
  }, [
    receiveCompra,
    ipiPercent,
    frightPercent,
    icmsPercent,
    reductionPercent,
    pisConfinsPercent,
    retencaoPercent,
    reductionValue,
    icmsValue,
    pisConfinsValue,
    retencaoValue,
    value,
  ]);

  const handleChangeIpiPercent = (e) => {
    setIpiPercent(e.target.value);
  };

  const handleChangeFrightPercent = (e) => {
    setFrightPercent(e.target.value);
  };

  const handleChangeIcmsPercent = (e) => {
    const percent = e.target.value;
    setIcmsPercent(percent);
    setIcmsValue(calcTax(receiveCompra, percent));
    setReductionValue(
      calcDiscount(calcTax(receiveCompra, percent), reductionPercent)
    );
  };

  const handleChangeReductionPercent = (e) => {
    const percent = e.target.value;
    setReductionPercent(percent);
    setReductionValue(calcDiscount(icmsValue, percent));
  };

  const handleChangePisConfinsPercent = (e) => {
    setPisConfinsPercent(e.target.value);
  };

  const handleChangeRetencaoPercent = (e) => {
    setRetencaoPercent(e.target.value);
  };

  const calcTax = (baseValue, percent) => {
    const base = Number(baseValue);
    const ipiPercentage = Number(percent);

    if (isNaN(base) || isNaN(ipiPercentage)) {
      return 0;
    }
    const calc = (base * ipiPercentage) / 100;
    return calc;
  };

  const calcDiscount = (originalValue, percentDiscount) => {
    const value = Number(originalValue);
    const percent = Number(percentDiscount);

    if (isNaN(value) || isNaN(percent)) {
      return 0;
    }

    return value - (value * percent) / 100;
  };

  value.calcCustoDeCompra = () => {
    const cost = Number(receiveCompra) - reductionValue - pisConfinsValue + retencaoValue;
    return cost;
  };

  value.calcCustoDeCompra();

  return (
    <div>
      <h1>Calculo de taxas</h1>
      <div>
        <div>
          <div
            style={{ width: "100%", textAlign: "center", border: "1px solid" }}
          >
            <h2>Compra</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              Tributação
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              Percentual
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>Valor</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>IPI</div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={ipiPercent}
                onChange={handleChangeIpiPercent}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {ipiValue} </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>Frete</div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={frightPercent}
                style={{ width: "100%" }}
                onChange={handleChangeFrightPercent}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {frightValue}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>Icms</div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={icmsPercent}
                style={{ width: "100%" }}
                onChange={handleChangeIcmsPercent}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {icmsValue}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>Redução</div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={reductionPercent}
                style={{ width: "100%" }}
                onChange={handleChangeReductionPercent}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {reductionValue}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              PIS/CONFINS
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={pisConfinsPercent}
                style={{ width: "100%" }}
                onChange={handleChangePisConfinsPercent}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {pisConfinsValue}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ border: "1px solid", width: "33.3%" }}>Retenção</div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <input
                type="text"
                value={retencaoPercent}
                style={{ width: "100%" }}
                onChange={handleChangeRetencaoPercent}
              />
            </div>
            <div style={{ border: "1px solid", width: "33.3%" }}>
              <div>R$ {retencaoValue}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
