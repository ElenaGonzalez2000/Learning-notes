# 🧠 Funciones en JavaScript

Las funciones son bloques de codigo reutilizables que permiten organizar y estructurar mejor nuestros programas. Pueden recibir datos (parametros), procesarlos y devolver un resultado (valor de retorno).

## 🧩 ¿Que es una funcion?

Una funcion es un conjunto de instrucciones que realiza una tarea o calcula un valor. Se puede ejecutar cuando sea necesario, tantas veces como se desee.

---

## 📌 Declaracion de una funcion

```javascript
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Llama a la funcion
```

---

### 📥 Parametros y argumentos

```js
funtion saludar (nombre) {
    console.log(`Hola {nombre}`);
}

saludar("Elena"); // Llama a la funcion con el argumento "Elena"
```

- **Parametros**: Son las variables que se definen en la declaracion de la funcion. Se utilizan para recibir datos.
- **Argumentos**: Son los valores que se pasan a la funcion al llamarla. Pueden ser literales, variables o expresiones.

---

### 📤 Valor de retorno

```js
funtion sumar (a, b){
    return a + b; // Devuelve la suma de a y b
}

let resultado = sumar(5, 3); // Llama a la funcion y almacena el resultado
console.log(resultado); // Muestra el resultado en la consola
```

- El `return` devuelve un valor y termina la ejecucion de la funcion.

---

## ⚪ Funciones anonimas

```js
const restar = funtion (a, b) {
    return a - b;
}
const resultado = restar(10, 4); // 6
```

---

## 🏷️ Funciones de flecha (Arrow Functions)

```js
const multiplicar = (a, b) => a * b;
const resultado = multiplicar(4, 5); // 20
```

- Si solo hay **una expresion**, el `return` es implicito.
- Si solo hay **un parametro**, se pueden omitir los paréntesis.

```js
const saludar = nombre => console.log(`Hola ${nombre}`);
```

---

## 🔄️ Funciones como valores y callbacks

Las funciones en JS son de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y retornadas por otras funciones.

```js
function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback(); // Aquí se llama a la función que le pasamos como callback
}

function despedida() {
    console.log("¡Adiós! Nos vemos pronto."); //funcion callback
}

saludar("María", despedida);  // Hola María
                              // ¡Adiós! Nos vemos pronto.
```

---

## 🏗️ Funciones dentro de funciones

Las funciones dentro de otras funciones se llaman **funciones anidadas**. Pueden ser utiles para organizar el codigo y encapsular logica.

```js
function exterior() {
    function interior() {
        console.log("Soy la función interior.");
    }
    interior(); // Llama a la función interior desde la función exterior
}
exterior(); // Llama a la función exterior
```

---

## 📦 Funciones con parametros por defecto

```js
funtion saludar (nombre = "desconocido") {
    console.log(`Hola ${nombre}`);
}

saludar(); // Llama a la funcion sin argumentos, usa el valor por defecto
saludar("Elena"); // "Hola Elena"
```

---

## 🧪 Funciones recursivas

Una funcion recursiva es aquella que se llama a si misma. Se utiliza para resolver problemas que pueden dividirse en subproblemas similares.

```js
function factorial(n) {
    if (n === 0) {
        return 1; // Caso base
    } else {
        return n * factorial(n - 1); // Llamada recursiva
    }
}

console.log(factorial(5)); // 120
```
