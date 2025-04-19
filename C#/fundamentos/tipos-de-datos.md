# Tipos de Datos en CSharp

C# es un lenguaje fuertemente tipado y estatico. Cada variable debe declarar su tipo y el compilador verifica los tipos en tiempo de compilacion

## 🧱 Tipos de Datos Primitivos (Tipos por Valor)

|Tipo    | Tamaño | Ejemplo|
|-----   |--------|--------|
|byte    | 8 bit  | byte b = 255;|
|short   | 16 bit | short s = 32767;|
|int     | 32 bit | int i = 1000;|
|long    | 64 bit | long l = 123456789L;|
|float   | 32 bit | float f = 3.14f;|
|double  | 64 bit | double d = 3.1415;|
|decimal | 128 bit| decimal m = 1000.5m; (más preciso para finanzas)|
|char    | 16 bit | char c = 'A';|
|bool    | 1 bit  | bool activo = true;|

---

## 📦 Tipos por Referencia

Incluyen:

- **string**

```csharp
string nombre = "Elena";
```

- **object**

```csharp
object cualquier = 123; //puede almacenar cualqueir tipo
```

- **array**

```csharp
int[] numero = new int[] {1, 2, 3}
```

<!-- ver los tipos: clases, interfaces y delegados en otra seccion -->

---

## 🔁 Conversion entre tipos

```csharp
int numero = 123;
double convertido = numero;     // implicita
int truncado = (int)convertido  //explicita (cast)
```

## 🔤 Tipos Nullable

Los tipos primitivos no permiten `null`, pero se puede usar `?`:

```csharp
int? edad = null;
```
