# 🔒 Encapsulamiento, Composicion y Delegacion en Java

Estos tres conceptos son fundamentales para aplicar correctamente el paradigma de la Programacion Orientada a Objetos (POO) en Java. Permiten organizar el codigo, proteger los datos y reutilizar componentes de forma eficiente.

---

## 🔐 Encapsulamiento

El **encapsulamiento** es el principio de ocultar los detalles internos de un objeto y exponer solo lo necesario a traves de una interfaz publica. Esto protege los datos y mantine la integridad del objeto.

¿Como se aplica en Java?

- Se declaran los atributos como `private`.
- Se accede a ellos mediante metodos `public` llamados **getters y setters**.

```java
public class Persona {
    private String nombre;

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        if (!nombre.isEmpty()) {
            this.nombre = nombre;
        }
    }
}
```

**Ventajas:**

- Protege los atributos contra modificaciones indebidas.
- Permite validar datos antes de asignarlos.
- Facilita el mantenimiento y evolucion del codigo.

**JavaBeans y Encapsulamiento:**  
Una clase **JavaBean** cumple con ciertos convenciones:

- Atributos `private`.
- Metodos `get` y `set` publicos.
- Constructor vacio (sin parametros).
- Implementa `Serializable` (en muchos casos).

---

## ⚙️ Composicion

La **composicion** es un tipo de relacion entre clases donde una clase contiene una instancia de otra. Se dice que una clase "tiene un" objeto de otra clase. Es una alternativa a la herencia.

```java
public class Motor {
    private String tipo;

    public Motor(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
}

public class Auto {
    private Motor motor;

    public Auto(Motor motor) {
        this.motor = motor;
    }

    public void mostrarTipoMotor() {
        System.out.println("Motor: " + motor.getTipo());
    }
}
```

Ventaja:

- Alta reutilizacion de codigo.
- Mejor encapsulamiento
- Menor acoplamiento que con la herencia.

---

## 📥 Delegacion

La **delegacion** es un patron donde un objeto no implementa una funcionalidad por si mismo, sino que se la delega a otro objeto. Es una forma de reutilizar comportamiento sin necesidad de heredar.

```java
public class Impresora {
    public void imprimir(String texto) {
        System.out.println("Imprimiendo:" + texto)
    }
}

public class Documento {
    private Impresora impresora;

    public Documento(Impresora impresora) {
        this.impresora = impresora;
    }

    public void imprimirDocumento(String texto) {
        impresora.imprimir(texto);  // delega el trabajo
    }
}
```

**Diferencia con la composicion:**

- En composicion, un objeto "tiene un" componente.
- En delegacion, un objeto "usa otro objeto para hacer una tarea".
