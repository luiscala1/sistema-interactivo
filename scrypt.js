

const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const edadInput = prompt("Por favor, ingresa tu edad:");
const edad = Number(edadInput);

if (isNaN(edad) || edadInput === "" || edadInput === null) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
} else {
    if (edad < 18) {
        const mensajeMenor = `Hola ${nombreUsuario}, eres menor de edad.`;
        alert(mensajeMenor);
        console.log(mensajeMenor);
    } else {
        const mensajeMayor = `Hola ${nombreUsuario}, eres mayor de edad.`;
        alert(mensajeMayor);
        console.log(mensajeMayor);
    }
}

const productos = {
    prod001: { id: "P001", nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    prod002: { id: "P002", nombre: "Camiseta", precio: 25, categoria: "Ropa" },
    prod003: { id: "P003", nombre: "Cafetera", precio: 50, categoria: "Electrodomésticos" },
    prod004: { id: "P004", nombre: "", precio: -10, categoria: "Error" } // Producto inválido para prueba
};


function validarProductos(objProductos) {
    console.log("\n--- VALIDACIÓN DE PRODUCTOS ---");
    const productosValidos = {};

    for (const clave in objProductos) {
        const p = objProductos[clave];
        // Valida que existan las propiedades y tengan tipos/valores correctos
        if (p.id && typeof p.nombre === "string" && p.nombre.trim() !== "" && typeof p.precio === "number" && p.precio > 0) {
            productosValidos[clave] = p;
            console.log(` Producto ${p.id} (${p.nombre}) es válido.`);
        } else {
            console.error(` Producto inválido detectado en clave '${clave}':`, p);
        }
    }
    return productosValidos;
}


const productosValidados = validarProductos(productos);



console.log("\n--- TRABAJANDO CON SET ---");


const miSet = new Set([10, 20, 10, 30, 40, 20, 50]);
console.log("Contenido inicial del Set (sin duplicados):", miSet);


miSet.add(60);
console.log("Set después de agregar el 60:", miSet);

// Verificar si existe un número específico
const existeTreinta = miSet.has(30);
console.log(`¿El número 30 existe en el Set?: ${existeTreinta}`);


miSet.delete(20);
console.log("Set después de eliminar el 20:", miSet);


const miMap = new Map();

// Relacionar categoría (clave) con el nombre del producto (valor) dinámicamente
for (const clave in productosValidados) {
    const p = productosValidados[clave];
    miMap.set(p.categoria, p.nombre);
}


console.log("\n--- PRUEBAS FINALES E ITERACIONES ---");

// 1. Iterar Objeto con for...in 
console.log("-> Listando objeto de productos con for...in:");
for (const clave in productosValidados) {
    console.log(`Clave: ${clave} | ID: ${productosValidados[clave].id} | Nombre: ${productosValidados[clave].nombre} | Precio: $${productosValidados[clave].precio}`);
}

// 2. Iterar Set con for...of (Lista de elementos únicos)
console.log("\n-> Recorriendo el Set con for...of:");
for (const valor of miSet) {
    console.log(`Valor del Set: ${valor}`);
}

// 3. Iterar Map con forEach() (Categorías y nombres de productos)
console.log("\n-> Recorriendo el Map con forEach():");
miMap.forEach((valorProducto, claveCategoria) => {
    console.log(`Categoría: ${claveCategoria} -> Producto asignado: ${valorProducto}`);
});
