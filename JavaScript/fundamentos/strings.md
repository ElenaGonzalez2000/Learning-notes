# 🔤 Strings en JavaScript

Los strings son cadenas de caracteres que se pueden manipular con distintas propiedades y metodos.

---

## ✍🏻 Declaracion de strings

```javascript
let texto1 = "Hola";
let texto2 = "Hola";
```

> 📌 Se puede utilizar ambos tipos de comillas, pero es recomendable mantener un solo tipo durante todo el codigo.

---

### Template literals (Backticks)

Permiten interpolar variables dentro de un string y crear plantillas multilinea.

```javascript
let titulo = "Pagina Web";
let plantilla = `
    <html>
        <h1>${titulo}</h1>
        <p>Esto es un parrafo</p>
    </html>
`;

console.log(plantilla);
```

---

## 📏 Propiedad `.length`

Devuelve la longitud de un string (catidad de caracteres).

```javascript
let str = "Hola soy un string";
console.log(str.length); // 18
```

---

## ✂️ Extraer partes de un string

### 🔹`slice(indice, fin)`,`substring(indice, fin)`

```javascript
let str = "Hola soy un string";

console.log(str.slice(5, 10)); // "soy u"
console.log(str.substring(5, 10)); // "soy u"
```

---

## 🔁 Reemplazar contenido

### 🔹`replace()`

```javascript
let frase = "Hola mi nombre es Elena";
frase = frase.replace("Elena", "Maria");
console.log(frase);
```

> 📌 Notese que para guardar el nuevo valor tengo que reescribir el string, esto pasa porque los strings en js son innmutables, osea que ningun metodo puede modificar su valor original, solo dar uno nuevo si se guarda en una nueva varible o sobreescribo la original.

---

#### 🔹 Reemplazo global con expresion regular

```javascript
let texto = "pies, a tus pies, a tus pies";
texto = texto.replace(/pies/g, "manos");
console.log(texto); // manos, a tus manos, a tus manos
```

> 📌 `/g` = "global", reemplaza todas las coincidencias.

---

## 🔠 Mayusculas y minusculas

```javascript
let input = "GeminiS";
let signo = "geminis";

input = input.toLowerCase(); // geminis
console.log(input === signo); // true

console.log(input.toUpperCase()); // "GEMINIS"
```

---

## ➕ Concatenacion de strings

```javascript
let str1 = "Hola me llamo ";
let str2 = "Elena, ";
let str3 = "tengo 24 años";

let resultado = str1.concat(str2, str3);

console.log(resultado);

// tambien con +
console.log(str1 + str2 + str3);

// y con backticks
console.log(`${str1}${str2}${str3}`);
```

---

## 🫧 Eliminar espacios

```javascript
let frase = "    hola soy un string con espacios    ";

console.log(frase.trim()); // ambos lados
console.log(frase.trimStart()); // solo al inicio
console.log(frase.trimEnd()); // solo al final
```

---

## 🔎 Acceder a caracteres

```javascript
let texto = "hola otro string";

console.log(texto.charAt(0)); // "h"
console.log(texto[1]); // "o"
```

---

## 🔍 Buscar contenido

```javascript
let cadena = "hola soy una cadena de texto de muestra";

console.log(cadena.indexOf("de")); // 25
console.log(cadenalastIndexOf("de")); // 36
```

---

## 🌍 Metodos de busqueda

```javascript
let texto =
  "Desde lejos vengo rendido a tus pies, a tus pies, suplicante me inclino";

console.log(texto.match(/pies/g)); // ["pies", "pies"]
console.log(texto.includes("Desde")); // true
console.log(texto.startWith("Desde")); // true
console.log(texto.endWith("inclino")); // true
```

---

## 🧪 Expresiones regulares (regex)

Las expresiones regulares permiten hacer busquedas avanzadas en textos. Se escriben entre `//` y pueden incluir flags como:

- `g`: global (todas las coincidencias)
- `i`: insensible a mayusculas
- `m`: multilínea

Ejemplo:

```javascript
let texto = "Hola hola HOLA";
console.log(texto.match(/hola/gi)); // ["Hola", "hola", "HOLA"]
```

> ✍🏻 Mas info en regexr.com
