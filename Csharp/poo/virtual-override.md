# 🧪 `virtual` y `override`

En C#, cuando queremos que un **metodo heredado puede ser personalizado** por las clases hijas, usamos los modificadores `virtual` y `override`. Esto es la base del **polimorfismo dinamico**.

---

## 🔁 `virtual`

El modificador `virtual` se usa en la clase **base (padre)** para indicar que un metodo puede ser **sobrescrito** por clases hijas.

```csharp
public class Animal {
    public virtual void HacerSonido() {
        Console.WriteLine("🐾 El animal hace sonido genérico");
    }
}
```

---

## ✏️ `override`

El modificador `override` se usa en una clase **derivada (hija)** para redefinir el comportamiento del metodo virtual.

```csharp
public class Gato : Animal {
    public override void HacerSonido() {
        Console.WriteLine("😺 Miau");
    }
}
```

---

## 🎯 ¿Como funciona?

```csharp
Animal a = new Gato();
a.HacerSonido();  // Resultado: 😺 Miau
```

Aunque la variable es de tipo `Animal`, como apunta a un `Gato`, se ejecuta la **version sobrescrita** del metodo. Eso es **polimorfismo en accion**.

---

## 📌 ¿Que pasa si no uso `override`?

```csharp
public class Perro {
    public void Ladrar() {
        Console.WriteLine("🐶 ¡Guau!")
    }
}
```

```csharp
public class Caniche : Perro {
    public void Ladrar(){
        Console.WriteLine("🐩 Ladrido suave")
    }
}
```

```csharp
Perro p = new Caniche();
p.Ladrar();  // 🐶 ¡Guau! → No se ejecuta la version de Caniche
```

🔴 Sin `virtual` y `override`, **no hay polimorfismo**. El metodo que se ejecuta depende del tipo de la **referencia**, no del objeto real.

---

## 📄 Comparacion de modificadores en metodos

|Modificador | ¿Dónde se usa? | ¿Permite polimorfismo? | ¿Tiene implementación? | ¿Obliga a sobrescribir? | Notas clave|
|------------|----------------|------------------------|------------------------|-------------------------|------------|
|virtual | Clase padre | ✅ Sí | ✅ Sí | ❌ No | El hijo puede usar override o no|
|override | Clase hija | ✅ Sí | ✅ Sí | 🔁 Depende del padre | Solo se usa si el padre tiene virtual o abstract|
|abstract | Clase padre (abstract) | ✅ Sí | ❌ No | ✅ Sí | Obliga a las clases hijas a implementar ese método|
|new | Clase hija | ❌ No | ✅ Sí | ❌ No | Oculta el método del padre, pero no lo reemplaza (sin polimorfismo)|
