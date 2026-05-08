

// Solicitamos el nombre y la edad mediante ventanas emergentes
const nombre = prompt("Por favor, ingresa tu nombre:");
const edadInput = prompt("Por favor, ingresa tu edad:");

// Convertimos la entrada a un número para poder validarla
const edad = Number(edadInput);

// Verificamos si la conversión falló (NaN) o si el usuario dejó el campo vacío
if (isNaN(edad) || edadInput === "" || edadInput === null) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {
    
    
    if (edad < 18) {
        // Mensaje para menores de edad
        const mensajeMenor = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        alert(mensajeMenor);
        console.log(mensajeMenor);
    } else {
        // Mensaje para mayores de edad (18 o más)
        const mensajeMayor = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        alert(mensajeMayor);
        console.log(mensajeMayor);
    }
}
