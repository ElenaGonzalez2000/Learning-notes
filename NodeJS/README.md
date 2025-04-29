# 🖥️ Node.js

## 🤔 ¿Qué es Node.js?

**Node.js** Es un entorno de ejecucion para JavaScript construido con el motor V8 de Chrome.
Permite ejecutar código JavaScript fuera del navegador, especialmente en servidores o aplicaciones de escritorio.

## 📌 ¿Para qué sirve?

- Crear servidores web y APIs.
- Desarrollar aplicaciones de tiepo real (como chats o juegos).
- Automatizar tareas y scripts.
- Crear herramientas de línea de comandos (CLI).

## 📥 ¿Comó instalar Node.js?

1. Entra en la página oficial: <https://nodejs.org/>
2. Descarga la versión recomendada (LTS) para tu sistema operativo.
3. Instalar siguiendo el asistente

> Al instalar Node.js tambien se instala **npm** (Node Package Manager), que sirve para gestionar paquetes y dependencias.

## ✅ Verificar la instalación

Abre una terminal y escribe:

```bash
node -v
```

Esto muestra la version de Node instalada.

Y para `npm`:

```bash
npm -v
```

## 🔰 Usar Node.js por primera vez

- **Crea un archivo JavaScript:**
  Por ejemplo, `app.js`:

```javascript
console.log("Hola desde Node.js!");
```

- **Ejecutarlo en la terminal:**

```bash
node app.js
```

## 👩‍💻 Comandos basicos

- Iniciar un nuevo proyecto:

```bash
npm init
```

(O más rápido, todo automático:)

```bash
npm init -y
```

- Instalar un paquete:

```bash
npm install nombre-paquete
```

- Ejecurtar un script desde `package.json`

```bash
npm run nombre-del-script
```
