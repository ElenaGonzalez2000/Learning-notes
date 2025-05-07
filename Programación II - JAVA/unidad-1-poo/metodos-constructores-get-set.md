# 🔧 Metodos, Constructores y Getters/Setters en Java

En Java, una clase no solo define atributos, sino tambien comportamientos a traves de **metodos**. Ademas, los objetos necesitan ser inicializados de forma correcta, y para eso se utilizan **constructores**. Cuando los atributos marcados como private, se accede a ellos mediante metodos especiales llamados **getters** y **setters**.

---

## ⚙️ ¿Que es un metodo?

Un metodo es una funcion que pertenece a una clase. Puede realizar acciones, recibir datos como parametros y devolver resultado.

**Sintaxis basica:**

```java
public tipoDeRetorno nombreMetodo (tipo parametro) {
    // cuerpo del metodo
    return valor;
}
```

**Ejemplo:**

```java
public class Calculadora {
    public int sumar(int a, int b){
        return a + b;
    }
}
```

- `public`: el metodo puede ser llamado desde otras clases.
- `int`: tipo de dato que devuelve.
- `sumar`: nombre del metodo.
- `(int a, int b)`: parametros de entrada.

---

## 🛠️ ¿Que es un constructor?

Un constructor es un metodo especial que se ejecuta automaticamente al crear un objeto con `new`. Tiene el mismo nombre que la clase y **no tiene tipo de retorno**.

**Ejemplo:**

```java
public class Persona {
    private String nombre;
    private int edad;

    // Constructor por defecto, sin parametros
    public Persona() {
        this.nombre = "Sin nombre";
        this.edad = 0;
    }

    // Constructor con parametros
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

- Se pueden tener varios contructores (esto se llama **sobrecarga**).
- La palabra clave `this` se refiere al objeto actual.

---

## 🔒 Getters y Setters

Para mantener el principio de **encapsulamiento**, los atributos deben ser private y el acceso a ellos se realiza mediante metodos publicos llamados **getters** (para obtener valores) y **setters** (para modificarlos).

Ejemplo:

```java
public class Persona {
    private String nombre;

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) {
        if (!nombre.isEmpty()) {
            this.nombre = nombre;
        }
    }
}
```

- `getNombre()` permite leer el valor del atributo.
- `setNombre()` permite modificarlo, con validacion opcional.
- Se pueden agregar restricciones (por ejemplo, no aceptar valores vacios o negativos).

---

### 🧠 ¿Por que usar getters y setters?

- Permiten controlar como se accede y modifica un atributo.
- Facilitan la validacion de datos antes de modificar el estado del objeto
- Encapsulan el funcionamiento interno de la clase, mejorando la mantenibilidad.
