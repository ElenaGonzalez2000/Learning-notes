# 🧭 Índices en Bases de Datos

Los índices son estructuras que permiten **acceder a los datos de forma más eficiente**. Son especialmente útiles cuando trabajamos con **grandes volúmenes de datos**, ya que permiten evitar el escaneo completo de la tabla para encontrar un valor específico.

## 🚀 ¿Para qué sirven?

- Mejoran la **velocidad de lectura** en las consultas (especialmente en las cláusulas `WHERE`, `JOIN`, `ORDER BY`).
- Se comportan como **punteros** que permiten ubicar rápidamente los registros.
- ⚠️ No todo es ventaja: cada vez que se inserta, actualiza o elimina un registro, **los índices deben actualizarse**, lo que puede ralentizar estas operaciones.

📌 **Recomendación**: no crear un índice para cada columna. Lo ideal es encontrar un equilibrio entre velocidad de lectura y rendimiento general del sistema.

---

## 🧩 Tipos de índices

| Tipo de índice   | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Clave primaria**   | Identifica de forma única cada fila. No admite valores `NULL` ni duplicados. |
| **Clave foránea**    | Hace referencia a una columna que es clave primaria de otra tabla.         |
| **Índice único**     | Garantiza que los valores de una columna sean únicos. Permite valores `NULL`. Ej: dni. |
| **Valores repetidos**| Útil para búsquedas en columnas con muchos valores duplicados. Ej: categoría. |
| **Índice compuesto** | Utiliza varias columnas. Ej: (apellido, nombre) permite buscar por apellido o ambos, pero no solo por nombre. |
| **Texto completo**   | Optimiza búsquedas dentro de campos como texto (TEXT, CHAR, VARCHAR). Ej: descripción. |
| **Funcionales**      | Desde MySQL 8.0.12, permite indexar expresiones o funciones. Ej: `LOWER(nombre)` para búsquedas insensibles a mayúsculas. |

---

## 🌳 Estructura interna: Árboles B (B-Trees)

MySQL implementa la mayoría de los índices con **árboles B**, que son estructuras balanceadas que permiten acceder rápidamente a los datos.
Ejemplo:

- Si buscamos el nombre 'Ava' en una tabla con muchos nombres, un índice B-tree evita revisar cada fila y sigue un **camino ordenado** hasta llegar al valor deseado.

---

## 🛠️ Sintaxis y ejemplos en MySQL

### 🟡 Índice primario (PRIMARY KEY)

- Solo puede haber uno por tabla.
- No admite valores `NULL` ni duplicados.

```sql
CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50)
);
```

Si la tabla ya existe:

```sql
ALTER TABLE cliente ADD PRIMARY KEY (id_cliente);
```

---

### 🔵 Índice ordinario (INDEX)

- Mejora el tiempo de búsqueda sin restricciones adicionales.

```sql
CREATE INDEX idx_phone ON customer (phone);
```

---

### 🟣 Índice único (UNIQUE)

- Similar a la `PRIMARY KEY`, pero permite más de uno por tabla y admite valores `NULL`.

```sql
CREATE UNIQUE INDEX idx_email ON customer(email);
```

---

### ⚪ Índice de texto completo (FULLTEXT)

- Útil para buscar palabras/frases dentro de campos largos de texto.

```sql
CREATE FULLTEXT INDEX idx_name ON customer(name);

SELECT * FROM customer
WHERE MATCH(name) AGAINST('ava');
```

---

### 🟢 Índice con múltiples columnas

- Ideal cuando se hacen búsquedas por varias columnas combinadas.

```sql
CREATE INDEX idx_apellido_nombre ON cliente(apellido, nombre);
```

🔸Sirve para buscar por apellido o por apellido + nombre, **pero no por** nombre **solo**.

---

### 👁️ Ver los índices existentes

```sql
SHOW INDEX FROM nombre_tabla;
-- También se puede usar: SHOW INDEXES o SHOW KEYS
```

---

## 🧪 Optimización y buenas prácticas

- ⚖️ Evita el exceso de índices: cada índice ocupa espacio y se actualiza con cada operación de escritura.
- 📊 Usa `EXPLAIN` para analizar cómo se ejecuta una consulta y si aprovecha los índices:

```sql
EXPLAIN SELECT nombre FROM cliente WHERE pais = 'Argentina';
```

---

## 📈 Impacto en el Rendimiento y Buenas Prácticas

Aunque los índices mejoran el rendimiento de las consultas, **no siempre conviene usarlos indiscriminadamente**. A medida que una base de datos crece, también lo hace el costo de mantener actualizados los índices con cada inserción, eliminación o actualización.

⚠️**Muchos índices pueden aumentar el uso de CPU y operaciones de E/S** (entrada/salida), lo que implica más trabajo para el sistema operativo al leer o escribir datos en el disco.

Por eso, **hay que evaluar bien cuándo conviene crear un índice** y en qué columnas realmente vale la pena.

---

### 🧠 Optimización de consultas: tips prácticos

A continuación, algunos consejos fundamentales para mejorar el rendimiento de tus consultas SQL:

#### ❌ Evita `SELECT * FROM`

Usar `SELECT *` trae todas las columnas de una tabla, incluso si no las necesitas. Esto puede generar:

- Mayor consumo de memoria.
- Retrasos en la ejecución.
- Problemas de mantenimiento si la estructura de la tabla cambia.

**📌 Ejemplo:**

```sql
-- ❌ Mal uso
SELECT * FROM cliente;

-- ✅ Mejor uso
SELECT id_cliente, nombre, email FROM cliente WHERE id = 1;
```

---

#### 📉 Cuidado con `ORDER BY` y `DISTINCT`

Ambas cláusulas son útiles, pero:

- `ORDER BY` fuerza al motor a **ordenar todos los resultados**.
- `DISTINCT` elimina duplicados, pero **requiere comparar todos los valores**.

➡️ En tablas grandes, estas operaciones pueden afectar seriamente el rendimiento. Úsalas solo si son necesarias para la lógica de negocio.

---

#### ⚙️ Evita funciones en `WHERE`

Usar funciones dentro de la cláusula `WHERE` **hace que el motor evalúe esa función en cada fila**. Además, si la columna tenía un índice, **se desactiva**, porque la función cambia su forma.

📌 Ejemplo problemático:

```sql
-- ❌ Esto hace que no se use el índice
SELECT * FROM cliente WHERE YEAR(fecha_nacimiento) = 2000;
```

En cambio, calcula previamente el valor y compáralo directamente:

```sql
-- ✅ Mejor enfoque
SELECT * FROM cliente WHERE fecha_nacimiento BETWEEN '2000-01-01' AND '2000-12-31';
```

---

#### 🚫 Evita el exceso de índices

Crear muchos índices:

- ✅ Acelera la lectura.
- ❌ **Ralentiza escrituras y actualizaciones.**
- ❌ Ocupa más espacio en disco.

➡️ Solo indexa columnas que **realmente se usen en consultas frecuentes** (`WHERE`, `JOIN`, `ORDER BY`, etc.).

---

#### 🔍 Usa `EXPLAIN` para analizar tus consultas

Con `EXPLAIN` puedes ver cómo MySQL ejecuta tu consulta y si está usando un índice correctamente.

📌 Ejemplo:

```sql
EXPLAIN SELECT * FROM cliente WHERE pais = 'Argentina';
```

Esto te va a mostrar si se está usando el índice sobre `pais` o si se está haciendo un escaneo completo de la tabla (`type = ALL`). Si no hay índice sobre `pais`, puedes crearlo así:

```sql
CREATE INDEX idx_pais ON cliente(pais);
```

Luego de esto, al volver a ejecutar `EXPLAIN`, deberías ver un cambio (por ejemplo, `type = ref`) indicando una mejora en la performance.

---

### Conclusión

- Los índices son **herramientas poderosas**, pero hay que usarlas **con criterio y planificación.**
- Evita prácticas que cargan innecesariamente las consultas.
- Mide y analiza siempre con `EXPLAIN` si quieres sacarle el mayor provecho a tu base de datos.
- **No se trata de tener más índices, sino los adecuados.**
