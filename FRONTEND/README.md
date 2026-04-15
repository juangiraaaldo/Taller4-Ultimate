# 📚 Biblier — Tienda Virtual de Libros

> Proyecto desarrollado con **React + Vite** y **Material UI (MUI v6)** como parte del Taller 4 del programa de formación SENA.

---

## 📋 Descripción

**Bibliber** es una aplicación web moderna diseñada como una landing page interactiva y una plataforma de gestión para una tienda de libros. El proyecto integra una interfaz de usuario pulida con el consumo de datos de APIs externas y un sistema de autenticación.

El proyecto fue construido con el objetivo de practicar el uso de **React Router**, **componentes reutilizables** y la librería de estilos **Material UI**, integrando conceptos de diseño responsivo y gestión de estado y el **Consumo Api**.

---

## ✨ Características Principales

- 🏠 **Landing Page** con banner de bienvenida, sección de Género y tarjetas informativas
- 🛒 **Catálogo de libros** con 20 libros, precio, descuento, categoría 
- 🛒 **Consumo de Api** Comsumiendo Api de Rik And Morty
- 🔗 **Navegación con React Router** usando `HashRouter` y `NavLink` con estilos activos
- 📱 **Diseño responsivo** adaptado para móvil, tablet y escritorio
- 🎯 **Inicio de Sesioón** con el register

---

## 🖥️ Interfaz Gráfica

### Header
- Logo con imagen personalizada y nombre **Bibliber**
- Links de navegación con efecto `active` y hover en color `rgb(69, 49, 116)`
- Incio de sesión

### Página de Inicio (Content)
- Banner con imagen de fondo, capa oscura y texto superpuesto
- Sección **Género** con 4 cards informativas con hover animado

### Página de Libros
- Grid de 4 columnas con 20 libros
- Cada card muestra: imagen, categoría, título, precio con descuento
- Hover con efecto `scale`

### Página API 
- Página que consume la Api de Rik And Morty

### Footer
- 4 columnas: Logo, Navegación, Soporte, Recibe Ofertas
- Links con hover en color rosa
- Copyright al pie

---

## 🏗️ Arquitectura del Proyecto

```
Ultimate/
|
├── FRONTEND
|      ├── public/
|      │   └── imgs/                  # Imágenes del proyecto (banner, logo, juegos, etc.)
|      |
|      ├── src/
|      │   ├── libros/
|      │   │   └── components/
|      |   |       ├── Pages
|      |   |       ├── hooks
|      │   │       └── Libros.jsx   # Catálogo de libros
|      |   |
|      │   ├── api/
|      |   |   ├── pages
|      |   |   ├── hooks
|      |   |   ├── services/
|      │   │   |    └── rickandMortyService.js   
|      |   |   |
|      │   │   └── components/
|      |   |       ├── Register.jsx
|      |   |       ├── Login.jsx
|      │   │       └── Api.jsx    # Página de Api
|      |   | 
|      │   └── layout/
|      |      ├── pages
|      |      ├── hooks
|      │      └── components/
|      │          ├── Header.jsx     # Barra de navegación
|      │          ├── Footer.jsx     # Pie de página
|      │          └── Content.jsx    # Página de inicio
|      |   
|      ├── App.jsx                # Rutas principales y estado global
|      ├── main.jsx               # Punto de entrada
|      ├── .gitignore
|      ├── index.html
|      ├── vite.config.js
|      ├── README.md
|      └── package.json
|
└── BACKEND
      ├── src/
      │   ├── config/
      |   |      └── db.js
      |   |
      |   ├── controllers/
      |   |      └── auth.controller
      |   |
      |   ├── middlewares/
      |   |      └── auth.middleware.js
      |   |
      |   ├── models/
      |   |      └── User.js
      |   |
      |   ├── routes/
      |   |      └── auth.routes.js
      |   |
      |   ├── utils/
      |   |      └── generateToken.js
      |   |
      |   └── app.js
      |           
      ├── .env
      ├── package.json
      └── server.js

### Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 18+ | Framework principal |
| Vite | 5+ | Bundler y servidor de desarrollo |
| Material UI (MUI) | v6 | Componentes de interfaz |
| React Router DOM | v6 | Navegación entre páginas |
| gh-pages | 6+ | Despliegue en GitHub Pages |

```

---

## 👨‍💻 Datos del Autor

| Campo | Información |
|---|---|
| **Nombre** | Juan José Giraldo |
| **Programa** | Análisis y Desarrollo de Software |
| **Institución** | SENA |
| **Trimestre** | 3° Trimestre |
| **Año** | 2026 |
| **Proyecto** | Taller 3 — React + MUI |

### Contacto

- 📧 Email: *(correo del autor)*
- 🐙 GitHub: *(usuario de GitHub)*
- 🚀 Deploy: [GitHub Pages](https://TuUsuario.github.io/Taller4-Ultimate)

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/TuUsuario/Taller4-Ultimategit

# Entrar al directorio
cd Ultimate

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos para el programa de formación del **SENA**.  
© 2026 Juan José Giraldo — All Rights Reserved :|