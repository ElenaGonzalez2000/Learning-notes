# 💫 Abstraccion y Encapsulamiento

## 🔒 Encapsulamiento

El encapsulamiento protege los datos internos de un objeto para que no puedan ser modificados directamente desde afuera. Solo se pueden alterar mediante metodos controlados.

```csharp
public class Enemigo {
    private int vida = 100;

    public void RecibirDanio(int danio){
        vida -= danio;          // solo se puede modificar el valor de la propiedad con un metodo
    }

    public int ObtenerVida(){
        return vida;           // solo se ver el valor del dato con un metodo
    }
}
```

## 🎭 Abstraccion

La **abstraccion** consiste en mostrar solo la informacion esencial de un objeto, ocultando los detalles internos que no son necesarios para su uso.

> 📌 Ejemplo: En un video juego, sabemos que un boton "curar" cura, pero no sabemos como lo hace internamente.

🧪**Ejemplo:**

```csharp
public cass Cafetera {
    public void PrepararCafe() {
        CalentarAgua();
        MolerCafe();
        Console.WriteLine("☕ Café listo!")
    }

    private void CalentarAgua() {
        Console.WriteLine("🔥 Calentando agua...")
    }

    private void MolerCafe() {
        Console.WriteLine("💥 Moliendo café...")
    }
}
```

Desde afuera solo usamos `PrepararCafe()`, sin saber los pasos internos que ejecuta.

---

## 🧭 Enums

Un `enum` define un **conjunto de constantes** con nombres legibles, ideales para representar estados o roles

🎮 **Ejemlo**

```csharp
public enum Rol {
    Guerrero,
    Mago,
    Curador,
    Tanque,
    Asesino
}

public class Personaje {
    public Rol rol;

    public void MostrarRol() {
        Console.WriteLine($"Mi rol es: {rol}")
    }
}
```
