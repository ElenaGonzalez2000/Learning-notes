# 4. Métodos en CSharp

Un **método** es una función asociada a una **clase u objeto**. Representa una acción que ese objeto puede realizar. Son una de las piezas clave de la programación orientada a objetos porque permite **definir comportamientos** y **modificar el estado interno** de los objetos.

## ❗¿Para que se usan los métodos?

- Encapsular lógica (hacer que una tarea este contenida en un solo lugar).
- Reulitizar código.
- Ordenar mejor un programa.
- Interactuar con otroa objetos o modificar el propio estado interno.

En C#, **todas las instrucciones deben estar dentro de un metodo.** No se puede tener código "suelto" como en otros lenguajes.

---

### 🧩 Estructura de un método

```csharp
TipoDeRetorno NombreDelMetodo(TipoDeParametro parametro){
    // lógica del método
    return valor; // si no es void 
}
```

---

### 🔁 Tipo de retorno

El tipo de retorno indica que tipo **de dato devuelve** el método al dinalizar su ejecución. Puede ser cualquier tipo de dato como `int`, `string`, `bool`, etc. Si no se desea que el método devuelva nada. se utliza `void`.

```csharp
int Sumar(int a, int b) {
    return a + b;
}
```

---

### 📥 Parámetros

Son **valores que se le pasan al método** para que trabaje con ellos. Se declaran dentro de los paréntesis y se deben definir con su tipo y nombre.

```csharp
void Saludar (string nombre){
    Console.WriteLine("Hola, " + nombre);
}
```

---

## ⚙️ Ejemplo completo

```csharp
class Calculadora {
    // Método que devuelve un número
    public int Multiplicar(int a, int b) {
        return a * b;
    }

    // Método que no devuelve nada
    public void MostrarMensaje(){
        Console.WriteLine("Método ejecutado");
    }
}
// Uso:
Calculadora calc = new Calculadora()
int resultado = calc.Multiplicar(3, 5);

Console.WriteLine("Resultado: " resultado);
calc.MostrarMensaje();
```

---
