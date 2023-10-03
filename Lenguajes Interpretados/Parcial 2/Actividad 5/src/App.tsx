import React, {useEffect, useState} from "react";
import "./index.css"

interface pokemonItem{
    completed: boolean
    id: number
    title: string
    
}

function App(){
    const [pokemon,setPokemon] = useState(0)

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => response)
        .then((e) => e.json())
        .then(e =>setPokemon(e));
    },[]);

    return(
        <div className="App">
            {
                pokemon.map((pokemon) => (<li>{pokemon.id}</li>))
            }
        </div>
    );
}

export default App;