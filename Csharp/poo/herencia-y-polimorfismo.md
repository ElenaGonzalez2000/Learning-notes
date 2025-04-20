# 🧬 Herencia y Polimorfismo

En el mundo real, muchos objetos comparten caracteristicas. En POO usamor **herencia** para evitar escribir el mismo codigo muchas veces, y **polimorfismo** para que esos objetos puedan comportarse de formas distintas segun su tipo.

---

## 👨‍👩‍👧‍👦 Herencia

La **herencia** permite que una clase (hija) herede atributos y metodos de otra (padre). Asi podemos reutilizar codigo y definir relaciones jerarquicas entre clases.

```csharp
// Clase base
public class Animal {
    public string Nombre;

    public void Comer(){
        Console.WriteLine($"{Nombre} esta comiendo 🐾");
    }
}

// Clase hija
public class Perro : Animal {
    public void Ladrar () {
        Console.WriteLine("¡Guau guau! 🐶");
    }
}
```

```csharp
Perro miPerro = new Perro();
miPerro.Nombre = "Toby";
miPerro.Comer();   // Hereda de Animal
miPerro.Ladrar();  // Metodo propio
```

---

### 🎨 Clase abstractas

Una clase **abstracta** no se puede instancia, solo se puede heredar de ella.

```csharp
public abstract class Personaje {
    public int Vida;

    public abstract void Habilidad(); // No tiene implementacion, pero es obligatoria implementarla en las clases hijas
}
```

```csharp
public class Guerrero : Personaje {
    public override void Habilidad() {
        Console.WriteLine("⚔️ ¡Ataque con espada!");
    }
}
```

## 🎭 Polimorfismo

El **polimorfismo** permite que una misma accion se comporte de forma diferente segun el tipo del objeto que la ejecuta.

```csharp
Personaje p1 = new Guerrero();
p1.Habilidad();  // ⚔️ Ataque con espada

Personaje p2 = new Curador();
p2.Habilidad(); // ✨ Curacion en area
```

📌 Aunque ambos objetos son del tipo `Personaje`, cada uno ejecuta su propia version del metodo `Habilidad()` gracias al polimorfismo.

---

## 🧩 Interfaces

Una **interfaz** es como un contrato: define qué métodos debe tener una clase, pero no cómo se implementan.

```csharp
public interface IDibujable {
    void Dibujar();
}

public class Circulo : IDibujable {
    public void Dibujar() {
        Console.WriteLine("⚪ Dibujando un círculo");
    }
}
```

Las interfaces permiten **polimorfismo sin herencia directa.**

```csharp
IDbujable forma = new Circulo();
forma.Dibujar(); // ⚪ Dibujando un circulo
```

---

## 🔄️ Sobrescritura vs Ocultamiento

### 🔁 Sobrescritura (override)

Cuando una clase hija redefine un método heredado usando `override`.

```csharp
public class Personaje {
    public virtual void UsarHabilidad() {
        Console.WriteLine("🔮 Habilidad básica");
    }
}

public class Mago : Personaje {
    public override void UsarHabilidad() {
        Console.WriteLine("☄️ Lanzar bola de fuego")
    }
}
```

### 🕶️ Ocultamiento (new)

Cuando una clase hija **oculta** un metodo o campo con el mismo nombre usando `new`:

```csharp
public class Personaje {
    public int Vida = 100;
}

public class Guerrero : Personaje {
    public new int Vida = 150; // Ocultamiento del valor original
}
```

```csharp
Personaje p = new Guerrero();
Console.WriteLine(p.Vida);  // Muestra, 100, no 150

// forma correcta referenciando a la clase hija: 
Guerrero p = new Guerrero();
Console.WriteLine(p.Vida); // Muestra 150
```

📌 Esto no es polimorfismo, en este ejemplo al no declarar la variable `Vida` como abstracta ni como virtual, no puedo sobreescribir el valor original, con `new` solo oculto el valor original de la clase padre en la clase hija, y para acceder a ese valor debo referenciar a la clase hija en vez de a la clase padre.

---

## ✔️ Resumen

| Concepto | ¿Que permite? | Palabra clave |
|----------|---------------|---------------|
| Herencia | Reutilizar codigo de una clase base | `:` |
| Polimorfismo | Mismo metodo, diferentes comportamientos | `virtual`,`override` |
| Clases abstractas | Forzar implementacion en clases hijas | `abstract` |
| Interfaces | Definir contratos de comportamiento | `interface`,`implements` |
| Ocultamiento | Redefinir un miembro sin sobrescribirlo | `new` |
