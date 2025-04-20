# Modificadores de Acceso en CSharp

Los modificadores de acceso so palabras clave que nos permiten controlar quien peude ver o utilizar las clases, metodos, campos y propiedades dentro de nuestro código.
Sirven para proteger los datos y la lógica interna de una clase, permitiendo acceso solo donde sea necesario.

## 🛡️¿Por qué son importantes?

- Ayudan a encapsular los datos.
- Previenen que otras clases modifiquen o accedan a cosas que no deberian.
- Facilitan el mantenimiento y la seguridad del código.

---

## 🔎 Tipos de modificadores

| Modificador | ¿Dónde se puede acceder?                                    | Ejemplo                     |
|-------------|-------------------------------------------------------------|-----------------------------|
| `public`    | Desde **cualquier clase o lugar**                           | Accesible desde fuera       |
| `private`   | Solo desde **dentro de la clase donde fue declarado**       | Oculto fuera de la clase    |
| `protected` | Desde la **misma clase** y sus **subclases (herencia)**     | Útil en jerarquías de clases|

---

## 🧪Ejemplo Practico

```csharp
class Persona {
    public string Nombre;           // Accesible desde cualquier lugar
    private int edad;              // Solo accesible desde dentro de la clase
    protected string documento;   // Accesible desde esta clase y las que hereden

    public void MostrarEdad(){
        Console.WriteLine("Edad: " + edad); // valido
    }
}

class Empleado : Persona {
    public void MostrarDocumento() {
        Console.WriteLine("Doc: " + documento): //valido, porque es heredado
    }
}

class Program {
    static void Main() {
        Persona p = new Persona();
        p.Nombre = "Ana";    // ✅ publico, accesible
        p.edad = 30;        // ❎ Error: es privado
        p.documento = 123; // ❎ Error: protegido, no es accesible desde aca 
    }
}
```

---

## 🔴 Resumen

- 🔓 public ⇾ acceso total
- 🔐 private ⇾ solo dentro de la clase
- 🧬 protected ⇾ adentro de la clase y las que heredan
