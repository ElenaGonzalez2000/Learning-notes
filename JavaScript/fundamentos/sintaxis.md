# Sintaxis basica en JavaScript

Este archivo cubre la sintaxis mas basica de JS. Es ideal para comenzar a familiarizarse con la esctructura del lenguaje y sus particularidades.

---

## 📌 Comentarios

```javascript
// Comentarios de una sola línea

/*
Comentario de varias líneas
*/
```

---

## 🔠 Identificadores y nombres de variables

- Pueden contener letras, numeros, `$` y `_`
- **No pueden comenzar con numeros**
- JS es sensible a mayúsculas y minúsculas
- Se suele usar **camelCase** para nombrar

```javascript
let miVariable = 5;
let MiVariable = 10; //Son distintas
```

---

## 📦 Tipos de datos básicos

```javascript
let numeros = 10; // Number
let texto = "Hola mundo"; // String
let booleano = true; // Boolean
let indefenido; // undefined
let nulo = null; // null
```

---

## 🎯 Operadores comunes

```javascript
// Aritmeticos
let suma = 5 + 2;
let resta = 4 - 2;
let mult = 3 * 3;
let div = 6 / 2;
let resto = 10 % 3;

// Asignación
let x = 5;
x += 2; //equivale a: x = x + 2

// Comparación
5 == "5"; // true (compara valor, no tipo)
5 === "5"; // false (compara valor y tipo)
5 != 4; // true
5 !== "5"; // true

// Logicos
true && false; // false
true || false; // true
!true; // false
```

---

## 🧵 Template Strings (Strings con variables)

```javascript
let nombre = "Elena";
let saludo = `Hola, mi nombre es ${nombre}`;
console.log(saludo); // Hola, mi nombre es Elena
```

---

## 📥 Entrada y salida

```javascript
// Mostrar mensajes
console.log("Hola desde la consola");

// Entrada (en el navegador)
let nombre = prompt("¿Como te llamas?");
// Salida:
alert(`Hola, ${nombre}`);
```

---

## ✍🏻 Notaciones

En JavaScript se utilizan diferentes **simbolos o notaciones** que tiene funciones especificas segun el contexto. Es importante conocerlas para leer y escribir codigo de forma clara.

---

### `;` Punto y coma

- Delimita el final de una instrucción.
- **No es obligatorio**, pero es una buena ptractica usarlo para evitar errores de interpretación del código.

```javascript
const a = 3;
console.log(a);
```

---

### `:` Dos puntos

- Se usa al asignar valores a las claves dentro de un objeto.

```javascript
const celular = {
  color: "negro",
  "marca actual": "Samsung",
};
```

---

### `.` Punto (acceso por punto)

- Se usa para acceder a las propiedades de un objeto si el nombre de la propiedad es valido como identificador(sin espacion, simbolos, etc).

```javascript
console.log(celular.color); // "negro"
```

---

### `[]` Corchetes

- Se usan para:

  - Definir arreglos (arrays)
  - Acceder a elementos por índice en arrays
  - Acceder a propiedades de objetos con nombres complejos (como strings con espacios)

```javascript
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"

concole.log(celular["marca actual"]); // "Samsung"
```

---

### `()` Parentesis

- Se usa para:
  - Ejecutar funciones
  - Definir parametros
  - Agrupar condiciones o expresiones

```javascript
funtion saludar(nombre){
    return `Hola, ${nombre}`
}

console.log(saludar("Elena")); // Hola, Elena
```

---

### `{}` Llaves

- Se usan para:
  - Definir objetos
  - Agrupar instrucciones dentro de funciones o estructuras de control (`if`,`for`, etc.)

```javascript
const persona = {
  nombre: "Elena",
  edad: 24,
};

if (persona.edad >= 18) {
  console.log("Es mayor de edad");
}
```
