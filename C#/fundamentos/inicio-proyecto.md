# Iniciar un proyecto con C# y .NET

## 🧰 Crear una aplicacion de consola

Para crear un nuevo proyecto de tipo consola:

```bash
dotnet new console -n NombreDelProyecto
```

- `console`: tipo de proyecto
- `-n NombreDelProyecto`: nombre del proyecto y de la carpeta

## Abrir el proyecto en VS Code

```bash
code NombreDelProyecto
```

## Compilar y ejecutar

```bash
dotnet build     // compila el proyecto
dotnet run       // ejecuta la aplicacion
```

## Mostrar mensajes en consola

```csharp
Console.WriteLine("Hola mundo");   //con salto de linea
Console.Write("Hola");             // sin salto de linea
```
