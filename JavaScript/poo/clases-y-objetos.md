# 📚 Clases y Objetos

---

## 🧩 ¿Que es una clase?

Una clase es una plantilla que nos permite crear multiples objetos con las mismas propiedades y comportamientos.

```js
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    // metodo:
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
```

📌 Notas:

- Se definen usando la palabra `class`.
- Los nombres de las clases suelen comenzar con **mayuculas**.
- El **constructor** es un metodo especial que incializa las propiedades del objeto.

---

## 🛠️ Instanciar Objetos

Un objeto es una **instancia de una clase**.
Para crearlo, usamos la palabra reservada `new`.

```js
const persona1 = new Persona('Elena', 24);
const persona2 = new Persona('German', 25);

persona1.saludar();  // Hola, me llamo Elena y tengo 24 años.
persona2.saludar();  // Hola, me llamo German y tengo 25 años.
```

📌 **Importante**:

Cada objeto creado tiene **su propio estado** (sus propios valores de propiedad).

---

## 🧱 Propiedades

Las propiedades definen **las caracteristicas** de un objeto.

- Se pueden definir dentro del **constructor** usando `this`.
- Desde ES2022, tambien se pueden declarar directamente en la clase (**propiedades publicas**).
