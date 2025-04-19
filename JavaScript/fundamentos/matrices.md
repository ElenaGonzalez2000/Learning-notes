# Diferencia entre Arrays y Matrices en JavaScript

En JavaScript, los términos "array" y "matriz" suelen usarse indistintamente, pero técnicamente tienen diferencias dependiendo del contexto:

## 🔢 Arrays

Un array es una estructura de datos unidimensional que almacena una colección de elementos en un solo nivel. Los elementos pueden ser de cualquier tipo, como números, cadenas, objetos, etc.

```javascript
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "plátano", "cereza"];
```

### 📌 Características de los Arrays

- Los arrays son unidimensionales.
- Se accede a los elementos mediante índices.
- Son ideales para listas simples de datos.

## 📦 Matrices

Una matriz es una estructura de datos bidimensional o multidimensional que puede considerarse como un array de arrays. Esto permite organizar los datos en filas y columnas.

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matriz[1][2]); // 6
```

### 📌 Características de las Matrices

- Las matrices pueden tener múltiples dimensiones (2D, 3D, etc.).
- Se accede a los elementos mediante índices múltiples.
- Son útiles para representar tablas, gráficos o datos más complejos.

## 📊 Resumen

- **Array**: Unidimensional, adecuado para listas simples.
- **Matriz**: Multidimensional, adecuado para datos estructurados en filas y columnas.
