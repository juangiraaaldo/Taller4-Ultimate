import { useState, useEffect } from 'react'
import {
  Box, Typography, TextField, Button, Paper,
  Grid, MenuItem, Snackbar, Alert
} from '@mui/material'

const categorias = ['Clásico', 'Fantasía', 'Ciencia', 'Historia']

export const Dashboard = () => {

  const [form, setForm] = useState({
    titulo: '', autor: '', precio: '', descuento: '', categoria: '', img: ''
  })

  const [libros, setLibros] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('librosExtra')) || []
    setLibros(data)
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.titulo || !form.autor || !form.precio) return

    const nuevo = {
      ...form,
      id: Date.now(),
      precio: Number(form.precio),
      descuento: Number(form.descuento) || 0
    }

    const nuevos = [...libros, nuevo]
    setLibros(nuevos)
    localStorage.setItem('librosExtra', JSON.stringify(nuevos))

    setForm({ titulo: '', autor: '', precio: '', descuento: '', categoria: '', img: '' })
    setOpen(true)
  }


  const total = libros.length
  const promedio = total
    ? (libros.reduce((acc, l) => acc + l.precio, 0) / total).toFixed(2)
    : 0
  const conDescuento = libros.filter(l => l.descuento > 0).length

  return (
    <Box sx={{ p: 4, background: '#d8d8d8', minHeight: '100vh' }}>

      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        Agregar Libros 📚
      </Typography>

      <Grid container spacing={3}>

        {/* 🔹 FORMULARIO */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Agregar libro
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Título" name="titulo"
                  value={form.titulo} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} />
              </Grid>

              <Grid item xs={6}>
                <TextField fullWidth label="Autor" name="autor"
                  value={form.autor} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} />
              </Grid>

              <Grid item xs={4}>
                <TextField fullWidth label="Precio" name="precio"
                  value={form.precio} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} />
              </Grid>

              <Grid item xs={4}>
                <TextField fullWidth label="Descuento %" name="descuento"
                  value={form.descuento} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} />
              </Grid>

              <Grid item xs={4}>
                <TextField select fullWidth label="Categoría" name="categoria"
                  value={form.categoria} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} >
                  {categorias.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Imagen URL" name="img"
                  value={form.img} onChange={handleChange}
                  sx={{
                    '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: 'rgb(107, 98, 104)', },
                      '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
                    },
                  }} />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#212121', '&:hover': { backgroundColor: 'rgb(69, 49, 116)' } }}
              onClick={handleSubmit}
            >
              Guardar libro
            </Button>
          </Paper>
        </Grid>

        {/* 🔹 PANEL LATERAL (tipo la imagen) */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography fontWeight={700} sx={{ mb: 2 }}>
              Resumen
            </Typography>

            <Typography>Total libros: {total}</Typography>
            <Typography>Precio promedio: ${promedio}</Typography>
            <Typography>Con descuento: {conDescuento}</Typography>
          </Paper>
        </Grid>

        {/* 🔹 LISTA */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Libros agregados
          </Typography>

          <Grid container spacing={2}>
            {libros.map(libro => (
              <Grid item xs={12} md={3} key={libro.id}>
                <Paper sx={{ p: 2 }}>
                  <Typography fontWeight={700}>{libro.titulo}</Typography>
                  <Typography variant="body2">{libro.autor}</Typography>
                  <Typography>${libro.precio}</Typography>
                  <Typography variant="body2">{libro.categoria}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>

      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert severity="success" variant="filled">
          Libro agregado
        </Alert>
      </Snackbar>

    </Box>
  )
}