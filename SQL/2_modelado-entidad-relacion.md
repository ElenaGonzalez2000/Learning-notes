# 🧩 Modelo Entidad-Relacion (E-R)

## 📌 ¿Que es un modelo de datos?

Es una **abstraccion** que nos permite representar cómo se organizan y se relacionan los datos en una base de datos.
El mas conocido y usado es el Modelo Entidad-Relación, propuesto por Peter Chen en 1976.
Se utliza en la etapa de **diseño conceptual**, es decir, antes de crear las tablas en el sistema.

---

## 💠 Entidades

Una **entidad** representa un objeto del mundo real sobre el cual se quiere guardar información.

- Se nomban en singular: `Cliente`, `Producto`, `Usuario`
- Se pueden clasificar en:
  - **Entidad fuerte**: Tiene existencia propia. Ejemplo: `Alumno`, `Curso`, `Auto`.
  - **Entidad debil**: Depende de otra entidad para existir. Ejemplo: `DetalleVenta`, `Cuota`, `Historial`.

👉 *Una entidad debil no tiene clave primaria propia. Su existencia depende de una entidad fuerte.*

---

## 📜 Atributos

Los atributos son las propiedades o caracteristicas de una entidad.
Pueden ser:

| Tipo de atributo | Ejemplo |
|------------------|---------|
| Simple | `nombre`, `edad`|
| Compuesto | `nombre_completo` → `nombre` + `apellido` |
| Multivaluado | `telefonos`, `emails` (mas de un valor) |
| Nulo | `observaciones` (puede estar vacio) |
| Clave | Identificador único, como `DNI` o `Legajo` |
| Derivado | `edad` a partir de `fecha_nacimiento` |

---

## 📎 Relaciones

Una **relación** es un vinculo entre dos (o mas) entidades. Representan cómo interactuan o se asocian.
Ejemplo:

- Un **Alumno** se **inscribe** a un **Curso**.
- Un **Cliente** realiza una **Compra**.

### Las relaciones también pueden tener atributos

Por ejemplo: en una relación **Trabaja** entre **Empleado** y **Empresa**, puede haber un atributo **sueldo**.

---

## 🧮 Cardinalidad

La **cardinalidad** define cuantas veces una entidad puede participar en una relación:

| Cardinalidad | Ejemplo | Significado |
|--------------|---------|-------------|
| 1:1 | Persona-DNI | Una persona tiene un solo DNI, y un DNI solo una persona |
| 1:N | Cliente-Factura | Un cliente puede tener muchas facturas |
| N:M | Alumno-Materia | Un alumno cursa muchas materias y una materia tiene muchos alumnos |

*Nota: en los modelos fisicos (tablas), la relacion N:M se resulve con una tabla intermedia*

---

Diagram Entidad-Relacion (DER)

El **DER** es una representacion grafica del modelo. Se usan simbolos para representar:

- 🔹 Entidades: Rectangulos
- 🔗 Relaciones: Rombos
- 🏷 Atributos: Eclipses
- 🔑 Clave primaria: subrayado
- 📎 Entidades debiles: doble rectangulo
- 🔄 Relaciones debiles: doble rombo
- Cardinalidad: se indica al costado de cada entidad (`1`, `N`, etc.)

---

## 🧠 Ejemplo práctico

### Escenario

Una plataforma de prestamos entre perosnas.Los prestadores y deudores estan registrados, y los prestamos tienen detalles como importe, interes, etc.

**Entidades:**

- **Prestador**: id, nombre, dinero disponible
- **Deudor**: id, nombre, nivel de riesgo (A, B, C)
- **Prestamo**: id, importe, plazo, interes, finalidad

**Relaciones:**

- Un **Deudor** solicita un **Prestamos**
- Un **Prestador** aporta dinero a uno o varios prestamos

**Cardinalidades:**

- Un prestamo puede estar financiado por varios prestadores → N:M
- Un deudor puede tener varios prestamos → 1:N
