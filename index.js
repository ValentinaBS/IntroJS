// 1
let miNombre = "Valentina";
// 2
let miApellido = "Sánchez";
// 3
let miEdad = 19;
// 4
let miMascota = "Inu";
// 5
let edadMascota = 8;
// 6
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);
// 7
let nombreCompleto = `${miNombre} ${miApellido}`;
// 8
let textoPresentacion = `Mi nombre es ${nombreCompleto}, tengo ${miEdad} años y mi mascota se llama ${miMascota} (tiene ${edadMascota} años)`;
// 9
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
// 10
let alumno = {
    nombre: "Valentina",
    apellido: "Sánchez",
    edad: 19,
    diasEstudio: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    estaEstudiando: true
};
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.diasEstudio)
console.log(alumno.estaEstudiando)
// 11
let mascota = {
    nombre: "Inu",
    raza: "Callejera",
    edad: 8,
    juguetesFavoritos: ["Pelota", "Hueso", "Peluche"],
    estaVacunada: true
};
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.edad)
console.log(mascota.juguetesFavoritos)
console.log(mascota.estaVacunada)
// 12
let frutas = ["Banana", "Manzana", "Tomate", "Frutilla", "Durazno"];
// 14
let numeros = [1, 2, 4, 8, 16];
console.log(numeros, numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])
// 15
let familia = [
    {
        integrante: "Papá",
        edad: 56,
        nombre: "Pablo"
    },
    {
        integrante: "Mamá",
        edad: 52,
        nombre: "Ana"
    },
    {
        integrante: "Hijo",
        edad: 20,
        nombre: "Juan"
    },
    {
        integrante: "Hija",
        edad: 23,
        nombre: "Pablo"
    },
    {
        integrante: "Abuelo",
        edad: 86,
        nombre: "Carlos"
    },
];
console.log(familia, familia[0], familia[1], familia[2], familia[3], familia[4])
// 13
let textoAleatorio = `Me gusta comer ${frutas[1]} a las ${numeros[3]} con mi ${familia[4].integrante}`
// 16
let soyMayorDeEdad = Number(prompt("Ingresar edad")) >= 18
console.log("Soy mayor de edad: " + soyMayorDeEdad)
// 17
let miEdadActual = Number(prompt("Ingreso mi edad actual"));
let edadCompaniero = Number(prompt("Ingreso la edad de mi compañero"));
let edadesIguales = miEdadActual === edadCompaniero;
let soyMayor = miEdadActual > edadCompaniero;
let soyMenor = miEdadActual < edadCompaniero;
console.log("Mi edad es igual a la de mi compañero: " + edadesIguales)
console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
console.log("Mi edad es menor a la de mi compañero: " + soyMenor)
// 18
let personaEdad = Number(prompt("Ingresar edad"));
let personaAltura = Number(prompt("Ingresar altura"));
let puedeSubir = personaEdad > 6 && personaAltura >= 120;
console.log("Puede subir a la atracción: " + puedeSubir)
// 19
let pase = prompt("Ingresar pase VIP, NORMAL o LIMITADO");
let saldo = Number(prompt("Ingresar saldo"));
let puedePasar = pase === "VIP" || saldo > 1000
console.log("La persona puede pasar: " + puedePasar)