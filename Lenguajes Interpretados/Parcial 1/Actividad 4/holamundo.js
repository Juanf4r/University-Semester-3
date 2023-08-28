function agregarPersona() 
{
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var direccion = document.getElementById("direccion").value;
    var esVerdadero = document.getElementById("verdadero").checked;

    var personas = [];

    var persona = 
    {
      nombre: nombre,
      edad: edad,
      direccion: direccion,
      esVerdadero: esVerdadero
    };

    if (edad >= 18) 
    {
      persona.mayoriaEdad = true;
    } else 
    {
      persona.mayoriaEdad = false;
    }

    personas.push(persona);
    
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML += "Nombre: " + persona.nombre + "";
    divResultado.innerHTML += " Edad: " + persona.edad + "";
    divResultado.innerHTML += " Dirección: " + persona.direccion + "";
    divResultado.innerHTML += " ¿Te gusta el Jaztea?: " + persona.esVerdadero + "";
    divResultado.innerHTML += " ¿Mayor de edad?: " + persona.mayoriaEdad + "<br>";

    console.log(personas);
}