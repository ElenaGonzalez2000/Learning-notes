# 🔀 Estructuras de Control Condicionales en Javascript

Las estructuras de control permiten que el programa tome decisiones según condiciones.

---

## ✅ `if`, `else if`, `else`

Se utiliza para ejecutar bloques de codigo segun una o varias condiciones booleanas.

```javascript
const edad = 20;

if(edad >= 18) {
    console.log("Sos mayor de edad");
} else if (edad >= 13) {
    console.log("Sos adolescente");
} else {
    console.log("Sos menor de edad");
}
```

---

## 🟨 Operador ternario `?`

Es una forma resumida de escribir un `if/else`

```javascript
const mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);
```

---

## 🧃`Switch`

Ideal para múltiples casos sobre una misma variable

```javascript
const dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Es viernes!");
        break;
    default:
        console.log("Día común");
}
```

📌 Recorda usar `break` en cada `case`, si no, el flujo continuara al siguiente.

---

## 🧠 Buenas practicas

- No uses `switch` cuando con un `if` queda mas claro.
- El operador ternario es util para condiciones simples, pero evita abusar de el si complica la lectura.
- Siempre escribi un `else` para manejar casos no previstos.

---
