# Bases de CSharp

## 1. Variables, campos y propiedades

### 📦 Variables

Una variable es un espacio de memoria donde se guarda un dato. Sirve para almacenar información que puede cambiar mientras el programa se ejecuta.

```csharp
int edad = 25;
string nombre = "María";
```

En este caso, `edad` y `nombre` son variables que guardan datos (un número y una cadena de caracteres).

---

### ⭕ Campos

Un campo es una variable que se declara dentro de una clase y representa una parte del "estado interno" de un objeto. Suelen ser privados para proteger datos y no se accede a ellos directamente, sino a través de metodos.

```csharp
class Persona {
    private string nombre; //campo privado
    private int edad;     // campo privado
}
```

Estos campos están dentro de la clase `Persona` y no se puede acceder a ellos directamente desde afuera.

---

### ✅ Propiedad(Property)

Una propiedad es como una puerta controlada que permite leer o modificar el valor de un campo, utilizando métodos especiales llamados getters y setters. Gracias a esto, se puede aplicar lógica al acceder o cambiar los datos.

```csharp
class Persona {
    private int edad;

    public int Edad {
        get { return edad; }
        set{
            if (value >= 0) {
                edad = value;
            } else {
                Console.WriteLine("La edad ingresada no es valida");
            }
        }
    }
}
```

Aca la propiedad `Edad` permite acceder o modificar el campo `edad` de forma segura. Ejemplo:

```csharp
Persona p = new Persona();
p.Edad = 24;               // usa setter
Console.WriteLine(p.Edad) // usa getter
```

📌 **Nota:** Si no necesitás aplicar ninguna lógica al acceder o modificar el valor, podés usar una **propiedad autoimplementada**, sin necesidad de declarar el campo por separado. C# lo hace por vos automáticamente:

```csharp
public int Edad { get; set; }
```

Esto crea automáticamente un campo privado "oculto" y te permite acceder a él como si lo hubieras definido vos.

---

## 2. Expresiones, declaraciones y bloques

### ✨ Expreciones

Una **expresión** es cualquier combinación de variables, valores y operaciones que produce un resultado.

```csharp
int x = 5 + 3;
```

En este caso, `5 + 3` es una expresión que devuelve `8`. Tambien puede ser solo un valor o una variable:

```csharp
42                      // valor literal
nombre                 // variable
nombre + "!!!"        // expresión con operador 
```

---

### 🗒️ Declaraciones

Una *declaración* (o instrución) indica una acción específica. Por ejemplo:

- Crear una variable
- Llamar a un metodo
- Definir un bucle o una estructura condicional

```csharp
ind edad = 25;              // declaración de variable
Console.WriteLine(edad);   // declaración de método
```

🔍 A diferencia de las expreciones, **no siempre devuelven un valor.**

---

### 🧱 Bloques

Un **bloque** es un conjunto de declaraciones y/o expreciones agrupadas como una unidada de ejecución. En C#, los bloques se delimitan con llaves `{ }`.

```csharp
{
    int x = 10; 
    Console.WriteLine(x * 2);
}
```

Estos bloques se usan, por ejemplo, en condicionales, funciones, bucles, etc.

```csharp
if (x > 0){
    Console.WriteLine("Positivo");
}
```

---

## 3. Control de Flujo

El **control de flujo** pemite que un programa **tome decisiones y repita instrucciones** dependiendo de ciertas condiciones. Gracuas a esto, podemos construir programas dinamicos que se adapten a distintas situaciones.

### 🔷 Condicionales

Las estructuras condicionales permiten que el programa **decida que bloque de codigo ejecutar** dependeiendo de si se cumple o no una condición.

#### `if`

Ejecuta un bloque de codigo si la condición es verdadera.

```csharp
ind edad = 18;

if (edad >= 18) {
    Console.WriteLine("Eres mayor de edad.");
}
```

#### `else`

Ejecuta un bloque alternativo si la condición del `if` no se cumple.

```csharp
if (edad >= 18) {
    Console.WriteLine("Eres mayor de edad.");
} else {
    Console.WriteLine("Eres menor de edad.");
}
```

#### `else if`

Permite agregar condicionales adicionales si el `if` inicial no se cumple.

```csharp
if (edad < 13) {
    Console.WriteLine("Niño/a");
} else if (edad < 18) {
    Console.WriteLine("Adolescente");
} else {
    Console.WriteLine("Adulto");
}
```

#### `switch`

Es util cuando queremos coparar una variable contra varios valores posibles, Funciona bien cuando hay multiples opciones especificas.

```csharp
int dia = 3;

switch (dia) {
    case 1:
        Console.WriteLine("Lunes");
        break;
    case 2:
        Console.WriteLine("Martes");
        break;
    case 3:
        Console.WriteLine("Miércoles");
        break;
    default: //si el valor no es ninguna opcion disponible 
        Console.WriteLine("Otro día");
        break;
}
```

---

### ➰ Bucles

Los bucles permiten **repetir bloques de codigo** mientras se cumpla una condición, o por una cantidad determinada de veces.

#### `for`

Se utiliza cuando sabemos cuantas veces queremos repetir un bloque.

```csharp
for (int i = 0; i < 5; i++) {
    Console.WriteLine("Repetición: " + i);
}
```

#### `while`

Reptire un bloque mientras una condicion se siga cumpliendo.

```csharp
int contador;

while(contador < 5){
    Console.WriteLine("Contador: " + contador);
    contador++;
}
```

📌 Resumen visual

| Estructura | Uso principal |
|------------|----------------|
| `if` / `else` / `else if` | Ejecutar distintos bloques según condiciones |
| `switch` | Elegir entre múltiples opciones según un valor |
| `for` | Repetir un bloque un número definido de veces |
| `while` | Repetir un bloque mientras se cumpla una condición |

---

## 4. Métodos en CSharp

Un **método** es una función asociada a una **clase u objeto**. Representa una acción que ese objeto puede realizar. Son una de las piezas clave de la programación orientada a objetos porque permite **definir comportamientos** y **modificar el estado interno** de los objetos.

### ❗¿Para que se usan los métodos?

- Encapsular lógica (hacer que una tarea este contenida en un solo lugar).
- Reulitizar código.
- Ordenar mejor un programa.
- Interactuar con otroa objetos o modificar el propio estado interno.

En C#, **todas las instrucciones deben estar dentro de un metodo.** No se puede tener código "suelto" como en otros lenguajes.

---

#### 🧩 Estructura de un método

```csharp
TipoDeRetorno NombreDelMetodo(TipoDeParametro parametro){
    // lógica del método
    return valor; // si no es void 
}
```

---

#### 🔁 Tipo de retorno

El tipo de retorno indica que tipo **de dato devuelve** el método al dinalizar su ejecución. Puede ser cualquier tipo de dato como `int`, `string`, `bool`, etc. Si no se desea que el método devuelva nada. se utliza `void`.

```csharp
int Sumar(int a, int b) {
    return a + b;
}
```

---

#### 📥 Parámetros

Son **valores que se le pasan al método** para que trabaje con ellos. Se declaran dentro de los paréntesis y se deben definir con su tipo y nombre.

```csharp
void Saludar (string nombre){
    Console.WriteLine("Hola, " + nombre);
}
```

---

### ⚙️ Ejemplo completo

```csharp
class Calculadora {
    // Método que devuelve un número
    public int Multiplicar(int a, int b) {
        return a * b;
    }

    // Método que no devuelve nada
    public void MostrarMensaje(){
        Console.WriteLine("Método ejecutado");
    }
}
// Uso:
Calculadora calc = new Calculadora()
int resultado = calc.Multiplicar(3, 5);

Console.WriteLine("Resultado: " resultado);
calc.MostrarMensaje();
```

---

## 5. Modificadores de Acceso en CSharp

Los modificadores de acceso so palabras clave que nos permiten controlar quien peude ver o utilizar las clases, metodos, campos y propiedades dentro de nuestro código.
Sirven para proteger los datos y la lógica interna de una clase, permitiendo acceso solo donde sea necesario.

### 🛡️¿Por qué son importantes?

- Ayudan a encapsular los datos.
- Previenen que otras clases modifiquen o accedan a cosas que no deberian.
- Facilitan el mantenimiento y la seguridad del código.

---

### 🔎 Tipos de modificadores

| Modificador | ¿Dónde se puede acceder?                                   | Ejemplo                     |
|-------------|-------------------------------------------------------------|-----------------------------|
| `public`    | Desde **cualquier clase o lugar**                           | Accesible desde fuera       |
| `private`   | Solo desde **dentro de la clase donde fue declarado**       | Oculto fuera de la clase    |
| `protected` | Desde la **misma clase** y sus **subclases (herencia)**     | Útil en jerarquías de clases|

---

### 🧪Ejemplo Practico

```csharp
class Persona {
    public string Nombre;           // Accesible desde cualquier lugar
    private int edad;              // Solo accesible desde dentro de la clase
    protected string documento;   // Accesible desde esta clase y las que hereden

    public void MostrarEdad(){
        Console.WriteLine("Edad: " + edad); // valido
    }
}

class Empleado : Persona {
    public void MostrarDocumento() {
        Console.WriteLine("Doc: " + documento): //valido, porque es heredado
    }
}

class Program {
    static void Main() {
        Persona p = new Persona();
        p.Nombre = "Ana";    // ✅ publico, accesible
        p.edad = 30;        // ❎ Error: es privado
        p.documento = 123; // ❎ Error: protegido, no es accesible desde aca 
    }
}
```

---

#### 🔴 Resumen

- 🔓 public ⇾ acceso total
- 🔐 private ⇾ solo dentro de la clase
- 🧬 protected ⇾ adentro de la clase y las que heredan
