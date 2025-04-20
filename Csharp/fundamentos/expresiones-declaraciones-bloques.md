# Expresiones, declaraciones y bloques

## ✨ Expreciones

Una **expresión** es cualquier combinación de variables, valores y operaciones que produce un resultado.

```csharp
int x = 5 + 3;
```

En este caso, `5 + 3` es una expresión que devuelve `8`. Tambien puede ser solo un valor o una variable:

```csharp
42                      // valor literal
nombre                 // variable
nombre + "!!!"        // expresión con operador 
```

---

## 🗒️ Declaraciones

Una *declaración* (o instrución) indica una acción específica. Por ejemplo:

- Crear una variable
- Llamar a un metodo
- Definir un bucle o una estructura condicional

```csharp
ind edad = 25;              // declaración de variable
Console.WriteLine(edad);   // declaración de método
```

🔍 A diferencia de las expreciones, **no siempre devuelven un valor.**

---

## 🧱 Bloques

Un **bloque** es un conjunto de declaraciones y/o expreciones agrupadas como una unidada de ejecución. En C#, los bloques se delimitan con llaves `{ }`.

```csharp
{
    int x = 10; 
    Console.WriteLine(x * 2);
}
```

Estos bloques se usan, por ejemplo, en condicionales, funciones, bucles, etc.

```csharp
if (x > 0){
    Console.WriteLine("Positivo");
}
```

---
