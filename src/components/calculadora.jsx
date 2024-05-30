import { useState } from "react";

export function Calculadora() {
    const [totales, setTotales] = useState([]);
    const [bgContainer, setBgContainer] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        const num1 = e.target.num1.value
        const num2 = e.target.num2.value
        const operacion = e.target.operacion.value
        let resultado = 0
        console.log(num1, operacion, num2);
        switch (operacion) {
            case "+": resultado = parseInt(num1) + parseInt(num2); break;
            case "-": resultado = parseInt(num1) - parseInt(num2); break;
            case "*": resultado = parseInt(num1) * parseInt(num2); break;
            case "/": resultado = parseInt(num1) / parseInt(num2); break;
        }
        resultado = resultado * 1.19
        if (resultado > 50000) {
            setBgContainer('green');
        } else {
            setBgContainer('orange');
        }
        setTotales([...totales, Number.parseFloat(resultado).toFixed(2)])
    }
    return (
        <div>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className="operaciones">
                    <input type="text" /* onChange={handleChange} */ name="num1" />
                    <select name="operacion" id="operacion">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input type="text" /* onChange={handleChange} */ name="num2" />
                </div>
                <button>=</button>
                <div className="bg-container" style={{ backgroundColor: bgContainer, padding: ".5rem", fontSize: "1.5rem" }}>
                    Total: {totales[totales.length - 1]}
                </div>
            </form>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem"}}>
                <h3>Resultados:</h3>
                {totales.map((total, idx) => (
                    <span key={idx}>{total}</span>
                ))}
            </div>
        </div>
    );
}