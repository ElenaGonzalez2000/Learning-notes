# 🔄️ Sobrecarga de Metodos y Metodos Estaticos vs de Instancia

En Java, es posiblo definir varios metodos con el mismo nombre dentro de una clase, siempre que difieran en la **cantidad o tipo de parametros**. A esto se lo llama **sobrecarga de metodos** *(method overloading)*.
Ademas, Java permite definir metodos que pertenecen **a la clase en si misma** y no a una instancia particular. Esos son los **metodos estaticos**, y se diferencian de los metodos de instancia en su forma de usarse y en que pueden acceder.

---

## 🔁 ¿Que es la sobrecarga de motodos?

La sobrecarga permite definir varios metodos con el mismo nombre, siempre que difieran en:

- La **cantidad de parametros**
- El **tipo de datos** de los parametros
- El **orden** de los parametros

❌ **No se puede sobrecargar solo cambiando el tipo de retorno**

```java
public class Operaciones {
    public int sumar (int a, int b){
        return a + b;
    }
    public double sumar (double a, double b){
        return a + b;
    }
    public int sumar (int a, int b, int c){
        return a + b + c;
    }
}
```

Llamadas posibles:

```java
Operaciones op = new Operaciones ();
op.sumar(2, 3);       // Usa el metodo int
op.sumar(2.5, 3.2);   // Usa el metodo double
op.sumar(2, 3, 4);    // Usa el de 3 parametros
```

---

## 🔁 ¿Que es la sobreescitura de metodos?

La **sobreescritura de metodos** (*overriding*) ocurre cuando una subclase redefine un metodo que ya estaba definido en una clase padre. Esto permite personalizar el comportamiento heredado.

**Reglas:**

- El metodo debe tener la **misma firma** (nombre, tipo de retorno y parametros).
- Se puede usar la anotacion `@Override` para indicar que se esta sobreescribiendo.

```java
class Animal {
    public void hacerSonido() {
        System.out.println("Sonido generico de animal");
    }
}

class Perro extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("Guau guau");
    }
}
```

Uso:

```java
Animal miAnimal = new Perro ();
miAnimal.hacerSonido(); // Muestra: Guau guau
```

Aunque la referencia es de tipo `Animal`, se ejecuta la version sobrescrita de `Perro`. Esto es un ejemplo de **polimofismo**.

---

## ⚡Metodos estaticos (`static`)

Un metodo estatico **no depende de una instancia** de la clase. Se puede usar sin crear un objeto.

```java
public class Utilidad {
    public static double calcularIva (double precio) {
        return precio * 0.21;
    }
}
```

Uso:

```java
System.out.println(Utilidad.calcularIva(100));
```

**Reglas de los metodos estaticos:**

- Pueden acceder solo a **otros metodos estaticos** o **atributos estaticos** de la clase.
- No pueden usar `this`(porque no hay instancia asociada).

---

## 👤 Metodos de instancia

Son los metodos comunes, que si requieren que un objeto exista para ser usados. Pueden acceder tanto a atributos como a metodos **de instancia** y **estaticos**.

```java
public class Persona {
    private String nombre;

    public void saludar() {
        System.out.println("Hola, soy" + nombre);
    }
}
```

Uso:

```java
Persona p = new Persona();
p.saludar();
```

## 🧠 ¿Cuando usar cada uno?

| Tipo de metodo | Cuando usarlo |
|----------------|---------------|
| `static` | Para funciones auxiliares, calculos globales, sin depender de atributos de objeto. Ej: `Math.sqrt()`. |
| de instancia | Cuando la logica necesita acceder o modificar el estado del objeto actual. |
