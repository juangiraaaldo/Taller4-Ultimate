import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { useStore } from '../../context/StoreContext';

const libros = [
  { id: 1, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', precio: 18.99, descuento: 10, categoria: 'Clásico', img: "/imgs/don.png" },
  { id: 2, titulo: 'Historia de dos ciudades', autor: 'Charles Dickens', precio: 14.99, descuento: 15, categoria: 'Clásico', img: "/imgs/dos.png" },
  { id: 3, titulo: 'El Señor de los Anillos', autor: 'J.R.R. Tolkien', precio: 24.99, descuento: 20, categoria: 'Fantasía', img: "/imgs/anillos.png" },
  { id: 4, titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', precio: 19.99, descuento: 10, categoria: 'Fantasía', img: "/imgs/harry.png" },
  { id: 5, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 16.99, descuento: 0, categoria: 'Realismo Mágico', img: "/imgs/soledad.png" },
  { id: 6, titulo: '1984', autor: 'George Orwell', precio: 12.99, descuento: 25, categoria: 'Distopía', img: "/imgs/1984.png" },
  { id: 7, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', precio: 11.99, descuento: 0, categoria: 'Romance', img: "/imgs/pride.png" },
  { id: 8, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', precio: 9.99, descuento: 0, categoria: 'Clásico', img: "/imgs/principito.png" },
  { id: 9, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 13.99, descuento: 15, categoria: 'Clásico', img: "/imgs/crimen.png" },
  { id: 10, titulo: 'El código Da Vinci', autor: 'Dan Brown', precio: 15.99, descuento: 30, categoria: 'Thriller', img: "/imgs/da.png" },
  { id: 11, titulo: 'La Biblia', autor: 'Varios autores', precio: 9.99, descuento: 0, categoria: 'Religión', img: "/imgs/biblia.png" },
  { id: 12, titulo: 'El diario de Ana Frank', autor: 'Ana Frank', precio: 11.99, descuento: 10, categoria: 'Historia', img: "/imgs/ana.png" },
  { id: 13, titulo: 'Sapiens: De animales a dioses', autor: 'Yuval Noah Harari', precio: 19.99, descuento: 20, categoria: 'Ciencia', img: "/imgs/sapiens.png" },
  { id: 14, titulo: 'El origen de las especies', autor: 'Charles Darwin', precio: 13.99, descuento: 0, categoria: 'Ciencia', img: "/imgs/species.png" },
  { id: 15, titulo: 'Meditaciones', autor: 'Marco Aurelio', precio: 10.99, descuento: 0, categoria: 'Filosofía', img: "/imgs/aurelio.png" },
  { id: 16, titulo: 'Cómo ganar amigos e influir sobre las personas', autor: 'Dale Carnegie', precio: 14.99, descuento: 15, categoria: 'Autoayuda', img: "/imgs/ganar.png" },
  { id: 17, titulo: 'Becoming: Mi historia', autor: 'Michelle Obama', precio: 22.99, descuento: 25, categoria: 'Biografía', img: "/imgs/becoming.png" },
  { id: 18, titulo: 'Breve historia del tiempo', autor: 'Stephen Hawking', precio: 16.99, descuento: 10, categoria: 'Ciencia', img: "/imgs/time.png" },
  { id: 19, titulo: 'Los 7 hábitos de la gente altamente efectiva', autor: 'Stephen Covey', precio: 17.99, descuento: 20, categoria: 'Productividad', img: "/imgs/7.png" },
  { id: 20, titulo: 'El arte de la guerra', autor: 'Sun Tzu', precio: 8.99, descuento: 0, categoria: 'Filosofía', img: "/imgs/arte.png" },
];


export const Libros = () => {

const { token } = useAuth()
const { favoritos, carrito, toggleFavorito, agregarCarrito } = useStore()

const extra = JSON.parse(localStorage.getItem('librosExtra')) || []

const todosLosLibros = [...libros, ...extra]

  return (
    <>
      <Box sx={{ px: 4, py: 6, backgroundColor: '#d1d1d1cb' }}>

        <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }} >
          Libros
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Encuentra los mejores títulos al mejor precio.
        </Typography>

        <Grid container spacing={3}>
          {todosLosLibros.map((libro) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={libro.id}>
              <Card sx={{
                height: '100%',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
                borderRadius: '10px',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.03)' }
              }}>
                <CardMedia
                  component="img"
                  image={libro.img}
                  alt={libro.titulo}
                  sx={{
                    height: 320,
                    width: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#f5f5f5',
                    pt: 2
                  }}
                  loading='lazy'
                />
                <CardContent>
                  <Chip
                    label={libro.categoria}
                    size="small"
                    sx={{ mb: 1, backgroundColor: '#212121', color: 'white' }}
                  />
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5, fontSize: '0.95rem' }}>
                    {libro.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                    {libro.autor}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {libro.descuento > 0 && (
                      <Chip label={`-${libro.descuento}%`} size="small" color="error" />
                    )}
                    <Typography variant="h6" color="primary" fontWeight={700}>
                      {`$${(libro.precio * (1 - libro.descuento / 100)).toFixed(2)}`}
                    </Typography>
                    {libro.descuento > 0 && (
                      <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                        ${libro.precio}
                      </Typography>
                    )}

                  </Box>
                </CardContent>

                {token && (
                  <CardActions sx={{ display: 'flex', gap: 1, px: 2, pb: 2 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => toggleFavorito(libro.id)}
                      sx={{
                        borderColor: favoritos.includes(libro.id) ? 'rgb(69, 49, 116)' : '#212121',
                        color: favoritos.includes(libro.id) ? 'rgb(69, 49, 116)' : '#212121',
                        '&:hover': {
                          backgroundColor: 'rgba(226, 43, 165, 0.1)',
                          borderColor: 'rgb(69, 49, 116)',
                          color: 'rgb(69, 49, 116)',
                        }
                      }}
                    >
                      <FavoriteIcon fontSize="small" />
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => agregarCarrito(libro.id)}
                      fullWidth
                      sx={{
                        backgroundColor: carrito.includes(libro.id) ? 'rgb(69, 49, 116)' : '#212121',
                        '&:hover': { backgroundColor: 'rgb(69, 49, 116)' }
                      }}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      {carrito.includes(libro.id) ? 'Agregado' : 'Agregar'}
                    </Button>
                  </CardActions>
                )}
              </Card>

            </Grid>
          ))}

        </Grid>

      </Box>

    </>
  )
}
