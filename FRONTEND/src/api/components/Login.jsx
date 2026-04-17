import { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()

    const [exito, setExito] = useState(false)

    const [form, setForm] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [errores, setErrores] = useState({ email: '', password: '' })

    const validar = () => {
        const nuevosErrores = { email: '', password: '' }
        let valido = true

        if (!form.email) {
            nuevosErrores.email = 'El email es obligatorio'
            valido = false
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            nuevosErrores.email = 'Email no válido'
            valido = false
        }

        if (!form.password) {
            nuevosErrores.password = 'La contraseña es obligatoria'
            valido = false
        } else if (form.password.length < 6) {
            nuevosErrores.password = 'Mínimo 6 caracteres'
            valido = false
        }

        setErrores(nuevosErrores)
        return valido
    }

const handleSubmit = async () => {
    if (!validar()) return;

    const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
    
    const finalURL = `${baseURL.replace(/\/$/, '')}/api/auth/login`;

    console.log("Intentando conectar a:", finalURL); 

    try {
        const { data } = await axios.post(finalURL, form);
        
        login(data.accessToken); 
        setExito(true);
        setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
        console.error("Error en login:", error.response?.data || error);
        alert(error.response?.data?.msg || 'Error al conectar al servidor');
    }
};

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#d8d8d8' }}>
            <Paper elevation={4} sx={{ p: 5, borderRadius: '16px', width: '100%', maxWidth: 400 }}>

                <Typography variant="h5" fontWeight={700} sx={{ mb: 1, textAlign: 'center' }}>
                    Iniciar sesión
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    Ingresa tus credenciales para continuar
                </Typography>

                <TextField
                    sx={{
                        mb: 3,
                        // Color del label cuando está enfocado
                        '& label.Mui-focused': {
                            color: 'rgb(69, 49, 116)',
                        },
                        '& .MuiOutlinedInput-root': {
                            // Color del borde cuando pasas el mouse (hover)
                            '&:hover fieldset': {
                                borderColor: '#4a4a4a4a',
                            },
                            // Color del borde cuando haces CLICK (focus)
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgb(69, 49, 116)',
                            },
                        },
                    }}
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errores.email}
                    helperText={errores.email}
                />

                <TextField
                    sx={{
                        mb: 4,
                        // Color del label cuando está enfocado
                        '& label.Mui-focused': {
                            color: 'rgb(69, 49, 116)',
                        },
                        '& .MuiOutlinedInput-root': {
                            // Color del borde cuando pasas el mouse (hover)
                            '&:hover fieldset': {
                                borderColor: '#4a4a4a4a',
                            },
                            // Color del borde cuando haces CLICK (focus)
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgb(69, 49, 116)',
                            },
                        },
                    }}
                    fullWidth
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    error={!!errores.password}
                    helperText={errores.password}
                />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: '#212121',
                        py: 1.5,
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        '&:hover': { backgroundColor: 'rgb(69, 49, 116)' }
                    }}
                >
                    Ingresar
                </Button>

                <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                    ¿No tienes cuenta?{' '}
                    <a href="#/register" style={{ color: 'rgb(69, 49, 116)', fontWeight: 600 }}>
                        Regístrate
                    </a>
                </Typography>

            </Paper>

            <Snackbar
                open={exito}
                autoHideDuration={3000}
                onClose={() => setExito(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={() => setExito(false)} severity="success" variant="filled">
                    ¡Inicio de sesión exitoso!
                </Alert>
            </Snackbar>
        </Box>
    )
}