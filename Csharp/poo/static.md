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

## 🏗️ Constructor estatico

Se ejecuta **una sola vez** al usar algo estatico por primera vez.

```csharp
public class Sistema {
    static Sistema() {
        Console.WriteLine("🚀 Inicializando sistema...")
    }

    public static void Iniciar()
}
```

Aunque no crees objetos, si llamas `Sistema.Iniciar()`, se ejecutara el constructor estatico primero.

---

## 🤔 ¿Como afecta a los objetos?

| Tipo | ¿Pertenece a la instancia? | ¿Se comparte entre objetos? | ¿Necesita `new`? |
|------|----------------------------|-----------------------------|------------------|
|Campo no estatico | ✅ Sí | ❌ No | ✅ Sí |
|Campo estatico | ❌ No | ✅ Sí | ❌ No |
|Metodo estatico | ❌ No | ✅ Sí | ❌ No |
|Propiedad estatica | ❌ No | ✅ Sí | ❌ No |

---

### ¡📚 Cuando conviene usar `static`?

✅ Si el valor debe **ser comun a todas las instacias**
✅ Si necesitas una **utilidad general** (ej: clase `Math`, `Console`, `DateTime`)
✅ Si queres almacenar configuraciones globales o contar instancias

---

## 🧠 Ejemplo completo con comparacion

```csharp
public class Contador {
    public static int Total = 0;   // Se comparte
    public int Personal = 0;       // Es individual

    public void Incrementar() {
        Total++;
        Personal++;
    }
}
```

```csharp
Contador c1 = new Contador();
c1.Incrementar();  // Total = 1, Personal = 1

Contador c2 = new Contador();
c2.Incrementar();  // Total = 2, Personal = 1
```

📌 `Total` suma entre todos los objetos, `Personal` solo entre llamadas del mismo objeto.
 