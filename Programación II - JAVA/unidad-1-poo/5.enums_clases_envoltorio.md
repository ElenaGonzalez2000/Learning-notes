# 🗒️ ENUM y Clases Envoltorio (Wrapper) en Java

Java incorpora herramientas muy utiles para trabajar con valores constantes y tipos primitivos en forma de objetos. En esta seccion abordamos:

- El tipo especial `enum`, que permite definir listas de constantes.
- Las **clases envoltorios (wrapper)**, que permiten tratar tipos primitivos como objeto.

---

## 🔢 ENUM

Un `enum` (abreviacion de *enumeration*) es un tipo de dato especial que representa un conjunto fijo de constantes.

¿Para que sirve?

- Para representar valores constantes que no cambian (como dias de la semana, estados, tipos de cuenta, etc.)
- Mejora la legibilidad y evita errores por uso de valores arbitrarios.

Ejemplo basico:

```java
public enum Dia {
    LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
}
```

Uso:

```java
Dia hoy = Dia.MARTES;
System.out.println("Hoy es: " hoy);
```

Metodos utiles de enum:

| Metodo | Descripcion |
|--------|-------------|
| name() | Devuelve el nombre como String |
| ordinal() | Devuelve la posicion (indice) del enum, comenzando en 0 |
| toString() | Igual a name() salvo que puede ser sobrescrito |
| valueOf(String) | Convierte una cadena en una constante del enum |

### Enum con atributos y metodos

```java
public enum Prioridad {
    BAJA(1), MEDIA(2), ALTA(3);

    private int nivel;

    Prioridad(int nivel) {
        this.nivel = nivel;
    }

    public int getNivel() {
        return nivel;
    }
}
```

---
