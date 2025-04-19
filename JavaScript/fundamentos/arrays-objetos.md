# Arrays, Objetos y Fechas en JS

## Indice

  1. [Arrays](#-arrays)
  2. [Objetos](#-objetos)
  3. [Fechas](#-fechas)

---

## 🔹 Arrays

Los arrays son estructuras que permiten almacenar múltiples valores en una sola variable.

```javascript
const array = [1,2,3,4,5,6];
console.log(array);      // Muestra todo el array
console.log(array[3]);  // Accede al tercer elemento (4), los array empiezan desde el 0
```

### ✍🏻 Modificación de arrays

Podes agregar nuevos elementos o modificar existentes:

```javascript
array[6] = "01";
console.log(array);  // Se agrega un nuevo valor
```

### 📦 Arrays dentro de arrays

Tambien se pueden tener arrays anidados:

```javascript
const array2 = [2,3];
const array3 = [4,5];
const array4 = [array2, array3]

console.log(array4);  // [[2,3],[4,5]]
```

---

## 🔸 Objetos

Los objetos permiten agrupar datos mediante pares `clave-valor`.

```javascript
const celular = {
    marca: 'Xiaomi',
    isWhite: false,
    contactos: ['Maria', 'Alicia'],
    memoria: {
        marca: 'Sandisk',
        almacenamiento: 32
    },
    'mes de compra': 'julio',
}
```

### 📌 Acceso a propiedades

```javascript
console.log(celular[mes de compra]);  // Para claves con espacios
console.log(celular.marca);          // Notacion de punto
console.log(celular.contactos[1]);
console.log(celular.memoria.marca)
```

### ✏️ Modificacion o agregado de propiedades

```javascript
celular.anio = 2022;

celular.isWhite = true;
```

---

## 🕐 Fechas

JavaScript permite trabajar con fechas usando la clase `Date`.

### 📅 Creación de fechas

```javascript
const ahora = new Date();
```

```javascript
const fecha_milis = new Date(10);  // Fecha desde milisegundos
```

```javascript
const fecha_cadena = new Date('March 25 2020');  // Desde string
```

```javascript
const fecha_valores = new Date(2000, 5, 5)  // Año, mes (0 - 11), día
```

### Obtener partes de la fecha

```javascript
const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;  // Los meses van de 0 a 11
const anio = ahora.getFullYear();

console.log(dia, mes, anio);
```
