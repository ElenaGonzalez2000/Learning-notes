# Tipos de Datos en Java

Java es un lenguaje fuertemente tipado y estatico, lo que significa que cada variable debe declararse con su tipo.

## 🧱 Tipos de Datos Primitivos

Java tiene 8 tipo primitivos:

| Tipo      | Tamaño | Ejemplo                 |
| --------- | ------ | ----------------------- |
| `byte`    | 8 bit  | `byte b = 100;`         |
| `short`   | 16 bit | `short  s = 30000;`     |
| `int`     | 32 bit | `int n = 100000;`       |
| `long`    | 64 bit | `long l = 10000000000L` |
| `float`   | 32 bit | `float f = 5.6f;`       |
| `double`  | 64 bit | `double d = 5.6;`       |
| `char`    | 16 bit | `char c = "a";`         |
| `boolean` | 1 bit  | `boolean flag = true;`  |

---

## 🧰 Tipos de Referencia (Clases y Objetos)

Incluyen:

- **String**

```java
String nombre = "Elena";
```

- **Arrays**

```java
int[] numeros = {1, 2, 3};
```

- **Objetos**

```java
Persona o = new Persona("Ana");
```

- **Clases envolventes (Wrapper Classes)**: permiten tratar tipos primitivos como objetos.

```java
Interger edad = 30;
Double salario = 1500.50;
```

## 📌 Autoboxing y Unboxing

Java convierte automaticamente entre tipos primitivos y sus envoltorios:

```java
int n = 10;
Interger objeto = n;   // autoboxing
int primitivo = objeto // unboxing
```
