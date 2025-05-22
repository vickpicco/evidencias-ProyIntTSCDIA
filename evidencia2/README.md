# Proyecto Integrador - Evidencia II

## Ejecución

1. Cloná el repositorio.
2. Abrí la terminal y ubicáte en la carpeta del proyecto.
3. Instalá las dependencias con:
    ```bash
    npm install
    ```
4. Iniciá el proyecto con:
    ```bash
    npm run dev
    ```
### Estadísticas agregadas
- Producto más caro (nombre y precio).
- Producto más barato (nombre y precio).
- Precio total de los productos filtrados.

### Estructura del proyecto
- **ProductList**: componente que muestra la grilla de productos. Recibe como props los productos filtrados.
- **StatsPanel**: componente  que muestra las estadísticas. Recibe los productos filtrados como props y calcula dinámicamente los valores.
- **Header**: componente que contiene el encabezado.