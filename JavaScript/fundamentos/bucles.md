# 🔁 Bucles en JavaScript

Los bucles nos permiten repetir acciones. En JavaScript hay varios tipos y cada uno tiene un uso recomendado.

---

## 🔷 `for` clasico

Se usa cuando sabemos cuantas veces queremos iterar.

```javascript
for (let i = 0; i < 5; i++){
    console.log(`Iteración: ${i}`)
}
```

---

## 🔷 `while`

Repite mientras la condicion sea verdadera. Ideal cuando **no sabemos** cuantas veces se va a repetir.

```javascript
let i = 0;

while (i < 5){
    console.log(i);
    i++;
}
```

---

## 🔷 `do...while`

Se ejecuta al menos una vez, inclusi si la condicion es falsa desde el principio.

```javascript
let i = 0;
do{
    console.log(i);
    i++;
} while (i < 5);
```

---

## 🔷 `for...of`

Itera sobre los **valores** de un objeto iterable(`array`, `string`, etc).

```javascript
const letras = ["a","b","c"];

for(const letra of letras) {
    console.log(letra);
}
```

## 🔷 `for...in`

Itera sobre las **propiedades (claves)** de un objeto.

```javascript
const persona = {
    nombre: 'Elena',
    edad: 24
}

for (const clave in persona){
    console.log(`${clave}: ${persona[clave]}`);
}
```

---

## 🛑 `break` y `continue`

`break`: corta completamente el bucle.

```javascript
for (let i = 0; i < 10; i++){
    if (i === 5) break;
    console.log(i);
}
```

`continue`: salta a la siguiente iteracion.

```javascript
for (let i = 0; i < 5; i++){
    if (i === 2) continue;
    console.log(i)   // 0,1,3,4
}
```

---

## ✍🏻 Practicas recomendadas

- Usar `for` clasico cuando necesites el indice.
- Usar `for...of` para recorrer arrays.
- Evita `for...in` en arrays, es mas adecuado para objetos.
- No escribas bucles infinitos sin necesidad
- Usa `break` y `continue` con cuidado, no abuses.
