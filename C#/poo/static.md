# 💢 Miembros `static`

## 📌 ¿Que significa `static`?

Cuando usas la palabra clave `static` en C#, estas indicando que **ese miembtro pertenece a la clase** y no a las instancias (objetos) de esa clase.

> 🧩 Esto aplica a:

- Variables (campos estaticos)
- Propiedades
- Metodos
- Constructores (solo uno estatico permitido)

---

## 🚫 ¿Que pasa si algo NO es estatico?

Cada objeto tiene su **propia copia** de las variables no estaticas.

```csharp
public class Persona {
    public string Nombre;
}

Persona p1 = new Persona();
p1.Nombre = "Elena";

Persona p2 = new Persona();
p2.Nombre = "Ana"

// Cada uno tiene su propio valor en la variable Nombre
```

---

## 🖇️ ¿Que pasa si algo ES estatico?

Todos los objetos comparten **la misma copia**, y puede usarse **sin crear ningun objeto.**

## 🔡 Variables estaticas

```csharp
public class Jugador {

    public static int CantidadJugadores = 0;

    public Jugador()
    {
        CantidadJugadores++; // modifico el valor de la variable cada vez que creo un jugador nuevo
    }
}

Jugador j1 = new Jugador(); // + 1
Jugador j2 = new Jugador(); // + 1

Console.WriteLine(Jugador.CantidadJugadores); // 2
```

>📌 *Recordar*: Los miembros `static` pertenecen a la clase, no al objeto. Por lo que seria incorrecto acceder al valor de la variable por un objeto.

---

## 🔧 Metodos estaticos

Se usan para acciones generales que **no dependen del estado del objeto.**

```csharp
public class Calculadora {
    public static int Sumar (int a, int b) {
        return a + b;
    }
}

int resultado = Calculadora.Sumar(3, 4); // Sin crear un objeto
```

🚫 Un metodo `static` **no puede usar** variables no estaticas de la clase.

---

## 🧱 Propiedades estaticas

Tambien podes tener propiedades con `{ get; set; }` estaticas:

```csharp
public class Configuracion {
    public static string Tema {get; set;} = "Claro";
}

Console.WriteLine(Configuracion.Tema); // Claro
Configuracion.Tema = "Oscuro";
```

Todos los objetos (o desde cualquier lugar) veran el nuevo color `"Oscuro"`.

---
