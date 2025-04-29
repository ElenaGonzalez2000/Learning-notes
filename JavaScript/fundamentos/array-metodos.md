# ✨ Metodos de Arrays en JS

Los arrays en JavaScript tienen muchos metodos utiles para recorrer, buscar, transformar y manipular sus elementos.

---

## 🧹 Metodos de Recorrido

### 🔹 `forEach()`

Ejecuta una funcion por cada elemento del array.

```js
const numeros = [1, 2, 3];
numeros.forEach(num => console.log(num));  // Imprime: 1, 2, 3
```

### 🔹 `map()`

Crea un **nuevo array** transformando cada elemento.

```js
const numero = [1, 2, 3];
const dobles = numeros.map(num => num *2);
console.log(dobles);  // Imprime [2, 4, 6]
```

### 🔹 `filter()`

Crea un nuevo array **solo con los elementos que cumplen una condición.

```js
const numeros = [1, 2, 3, 4];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares)  // [2, 4]
```

---

## 🔍 Métodos de Búsqueda

### 🔹 `find()`

Devuelve **el primer elemento** que cumple una condición.

```js
const usuarios = [{ id: 1 }, { id: 2 }];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario);  // { id: 2 }
```

---

### 🔹 `some()`

Devuelve `true` si **algun elemento** cumple la condicion.

```js
const numeros = [1, 2, 3];
console.log(numeros.some(num => num > 2));  // true
```

---

### `every()`

Devuelve `true` si **todos** los elementos cumplen la condición.

```js
cont numeros = [2, 4, 6];
console.log(numero.every(num => num % 2 === 0));  // true 
```

---

## 🔄 Metodos de transformación

### 🔹 `reduce()`

Reduce el array a **un solo valor**.

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, num) => acc + num, 0)
console.log(suma);  // 10
```

Tambien se puede usar con strings

```js
const palabras = ["hola", "como", "estas?"];
const saludo = palabras.reduce((acc, palabra, index) => {
    return acc + (index === 0 ? palabra.charAt(0).toUpperCase() + palabra.slice(1)) : " " + palabra);
}, "");
console.log(saludo); // Hola como estas
```

---

### 🔹 `sort()`

Ordena los elemento. ¡Cuidado! Modifica **el array original**

```js
const numeros = [4, 3, 1, 2];
numeros.sort((a, b) => a - b);
console.log(numeros) // [1, 2, 3, 4]
```

📌 Para ordenarlos de mayor a menor solo hay que cambiar `a - b` por `b - a`.

---

### 🔹 `reverse()`

Invierte el orden de los elementos

```js
const numeros = [1, 2, 3];
numeros.reverse();
console.log(numeros);  // [3, 2, 1]
```

---

## ➕➖ Métodos de Agregación y Eliminación

### 🔹 `push()`

Agrega un elemento **al final**.

```js
const frutas = ["banana", "manzana"];
frutas.push("naranja")
console.log(frutas);  // ["banan", "manzana", "naranja"]
```

---

### 🔹 `pop()`

Elimina el **ultimo** elemento.

```js
const frutas = ["banana", "manzana"];
frutas.pop();
console.log(frutas)  // ["banana"]
```

---

### 🔹 `unshift()`

Agrega un elemento **al inicio**.

```js
const frutas = ["manzana"];
frutas.unshift("pera");
console.log(frutas) // ["pera", "manzana"]
```

---

### 🔹 `shift()`

Elimina el **primer** elemento.

```js
const frutas = ["manzana","pera"];
frutas.shift();
console.log(frutas)  //["pera"]
```

---

### 🔹 `splice()`

Permite **agregar, eliminar o reemplazar** elementos.

```js
const frutas = ['manzana', 'banana', 'cereza', 'durazno'];
const eliminadas = frutas.splice(1, 2);

console.log(frutas);     // ['manzana', 'durazno']
console.log(eliminadas); // ['banana', 'cereza']

// Empieza en la posición 1 (banana) y elimina 2 elementos (banana y cereza).
```

#### 📌 Mas detalles del funcionamiento del metodo splice
`array.splice(inicio, cantidad, elemento1, elemento2)`

| Parametro | ¿Que significa? |
|-----------|-----------------|
|`inicio`| Índice donde empieza a modificar el array(posición inicial).|
|`cantidad`| Cantidad de elementos que se van a eliminar desde `inicio`.|
|`elemento1...`| (Opcional) Elementos nuevos para **insertar** en esa posición.|

`Podemos guardar los valores eliminados si usamos el metodo dentro de una variable como en el ejemplo de las frutas`

##### Agregar elementos

```js
const frutas = ['manzana', 'durazno'];
frutas.splice(1, 0, 'banana', 'cereza');

console.log(frutas); // ['manzana', 'banana', 'cereza', 'durazno']

```

- Al poner '0' no eliminamos nada, solo agregamos elementos en la posición indicada

