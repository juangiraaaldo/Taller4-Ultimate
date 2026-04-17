import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {

  const navigate = useNavigate()

  const [form, setForm] = useState({ nombre: '', email: '', password: '', confirmar: '' })
  const [errores, setErrores] = useState({ nombre: '', email: '', password: '', confirmar: '' })
  const [exito, setExito] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validar = () => {
    const e = { nombre: '', email: '', password: '', confirmar: '' }
    let valido = true

    if (!form.nombre) {
      e.nombre = 'El nombre es obligatorio'
      valido = false
    }

    if (!form.email) {
      e.email = 'El email es obligatorio'
      valido = false
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'Email no válido'
      valido = false
    }

    if (!form.password) {
      e.password = 'La contraseña es obligatoria'
      valido = false
    } else if (form.password.length < 6) {
      e.password = 'Mínimo 6 caracteres'
      valido = false
    }

    if (!form.confirmar) {
      e.confirmar = 'Confirma tu contraseña'
      valido = false
    } else if (form.password !== form.confirmar) {
      e.confirmar = 'Las contraseñas no coinciden'
      valido = false
    }

    setErrores(e)
    return valido
  }

const handleSubmit = async () => {
    if (!validar()) return;

    const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    
    const finalURL = `${baseURL.replace(/\/$/, '')}/api/auth/register`;

    console.log("Intentando registrar en:", finalURL); 

    try {
        await axios.post(finalURL, form);
        
        setExito(true);
        setTimeout(() => navigate('/login'), 1500);
        
    } catch (error) {
        console.error("Error en registro:", error.response?.data || error);
        
        alert(error.response?.data?.msg || 'Error al intentar registrar el usuario');
    }
};

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#d8d8d8' }}>
      <Paper elevation={4} sx={{ p: 5, borderRadius: '16px', width: '100%', maxWidth: 400 }}>

        <Typography variant="h5" fontWeight={700} sx={{ mb: 1, textAlign: 'center' }}>
          Crear cuenta
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
          Completa los datos para registrarte
        </Typography>

        <TextField fullWidth label="Nombre" name="nombre" value={form.nombre}
          onChange={handleChange} error={!!errores.nombre} helperText={errores.nombre} sx={{
            mb: 3,
            '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#4a4a4a4a', },
              '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
            },
          }} />

        <TextField fullWidth label="Email" name="email" type="email" value={form.email}
          onChange={handleChange} error={!!errores.email} helperText={errores.email} sx={{
            mb: 3,
            '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#4a4a4a4a', },
              '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
            },
          }} />

        <TextField fullWidth label="Contraseña" name="password" type="password" value={form.password}
          onChange={handleChange} error={!!errores.password} helperText={errores.password} sx={{ mb: 3, 
                        '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#4a4a4a4a',},
              '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
            },
          }}  />

        <TextField fullWidth label="Confirmar contraseña" name="confirmar" type="password" value={form.confirmar}
          onChange={handleChange} error={!!errores.confirmar} helperText={errores.confirmar} sx={{ mb: 4, 
                      '& label.Mui-focused': { color: 'rgb(69, 49, 116)', },
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': { borderColor: '#4a4a4a4a',},
              '&.Mui-focused fieldset': { borderColor: 'rgb(69, 49, 116)', },
            },
          }}  />

        <Button fullWidth variant="contained" onClick={handleSubmit}
          sx={{
            backgroundColor: '#212121', py: 1.5, fontWeight: 700, letterSpacing: '.1rem',
            '&:hover': { backgroundColor: 'rgb(69, 49, 116)' }
          }}
        >
          Registrarse
        </Button>

        <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
          ¿Ya tienes cuenta?{' '}
          <a href="#/login" style={{ color: 'rgb(69, 49, 116)', fontWeight: 600 }}>
            Inicia sesión
          </a>
        </Typography>

      </Paper>

      <Snackbar open={exito} autoHideDuration={3000} onClose={() => setExito(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setExito(false)} severity="success" variant="filled">
          ¡Cuenta creada exitosamente!
        </Alert>
      </Snackbar>
    </Box>
  )
}