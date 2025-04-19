# Control de Flujo

El **control de flujo** pemite que un programa **tome decisiones y repita instrucciones** dependiendo de ciertas condiciones. Gracuas a esto, podemos construir programas dinamicos que se adapten a distintas situaciones.

## 🔷 Condicionales

Las estructuras condicionales permiten que el programa **decida que bloque de codigo ejecutar** dependeiendo de si se cumple o no una condición.

### `if`

Ejecuta un bloque de codigo si la condición es verdadera.

```csharp
ind edad = 18;

if (edad >= 18) {
    Console.WriteLine("Eres mayor de edad.");
}
```

### `else`

Ejecuta un bloque alternativo si la condición del `if` no se cumple.

```csharp
if (edad >= 18) {
    Console.WriteLine("Eres mayor de edad.");
} else {
    Console.WriteLine("Eres menor de edad.");
}
```

### `else if`

Permite agregar condicionales adicionales si el `if` inicial no se cumple.

```csharp
if (edad < 13) {
    Console.WriteLine("Niño/a");
} else if (edad < 18) {
    Console.WriteLine("Adolescente");
} else {
    Console.WriteLine("Adulto");
}
```

### `switch`

Es util cuando queremos coparar una variable contra varios valores posibles, Funciona bien cuando hay multiples opciones especificas.

```csharp
int dia = 3;

switch (dia) {
    case 1:
        Console.WriteLine("Lunes");
        break;
    case 2:
        Console.WriteLine("Martes");
        break;
    case 3:
        Console.WriteLine("Miércoles");
        break;
    default: //si el valor no es ninguna opcion disponible 
        Console.WriteLine("Otro día");
        break;
}
```

---

## ➰ Bucles

Los bucles permiten **repetir bloques de codigo** mientras se cumpla una condición, o por una cantidad determinada de veces.

### `for`

Se utiliza cuando sabemos cuantas veces queremos repetir un bloque.

```csharp
for (int i = 0; i < 5; i++) {
    Console.WriteLine("Repetición: " + i);
}
```

<!-- recordar ver foreach -->

### `while`

Reptire un bloque mientras una condicion se siga cumpliendo.

```csharp
int contador;

while(contador < 5){
    Console.WriteLine("Contador: " + contador);
    contador++;
}
```

📌 Resumen visual

| Estructura | Uso principal |
|------------|----------------|
| `if` / `else` / `else if` | Ejecutar distintos bloques según condiciones |
| `switch` | Elegir entre múltiples opciones según un valor |
| `for` | Repetir un bloque un número definido de veces |
| `while` | Repetir un bloque mientras se cumpla una condición |

---
