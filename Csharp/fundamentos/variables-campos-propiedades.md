# Variables, campos y propiedades

## 📦 Variables

Una variable es un espacio de memoria donde se guarda un dato. Sirve para almacenar información que puede cambiar mientras el programa se ejecuta.

```csharp
int edad = 25;
string nombre = "María";
```

En este caso, `edad` y `nombre` son variables que guardan datos (un número y una cadena de caracteres).

---

## ⭕ Campos

Un campo es una variable que se declara dentro de una clase y representa una parte del "estado interno" de un objeto. Suelen ser privados para proteger datos y no se accede a ellos directamente, sino a través de metodos.

```csharp
class Persona {
    private string nombre; //campo privado
    private int edad;     // campo privado
}
```

Estos campos están dentro de la clase `Persona` y no se puede acceder a ellos directamente desde afuera.

---

## ✅ Propiedad(Property)

Una propiedad es como una puerta controlada que permite leer o modificar el valor de un campo, utilizando métodos especiales llamados getters y setters. Gracias a esto, se puede aplicar lógica al acceder o cambiar los datos.

```csharp
class Persona {
    private int edad;

    public int Edad {
        get { return edad; }
        set{
            if (value >= 0) {
                edad = value;
            } else {
                Console.WriteLine("La edad ingresada no es valida");
            }
        }
    }
}
```

Aca la propiedad `Edad` permite acceder o modificar el campo `edad` de forma segura. Ejemplo:

```csharp
Persona p = new Persona();
p.Edad = 24;               // usa setter
Console.WriteLine(p.Edad) // usa getter
```

📌 **Nota:** Si no necesitás aplicar ninguna lógica al acceder o modificar el valor, podés usar una **propiedad autoimplementada**, sin necesidad de declarar el campo por separado. C# lo hace por vos automáticamente:

```csharp
public int Edad { get; set; }
```

Esto crea automáticamente un campo privado "oculto" y te permite acceder a él como si lo hubieras definido vos.
