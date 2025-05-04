# 🧼 Normalización

## ¿Qué es la normalización?

La normalizacion es un proceso que se aplica a una base de datos para evitar **redundancia, anomalias de actualizacion** y mejorar la **integridad de los datos**.
  
Fue introducida por **Edgar F. Codd**, y se basa en cumplir una serie de **Formas Normales (FN)**.

---

## 🎯 Objetivo de la normalización

✅ Eliminar datos duplicados
✅ Organizar datos en **multiples tablas** relacionadas
✅ Evitar inconsistencias y facilitar el mantenimiento.
✅ Asegurar que cada dato este en el **lugar correcto**

---

## 🧠 Reglas clave

- Se aplican por niveles: 1FN → 2FN → 3FN
- Para estar en una FN, la tabla debe **cumplir con todas las anteriores**
- Si se rompe una regla, hay que **dividir la tabla** o **mover atributos**

---

## 🔑 Clave primaria y dependencia funcional

- Una **clave primaria** identifica de forma única cada fila.
- Un atributo **depende funcionalmente** de otro si su valor se determina a partir de otro.

Por ejemplo, si sé el `id_cliente`, puedo saber su `nombre` y `email`.
→ Entonces `nombre` y `email` dependen de `id_cliente`.

---

## 🧩 Primera Forma Normal (1FN)

### ✔️ Reglas

- No puede haber **grupos repetidos** o listas en una celda.
- Cada celda debe tener **un solo valor atómico.**

### ❌ Ejemplo incorrecto

| nro_factura | cliente | productos |
|-------------|---------|-----------|
| 1 | Juan Perez | mouse, teclado, monitor |

La columan `productos` tiene **múltiples valores** → ❌

### ✅ Solución (1FN aplicada)

| nro factura | cliente | productos |
|-------------|---------|-----------|
| 1 | Juan Perez | mouse |
| 1 | Juan Perez | teclado |
| 1 | Juan Perez | monitor |

---

## 🧩 Segunda Forma Normal (2FN)

### ✔️ Reglas (2FN)

- Cumplir 1FN
- Todos los atributos **no clave** deben depender de **toda la clave primaria** (no solo de una parte).

### ❌ Ejemplo

Tabla `detalle_venta(id_factura, id_producto, descripcion_producto, cantidad)`

- Clave primaria compuesta: `(id_factura, id_producto)`
- `descripcion_producto` depende solo de `id_producto`, no de la combinacion completa → ❌

### ✅ Solución (2FN aplicada)

Dividir la tabla:

- Tabla `detalle_venta(id_factura, id_producto, cantidad)`
- Tabla `producto(id_producto, descripcion_producto)`

---

## 🧩 Tercera Forma Normal (3FN)

### ✔️ Reglas (3FN)

- Cumplir 2FN.
- Ningun atributo no clave debe depender **transitivamente** de la clave primaria.

### ❌ Ejemplo mal usado

Tabla `venta(id_factura, id_cliente, nombre_cliente, domicilio_cliente)`

- `nombre_cliente` y `domicilio_cliente` dependen de `id_cliente`, no directamente de `id_factura` → dependencia transitiva → ❌

### ✅ Solución (3FN aplicada)

Crear una nueva tabla:

- Tabla `venta(id_factura, id_cliente)`
- Tabla `cliente(id_cliente, nombre_cliente, domicilio_cliente)`

---

## 🔄️ Reversibilidad

El proceso de normalizacion es **reversible**: podes volver a una anterior **sin pérdida de datos**, si lo hiciste bien.
👉🏻 Si al revertir te falta info, **normalizaste mal**.

---

## ⛓️‍💥 ¿Y la desnormalización?

En algunos casos reales (muchos datos, muchas consultas, rendimiento), se decide **desnormalizar:**

- Se duplican algunos datos **a proposito** para hacer consultas mas rapidas.
- Se usa en sistemas muy grandes, donde **performance > pureza.**

---

## 🧪 Mini resumen visual

| Forma Normal | Qué evita | Qué hacer si no se cumple |
|--------------|-----------|---------------------------|
| 1FN | Valores múltiples por celda | Separar en varias filas |
| 2FN | Dependencias parciales | Mover atributos a otra tabla |
| 3FN | Dependencias transitivas | Crear nuevas tablas intermedias |
