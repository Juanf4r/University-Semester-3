import { useEffect, useState } from "react";

const Contador = () => {
    const [contador, contadorSuma,] = useState(0);
    const [status, setStatus] = useState('detener');

    const sumarMas = () => {
        setStatus('sumar+');
    };
    const sumar = () => {
        setStatus('sumar');
    };
    const suma = () => {
        setStatus('suma');
    };
    const resta = () => {
        setStatus('resta');
    };
    const restar = () => {
        setStatus('restar');
    };
    const restarMas = () => {
        setStatus('restar+');
    };
    const resetear = () => {
        setStatus('resetear');
    };

    useEffect(() => {
    if(status == 'sumar+') {
        contadorSuma((contador) => contador + 100 );
        setStatus('detener');
    }    
    if(status == 'sumar') {
        contadorSuma((contador) => contador + 1 );
        setStatus('detener');
    }
    if(status == 'suma') {
        contadorSuma((contador) => contador + 10 );
        setStatus('detener');
    }
    if(status == 'resta') {
        contadorSuma((contador) => contador - 1 );
        setStatus('detener');
    }
    if(status == 'restar') {
        contadorSuma((contador) => contador - 10 );
        setStatus('detener');
    }
    if(status == 'restar+') {
        contadorSuma((contador) => contador - 100 );
        setStatus('detener');
    }
    if(status == 'resetear') {
        contadorSuma((0))
        setStatus('detener');
    }
    })

return (
    <div>
        <h1 className="">CONTADOR</h1>
        <div className="contador">
            {contador}
        </div>
        <br />
        <button onClick={restarMas}>-100</button>
        <button onClick={restar}>-10</button>
        <button onClick={resta}>-1</button>
        <button onClick={sumar}>+1</button>
        <button onClick={suma}>+10</button>
        <button onClick={sumarMas}>+100</button><br/>
        <button onClick={resetear}>Reinicio</button>
    </div>
    );
};

export default Contador ;