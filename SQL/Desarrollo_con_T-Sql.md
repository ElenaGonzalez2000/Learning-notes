# 🧩 Objetos de desarrollo en MySQL con T-SQL

Esta guía presenta un resumen completo y explicativo sobre objetos almacenados en bases de datos MySQL utilizando T-SQL, incluyendo procedimientos almacenados, funciones, triggers y vistas.

---

## 📌 Introducción general

Los **objetos almacenados** en una base de datos son estructuras que encapsulan lógica y consultas SQL para ser reutilizadas, mejorar el rendimiento y facilitar el mantenimiento del código. Incluyen:

- 🔁 **Procedimientos almacenados (Stored Procedures)**: ejecutan instrucciones sin devolver un valor directamente.
- 🧠 **Funciones (Functions)**: devuelven un valor y se pueden utilizar dentro de expresiones o consultas.
- ⛓️ **Disparadores (Triggers)**: reaccionan automáticamente ante eventos como `INSERT`, `UPDATE` o `DELETE`.
- 👁️‍🗨️ **Vistas (Views)**: consultas predefinidas que se comportan como tablas virtuales.
- ⏰ **Eventos programados**: permiten ejecutar tareas automáticamente en momentos definidos (no desarrollados en este apunte).

---

## 🔁 Procedimientos Almacenados

Un **procedimiento almacenado** es un conjunto de instrucciones SQL guardadas en el servidor. Permite encapsular lógica compleja que puede reutilizarse. No devuelve valores como una función, pero puede **modificar valores a través de parámetros** de salida.

### 🧱 Estructura básica

```sql
DELIMITER //
CREATE PROCEDURE listar_productos(IN categoria VARCHAR(50))
BEGIN
  SELECT * FROM productos WHERE tipo = categoria;
END //
```

Llamada:

```sql
CALL listar_productos('herramientas');
```

### ✏️ `DELIMITER`

Se utiliza para cambiar el carácter que delimita las sentencias (por defecto `;`) cuando el procedimiento contiene bloques `BEGIN...END`. Se puede usar `//`, `$$` u otro símbolo temporalmente.

---

### 🧾 Tipos de Parámetros

- `IN`: parámetro de **entrada**. Su valor es enviado al procedimiento, pero no se modifica internamente.
- `OUT`: parámetro de **salida**. El procedimiento modifica su valor y se puede recuperar al finalizar.
- `INOUT`: combina entrada y salida.

```sql
CREATE PROCEDURE obtener_total(IN categoria VARCHAR(50), OUT total INT)
BEGIN
  SELECT COUNT(*) INTO total FROM productos WHERE tipo = categoria;
END;

CALL obtener_total('ropa', @total);
SELECT @total;
```

🔹 Las variables precedidas con `@` son **de sesión** y permiten recuperar valores fuera del procedimiento.

---

## 🧮 Variables en MySQL

### 🔸 Variables locales

Se declaran dentro de un procedimiento, función o trigger usando `DECLARE` y solo son válidas dentro del bloque donde se declaran.

```sql
DECLARE total INT UNSIGNED;
```

### 🔸 Variables definidas por el usuario (de sesión)

Se identifican con `@` y son válidas mientras dure la sesión del usuario.

```sql
SET @total = 5;
SELECT @total;
```

### 🔸 Variables del sistema

Permiten configurar el comportamiento de MySQL a nivel global o de sesión.

```sql
SET GLOBAL max_connections = 200;
SET SESSION sql_mode = 'STRICT_ALL_TABLES';
```

### 🛠️ `SET` vs `DECLARE`

- `DECLARE` se usa para variables locales.
- `SET` se usa para asignar valores a variables (locales, de sesión o del sistema).

---

## 🧠 Funciones almacenadas

Una **función** en MySQL devuelve un único valor, y se puede usar dentro de una consulta SQL (`SELECT`).

### 📋 Características

- Todos los parámetros son de **entrada**.
- Debe incluir `RETURNS` para indicar el tipo de dato de salida.
- Se necesita declarar al menos una característica: `DETERMINISTIC`, `NO SQL`, `READS SQL DATA`.

#### `DETERMINISTIC`

Devuelve siempre el mismo resultado con los mismos parámetros.
Usar si: no hay consultas ni funciones como `NOW()`.

#### `NOT DETERMINISTIC`

Devuelve diferentes resultados con mismos parámetros.
Usar si: hay SELECTs, `RAND()`, `NOW()` o datos que cambian.

#### `NO SQL`

No se usa SQL en la función. Solo lógica pura.
Ideal para cálculos simples.

#### `READS SQL DATA`

Lee datos con SELECT pero no modifica.
Común en funciones que consultan datos.

#### `MODIFIES SQL DATA`

Modifica datos con `INSERT`, `UPDATE`, `DELETE`.
No se recomienda salvo casos específicos.

#### `CONTAINS SQL`

Contiene SQL pero no accede a tablas directamente.

```sql
DELIMITER $$
CREATE FUNCTION contar_productos(tipo VARCHAR(50))
  RETURNS INT UNSIGNED
  READS SQL DATA
BEGIN
  DECLARE total INT;
  SELECT COUNT(*) INTO total FROM productos WHERE tipo = tipo;
  RETURN total;
END $$
```

Uso:

```sql
SELECT contar_productos('ropa');
```

🔹 Las funciones se utilizan para **consultas más limpias** y **reutilización de lógica**.

---

## 🔄 Estructuras de control

Las funciones y procedimientos pueden incluir lógica como condicionales y bucles.

### ✅ Condicionales

```sql
IF x > 10 THEN
  SET y = 'alto';
ELSEIF x > 5 THEN
  SET y = 'medio';
ELSE
  SET y = 'bajo';
END IF;
```

O con `CASE`:

```sql
SET resultado = CASE
  WHEN nota >= 6 THEN 'Aprobado'
  ELSE 'Desaprobado'
END;
```

### 🔁 Bucles

```sql
WHILE contador < 5 DO
  SET contador = contador + 1;
END WHILE;
```

---

## ⛓️ Triggers (Disparadores)

Un **trigger** es un bloque de código que se ejecuta automáticamente cuando ocurre un evento sobre una tabla (`INSERT`, `UPDATE` o `DELETE`).

### 📌 Reglas clave

- Se definen como `BEFORE` o `AFTER`.
- Usan `NEW` (datos nuevos) o `OLD` (datos previos).
- No se puede modificar la misma tabla que activa el trigger.

### 📌 `NEW` y `OLD`

- `NEW.columna`: valor nuevo (para `INSERT` y `UPDATE`)
- `OLD.columna`: valor anterior (para `UPDATE` y `DELETE`)

```sql
CREATE TRIGGER validar_nota
BEFORE INSERT ON alumnos
FOR EACH ROW
BEGIN
  IF NEW.nota < 0 THEN SET NEW.nota = 0;
  ELSEIF NEW.nota > 10 THEN SET NEW.nota = 10;
  END IF;
END;
```

---

## 👁️‍🗨️ Vistas

Una **vista** es una consulta predefinida que actúa como si fuera una tabla.

Permite ocultar complejidad, mejorar seguridad y facilitar consultas frecuentes.

```sql
CREATE OR REPLACE VIEW resumen_productos AS
SELECT nombre, precio, SUM(cantidad) AS total_ventas
FROM productos p
LEFT JOIN ventas v ON p.id_producto = v.id_producto
GROUP BY p.id_producto;
```

Consultas sobre la vista:

```sql
SELECT * FROM resumen_productos;
```

---

## 🛠️ Modificación y mantenimiento

### 🔄 Modificar objetos

Procedimientos, funciones y triggers deben eliminarse para recrearse:

```sql
DROP PROCEDURE IF EXISTS listar_productos;
CREATE PROCEDURE ...
```

Las vistas se pueden modificar directamente:

```sql
CREATE OR REPLACE VIEW resumen_productos AS ...
```

### 🧹 Ver definición

```sql
SHOW CREATE PROCEDURE listar_productos;
SHOW CREATE FUNCTION contar_productos;
SHOW CREATE VIEW resumen_productos;
```

---

## ⚖️ Ventajas y Desventajas

### 🔁 Stored Procedures

✔️ Encapsulan lógica compleja  
✔️ Mejoran el rendimiento  
✔️ Reducen el tráfico entre cliente y servidor  
❌ Difíciles de testear o debuggear  
❌ El mantenimiento puede ser costoso

### ⛓️ Triggers

✔️ Automatizan tareas  
✔️ Garantizan reglas  
✔️ Utiles para auditoria  
❌ Ocultan lógica (si no se documentan)  
❌ Afectan rendimiento si se abusa

### 🧠 Funciones

✔️ Reutilizables dentro de consultas  
✔️ Ayudan a simplificar queries  
❌ Menor flexibilidad que los procedimientos  
❌ Solo devuelven un valor

### 👁️ Vistas

✔️ Ocultan la complejidad  
✔️ Restringen acceso a columnas sensibles  
❌ Pueden afectar el rendimiento  
❌ No permiten lógica condicional

---

## 🧭 ¿Cuándo usar cada uno?

- 🔁 **Stored Procedure**: cuando necesitás realizar operaciones múltiples (inserciones, validaciones, cálculos) y querés mantener lógica centralizada.
- 🧠 **Función**: cuando necesitás calcular o devolver un único valor dentro de una consulta.
- ⛓️ **Trigger**: cuando quieras que una acción se realice automáticamente ante eventos.
- 👁️‍🗨️ **Vista**: cuando necesitás simplificar el acceso a datos complejos o proteger parte de la estructura de la base.
