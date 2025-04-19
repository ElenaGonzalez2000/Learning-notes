# Tipos de Datos en JavaScript

JavaScript es un lenguaje **dinamicamente tipado**, lo que significa que no necesitas declarar explicitamente el tipo de una variable. Los valores pueden cambiar de tipo durante la ejecucion.

## 🧱 Tipos de Datos Primitivos

Son inmutables y se almacenan directamente en la variable.

- **Number**: representa tanto enteros como decimales.

```js
let edad = 24;
let precio = 29.99;
```

- **String**: secuencia se caracteres. Se puede escribir entre comillas simples, dobles o backticks.

```js
let nombre = "Elena";
let mensaje = `Hola ${nombre}`;
```

- **Boolean**: valores `true` o `false`.

```js
let esEstudiante = true;
```

- **Undefined**: una variable declarada pero no inicializada.

```js
let x;
console.log(x); // undefined
```

- **Null**: representa la ausencia de valor.

```js
let dato = null;
```

- **Symbol**: valor unico e inmutable, usado como identificador unico.

```js
let id = Symbol("id");
```

- **BigInt**: para trabajar con numeros enteros muy grandes.

```js
let numeroGrande = 1234567890123456789012345678901234567890n;
```

## 📦 Tipos de Datos de Referencia (Objetos)

Se almacenan por referencia. Incluyen:

- **Objet**: coleccion de pares clave-valor.

```js
const persona = { nombre: 'Elena', edad: 24};
```

- **Array**: estructura de datos indexada.

```js
const numero = [1, 2, 3, 4];
```

- **Function**: tambien son objetos en JS.

```js
function saludar () = {
    return "Hola";
}
```

<!-- Investigar: Date, Map, Set, RegExp -->

## 📌 Verificacion de tipos

```js
typeof "Hola"         // string
typeof 10             // number
typeof true           // boolean
typeof undefined      // undefined
```
