# 📁 Modelo Relacional

## 📌 ¿Que es el modelo relacional?

El **modelo relacional** organiza los datos en tablas (llamadas tambien relaciones) formadas por filas (tuplas) y columnas (atributos).
Es el modelo mas usado en bases de datos y en la base de sistemas como MySQL.

---

## 🧾 Componentes clave

| Termino relacional | Significado común |
|--------------------|-------------------|
| Relacion | Tabla |
| Tupla | Fila (registro) |
| Atributo | Columna (campo) |
| Dominio | Conjunto de valores posibles para un atributo |

---

## 🧠 Propiedades del modelo relacional

1. Las tuplas no tienen orden: No importa en que orden esten las filas.
2. Los atributos no tienen orden: No importa si una columna esta al principio o al final.
3. No hay tuplas repetidas: Cada fila es unica (por eso usamos claves primarias).
4. Los valores son atómicos: Cada celda debe contener un unico valor (no listas, no objetos).

---

## 🔑 Claves

### Clave primaria (PK)

- Es el **identificador único** de cada fila.
- No puede repetirse ni ser nula.

### Claves candidatas

- Atributos que podrian ser clave primaria.
- Elegimos una como PK y el resto pueden ser alternativas

### Clave foránea (FK)

- Es un atributo que **referencia la clave primaria** de otra tabla.
- Sirve para establecer relaciones entre tablas.

```sql
-- Ejemplo de clave primaria y foránea

CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE venta(
    id_venta INT PRIMARY KEY,
    fecha DATE,
    fk_id_cliente INT,
    FOREIGN KEY (fk_id_cliente) REFERENCES cliente(id_cliente)
);
```

---

## 📊 Cardinalidad entre tablas

Las combinaciones se dan igual que en el modelo E-R.

- 1:1 → Una persona tiene un único DNI
- 1:N → Un cliente puede tener muchas facturas.
- N:M → Un alumno cursa muchas materias y viceversa (se resuelve con tabla intermedia)

---

## 🧠 Grado y cardinalidad de una tabla

- **Grado**: cantidad de columnas (atributos).
- **Cardinalidad**: cantidad de filas (tuplas).

---

## 🔢 Tipos de datos comunes en MySQL

| Tipo | Descripcion |
|------|-------------|
|`INT` | Enteros |
|`FLOAT`, `DOUBLE` | Numeros reales |
|`CHAR(n)` | Texto de longitud fija |
|`VARCHAR(n)` | Texto de longitud variable |
|`TEXT` | Texto largo |
|`BOOLEAN` | Verdadero o falso (`0` o `1`) |
|`DATE` | Fecha (`AAAA-MM-DD`) |
|`DATETIME` | Fecha y hora (`AAAA-MM-DD- hh-mm-ss`) |

---

## 💡 Ejemplo simple

### Tabla: `programadores`

| id | nombre | username | edad |
| -- | ------ | -------- | ---- |
| 1 | Elena | elena01 | 24 |
| 2 | German | german01 | 24 |

```sql
CREATE TABLE programadores (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    username VARCHAR(50),
    edad INT
);
```

## 🧩 Relaciones entre tablas

Supongamos que cada programador puede saber varios lenguajes, y cadad lenguaje puede ser conocido por varios programadores:

| Tabla intermedia: `programador_lenguaje` |  |
|------------------------------------------|--|
| id\_programador | id\_lenguaje |

Esto es una **relación N:M** representada por una tabla con dos claves foráneas.
