# 🐙 Guía Rápida de Git

Este archivo contiene los **comandos más útiles y frecuentes de Git**, ideal para tener a mano mientras trabajás en tus proyectos.

---

## 📦 Inicializar y configurar Git

```bash
git init
```

Inicializa un repositorio local en la carpeta actual.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@mail.com"
git config --list
```

Configura tu usuario global y verifica los datos configurados.

---

## 📁 Crear y gestionar repositorios

```bash
git clone <url>
```

Clona un repositorio remoto (GitHub, GitLab, etc.) a tu computadora.

```bash
git status
```

Muestra el estado actual del repositorio (archivos modificados, sin trackear, etc.).

```bash
git add <archivo>
git add .
```

Agrega archivos específicos o todos al área de *staging*.

```bash
git commit -m "Mensaje"
```

Crea un snapshot del proyecto con una descripción de los cambios.

```bash
git push
```

Sube tus cambios al repositorio remoto.

```bash
git pull
```

Actualiza tu repositorio local con los últimos cambios remotos.

---

## 🔁 Ramas (branches)

```bash
git branch
```

Lista todas las ramas existentes.

```bash
git branch <nombre>
```

Crea una nueva rama.

```bash
git checkout <nombre>
```

Cambia a una rama existente.

```bash
git checkout -b <nombre>
```

Crea y cambia a una nueva rama en un solo paso.

```bash
git merge <rama>
```

Fusiona una rama con la actual.

```bash
git branch -d <nombre>
```

Elimina una rama local.

---

## 🕓 Historial y logs

```bash
git log
```

Muestra el historial de commits detallado.

```bash
git log --oneline
```

Muestra los commits en una sola línea (más legible).

```bash
git show <hash>
```

Muestra información detallada sobre un commit específico.

---

## 🛠️ Undo y errores comunes

```bash
git restore <archivo>
```

Descarta los cambios del archivo, dejándolo como estaba en el último commit.

```bash
git restore --staged <archivo>
```

Quita un archivo del *staging area* sin borrar los cambios.

```bash
git reset --hard
```

Deshace todos los cambios no guardados (⚠️ cuidado, se pierden).

```bash
git reset --hard <hash>
```

Vuelve el proyecto a un commit anterior.

```bash
git revert <hash>
```

Crea un nuevo commit que revierte los cambios de un commit anterior.

---

## 🌐 Vincular a repositorios remotos

```bash
git remote -v
```

Muestra los repositorios remotos conectados.

```bash
git remote add origin <url>
```

Conecta tu proyecto local a un repositorio remoto (llamado `origin`).

```bash
git push -u origin main
```

Sube la rama `main` al remoto por primera vez y la deja vinculada.

---

## ⚙️ Alias útiles (opcional)

```bash
git config --global alias.s "status"
git config --global alias.lg "log --oneline --graph --all"
```

Alias para ahorrar tiempo al escribir comandos comunes.

---

## 🧠 Tips útiles

- `git stash`: guarda temporalmente los cambios sin hacer commit.
- `git diff`: compara los cambios realizados con la última versión.
- Usá un archivo `.gitignore` para excluir carpetas o archivos innecesarios (por ejemplo, `/node_modules` o `.env`).

---

## 📎 Recursos recomendados

- [Documentación oficial de Git](https://git-scm.com/doc)
- [Git Cheat Sheet PDF (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf)

---

> ✨ Este archivo fue creado como referencia personal por [@ElenaGonzalez2000](https://github.com/ElenaGonzalez2000) para usar mientras trabaja con Git en proyectos propios o profesionales.
