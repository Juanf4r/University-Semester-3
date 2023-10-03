import { useEffect, useState } from 'react'
import data_people from './data/data'

const Slider = () => {
    const [index, setindex] = useState(0)
    const [people, setpeople] = useState(data_people)

    useEffect(() => {
        let lastIndex = people.length - 1;
        if(index < 0)
        {
            setindex(lastIndex)
        }
        if(index > lastIndex)
        {
            setindex(0);
        }
    
    }, [index,people])

    useEffect(() => {
        let rutina = setTimeout(()=>{setindex(index + 1)},5000);
        return () => {
        clearTimeout(rutina);
        }
    }, [index])
    

    return (
        <section>
            <h1 className="Personajes">Personajes</h1>
            <div className="center">
                    {
                        people.map((persona,persona_index) =>
                        {
                            let claseDeEstilo = 'next-slide';
                            if(persona_index === index)
                            {
                                claseDeEstilo = 'active-slide';
                            }
                            if(persona_index === index - 1 || (index === 0 && persona_index === people.length - 1))
                            {
                                claseDeEstilo = 'last-slide';
                            }
                            return <article key={persona.id} className={`flex vertical ${claseDeEstilo}`}>
                            <img src = {persona.image} className = "img-personaje" ></img>
                            <h2 className="nombre">{persona.name}</h2>
                            <h3 className="Serie">{persona.title}</h3>
                            <p>{persona.quote}</p>
                        </article>
                        }) 
                    }
                <button className='prev' onClick={()=>setindex(index - 1)}>{"<"}</button>
                <button className='next' onClick={()=>setindex(index + 1)}>{">"}</button>
            </div>
        </section>
    )
}

export default Slider