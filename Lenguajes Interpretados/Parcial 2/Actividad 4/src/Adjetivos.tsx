import { useEffect, useState } from "react";

type Props = { 
    name : string,
    adjective : string;
}

const Adjetivos = (props:Props ) => 
{
    const {name, adjective} = props
    const [arreglo,setArreglo] = useState([adjective]); 
    const [value, setValue] = useState('');

    return(
    <div>
        <h1>{name} es {arreglo.join(", ")}</h1>
        <input type="text"value={value}
        onChange={(e) => setValue([e.target.value])}
        />
        <button  onClick={() => 
        {
            if(value){
                setArreglo([arreglo, value]);
            }
        }}>Añadir</button>
    </div>);
};

export default Adjetivos ;