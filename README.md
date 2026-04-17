# 📚 Bibliber — Tienda Virtual de Libros

Aplicación web fullstack desarrollada con **React + Material UI** en el frontend y **Node.js + Express + MongoDB** en el backend. Permite explorar un catálogo de libros, gestionar favoritos, agregar productos al carrito y consumir la API pública de Rick & Morty.

---

## ✨ Descripción y Características Principales

- 🏠 **Landing page** con banner, carrusel de portadas y sección de géneros literarios
- 📖 **Catálogo de libros** con precios, descuentos, categorías y sistema de favoritos/carrito
- 🔐 **Autenticación completa** con registro, login, JWT (access token + refresh token) y rutas privadas
- 📊 **Dashboard** para agregar libros al catálogo con formulario y panel de resumen
- 🛸 **Integración con API de Rick & Morty** con paginación de personajes
- 💾 **Persistencia local** con localStorage para libros extra y token de sesión
- 📱 **Diseño responsivo** con Material UI

---

## 🛠️ Tecnologías

### Frontend
| Tecnología | Uso |
|---|---|
| React 18 | Biblioteca principal de UI |
| Vite | Bundler y servidor de desarrollo |
| Material UI (MUI v6) | Componentes y estilos |
| React Router DOM | Navegación con HashRouter |
| Axios | Consumo de APIs |
| Context API | Estado global (Auth y Store) |

### Backend
| Tecnología | Uso |
|---|---|
| Node.js + Express | Servidor REST |
| MongoDB + Mongoose | Base de datos |
| JWT (jsonwebtoken) | Autenticación con access/refresh token |
| bcryptjs | Encriptación de contraseñas |
| dotenv | Variables de entorno |
| cors | Habilitación de CORS |

---

## ⚙️ Instalación

### Requisitos previos
- Node.js v18+
- MongoDB Atlas o local

### 1. Clonar el repositorio
```bash
git clone https://github.com/juangiraaaldo/Taller4-Ultimate.git
cd Taller4-Ultimate
```

### 2. Instalar dependencias del Backend
```bash
cd BACKEND
npm install
```

### 3. Configurar variables de entorno del Backend
Crea un archivo `.env` en la carpeta `BACKEND/`:
```env
PORT=4000
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/bibliber
JWT_SECRET=tu_secret_aqui
JWT_REFRESH_SECRET=tu_refresh_secret_aqui
```

### 4. Instalar dependencias del Frontend
```bash
cd ../FRONTEND
npm install
```

---

## ▶️ Ejecución

### Backend
```bash
cd BACKEND
npm run dev
```
El servidor corre en `http://localhost:4000`

### Frontend
```bash
cd FRONTEND
npm run dev
```
La app corre en `http://localhost:5173`

---

## 🗂️ Arquitectura del Proyecto

```
ULTIMATE/
├── BACKEND/
│   └── src/
│       ├── config/
│       │   └── db.js                  # Conexión a MongoDB
│       ├── controllers/
│       │   └── auth.controller.js     # Lógica de registro y login
│       ├── middlewares/
│       │   └── auth.middleware.js     # Verificación de JWT
│       ├── models/
│       │   └── User.js                # Esquema de usuario
│       ├── routes/
│       │   └── auth.routes.js         # Rutas /api/auth
│       ├── utils/
│       │   └── generateToken.js       # Generación de JWT
│       └── app.js                     # Configuración Express
│   └── server.js                      # Punto de entrada
│
├── FRONTEND/
│   └── src/
│       ├── api/
│       │   ├── components/
│       │   │   ├── Api.jsx            # Personajes Rick & Morty
│       │   │   ├── Dashboard.jsx      # Gestión de libros
│       │   │   ├── Login.jsx          # Formulario de login
│       │   │   ├── Register.jsx       # Formulario de registro
│       │   │   └── PrivateRoute.jsx   # Protección de rutas
│       │   └── services/
│       │       └── rickAndMortyService.js
│       ├── context/
│       │   ├── AuthContext.jsx        # Estado de autenticación
│       │   └── StoreContext.jsx       # Favoritos y carrito
│       ├── layout/
│       │   └── components/
│       │       ├── Header.jsx
│       │       ├── Footer.jsx
│       │       └── Content.jsx        # Landing page
│       ├── libros/
│       │   └── components/
│       │       └── Libros.jsx         # Catálogo de libros
│       ├── App.jsx
│       └── main.jsx
└── .gitignore
```

---

## 🖼️ Screenshot de la Interfaz

> Las siguientes capturas muestran las vistas principales de la aplicación:

| Vista | Descripción |
|---|---|
| **Landing** | Banner, carrusel de portadas y géneros literarios |
| **Libros** | Catálogo completo con descuentos, favoritos y carrito |
| **Rick & Morty API** | Personajes con paginación y badges de estado |
| **Login / Register** | Formularios con validación en tiempo real |
| **Dashboard** | Formulario para agregar libros y panel de resumen |

---

## 👨‍💻 Datos del Autor

| | |
|---|---|
| **Nombre** | Juan José Giraldo |
| **GitHub** | [@juangiraaaldo](https://github.com/juangiraaaldo) |
| **Programa** | Desarrollo Frontend — SENA 2026 |
| **Repositorio** | [Taller4-Ultimate](https://github.com/juangiraaaldo/Taller4-Ultimate) |

---

© 2026 Juan José Giraldo — All Rights Reserved :|
