# POO con CSharp

En esa seccion veremos como crear clases, objetos y como funcionan los constructores.

---

## 1. Clases y Objetos

En POO, una clase es como un plano o molde que define:

- 🔶 Que propiedad tiene un objeto (atributos).
- 🔷 Que comportamientos puede realizar (metodos).

Un objeto es una instancia de esa clase, es decir un ejemplar concreto que vive en memoria y puede hacer todo lo que su clase le permite.

---

### 🧠 Importante

> Crear una variable de tipo clase **no crea el objeto**. Solo se reserva espacio para una **referencia**.  
> Para crear el objeto, usamos la palabra clave `new`.

---

### ✅ Ejemplo de clase e instancia

```csharp
class Persona {
    public string Nombre;
    public int Edad;

    public void Saludar() {
        Console.WriteLine("Hola, soy " + Nombre);
    }
}
```

```csharp
class Program {
    static void Main(){
        Persona p1;             // solo referencia, aún no hay objeto
        p1 = new Persona();    // se crea el objeto en memoria

        p1.Nombre = "Elena";
        p1.Edad = 24;
        p1.Saludar();        // Imprime: Hola, soy Elena
    }
}
```

---

### 🛠️ Constructores

Un constructor es un método especial que se ejecuta automaticamente al crear una instancia de clase

- Se llama igual que la clase.
- No tiene tipo de retorno.
- Se puede usar para inicializar valores o ejecutar lógica al momento de la creacion del objeto.

#### ✨ Ejemplo de constructor

```csharp
class Persona {
    public string Nombre;
    publix int Edad;

    // Constructor con parametros
    puclic Persona(string nombre, int edad){
        Nombre = nombre;
        Edad = edad;
    }

    public void Mostrar() {
        Console.WriteLine($"Nombre: {Nombre}, Edad: {edad}");
    }
}
```

```csharp
class Program {
    static void Main() {
        Persona p1 = new Persona("Elena", 25);
        p1.Mostrar(); // Imprime: Nombre: Elena, Edad: 24
    }
}
```

---

#### 📌 Tips adicionales

- Si no definís ningún constructor, C# agrega uno por defecto (sin parametros).
- Podés tener varios constructores usando sobrecarga, osea diferentes versiones con distintos parametros.

---
