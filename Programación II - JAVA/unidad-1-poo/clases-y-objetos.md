# 🧩 Clases y  objetos

En Java, **una clase** es una plantilla o modelo a partir del cual se crean objetos. Define **atributos** (tambien llamados propiedades o variables de instancia) y **comportamientos** (metodos) que tendran sus objetos.
  
Un objeto es una instancia de una clase. Tiene un **estado** (valores de sus atributos) y un **comportamiento** (metodos que puede ejecutar).

---

## ✏️ Declarar una clase basica

```java
public class Persona {
    String nombre;
    int edad;

    void saludar() {
        System.out.println("Hola, mi nombre es " + nombre);
    }
}
```

- `String nombre` y `int edad` son atributos.
- `saludar()` es un metodo.

---

## 🚀 Crear un objeto (instancia)

Una vez definida la clase, podemos crear objetos utilizando el operador `new`.

```java
public class App {
    public static void main (String[] args) {
        Persona p1 = new Persona();
        p1.nombre = "Elena";
        p1.edad = 24;

        p1.saludar(); // Muestra: Hola, mi nombre es Elena
    }
}
```

- `new Persona()` reserva espacio en memoria y devuelve una referencia a un nuevo objeto `Persona`.
- `p1` es una referencia al objeto creado.
- `p1.nombre = "Elena"` accede al atributo `nombre` del objeto y modifica su valor.

---

## 💡 Buenas practicas

- Usar nombres claros para clases y atributos (PascalCase para clases y camelCase para variables).
- Separar logica en metodos que tengan una unica responsabilidad.
- Agregar documentación a clases y metodos.
- Los atributos deben tener visibilidad `private` para mantener el principio de **encapsulamiento**
- Crear metodos que representen acciones claras del objeto.