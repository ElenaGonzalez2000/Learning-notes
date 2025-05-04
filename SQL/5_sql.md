# 💻 Lenguaje SQL (Structured Query Language)

## 📌 ¿Qué es SQL?

**SQL** (Structured Query Language) es un lenguaje estándar para crear, consultar y manipular bases de datos **relacionales**.
Todos los sistemas como MySQL, PostgreSQL o SQL Server usan SQL como base, aunque pueden tener pequeñas diferencias de sintaxis.

---

## 🧩 Estrucutra de SQL

SQL se divide en dos grandes grupos de instrucciones:

| Tipo | ¿Para que sirve? |
|------|------------------|
|🧱 DDL | *Data Definition Language* → definir estructura (tablas, bases) |
|🧹 DML | *Data Manipulation Language* → trabajar con los datos (insertar, leer, modificar, borrar) |

---

## 🧱 Instrucciones DDL (Definicion de Datos)

### 🏗️ Crear una base de datos

```sql
CREATE DATABASE empresa;
```

### ✅ Usar una base de datos

```sql
USE empresa;
```

### 🧱 Crear una tabla

```sql
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    email VARCHAR(50)
);
```

### Modificar tabla

```sql
ALTER TABLE cliente ADD telefono VARCHAR(20);
```

### 🧨 Eliminar tabla

```sql
DROP TABLE cliente;
```

---

## 🧹 Instrucciones DML (Manipulación de Datos)

### ➕ Insertar datos

```sql
INSERT INTO cliente (nombre, email) VALUES ('Elena', 'elena@mail.com');
```

### 🔍 Consultar datos

```sql
-- seleccion de todos los datos en la tabla cliente
SELECT * FROM cliente;
-- seleecion de datos con un condicional
SELECT nombre FROM cliente WHERE id_cliente = 1;
```

### ✏️ Actualizar datos

```sql
UPDATE cliente SET email = 'nuevo@mail.com' WHERE id_cliente = 1;
```

### ❌ Eliminar registros

```sql
DELETE FROM cliente WHERE id_cliente = 1;
```

---

## 🔎 Consultas útiles

### Condicionales (`WHERE`)

```sql
SELECT * FROM producto WHERE precio > 1000;
```

### 📊 Ordenar resultados

```sql
SELECT * FROM producto ORDER BY precio DESC;
```

### 📌 Filtrar sin repetir (`DISTINCT`)

```sql
SELECT DISTINCT categoria FROM producto;
```

### 🔗 Combinar tablas (`JOIN`)

```sql
SELECT v.fk_id_cliente, c.nombre, p.descripcion
FROM ventas v
JOIN cliente c ON v.fk_id_cliente = c.id_cliente
JOIN producto p ON v.fk_id_producto = p.id_producto;
```

### 🧮 Agrupar y contar (`GROUP BY`)

```sql
SELECT categoria, COUNT(*) AS cantidad
FROM producto
GROUP BY categoria;
```

---

## 🧪 Ejemplo completo

```sql
-- Crear base y tablas
CREATE DATABASE libreria;
USE libreria;

CREATE TABLE autor(
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100)
)

CREATE TABLE libro(
    id_libro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    fk_id_autor INT,
    FOREIGN KEY (fk_id_autor) REFERENCES autor(id_autor)
);

-- Insertar registros
INSERT INTO autor (nombre) VALUES ('Cortázar'), ('Borges');
INSERT INTO libros (titulo, fk_id_autor) VALUES ('Rayuela', 1), ('Fucciones', 2);

-- Consultar libros y sus autores

SELECT libro.titulo, autor.nombre
FROM libro
JOIN autor ON libro.fk_id_autor = autor.id_autor;

```

---

## 🧠 Tips para MySQL

✅ Termina cada instrucción `;`
✅ Nombres de tablas y campos: mejor en minúscula y sin espacios
✅ Usá `AUTO_INCREMENT` para claves numéricas
✅ Cuidá las relaciones: definí claves foráneas donde sea necesario
