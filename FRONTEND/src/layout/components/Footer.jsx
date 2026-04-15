import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; 
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#a0a0a0', color: 'white', pt: 6, pb: 3, mt: 'auto' }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ mb: 4 }}>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <ShoppingCartIcon sx={{ color: 'rgb(69, 49, 116)' }} />
                            <Typography variant="h6" fontWeight={700} fontFamily="monospace" sx={{ color: 'rgb(69, 49, 116)' }}>
                                Bibliber
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color:"rgb(56, 50, 54)"}}>
                            Tu tienda de Libros favorita.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: 'rgb(69, 49, 116)' }}>
                            Navegación
                        </Typography>
                        {['Inicio', 'Libros', 'Api'].map((item) => (
                            <Box key={item} sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/" color="rgb(56, 50, 54)" underline="hover" sx={{'&:hover': {color: 'rgb(69, 49, 116)'}}}>
                                    {item}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: 'rgb(69, 49, 116)' }}>
                            Soporte
                        </Typography>
                        {['FAQ', 'Contacto', 'Devoluciones'].map((item) => (
                            <Box key={item} sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/" color="rgb(56, 50, 54)" underline="hover" sx={{'&:hover': {color: 'rgb(69, 49, 116)'}}}>
                                    {item}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: 'rgb(69, 49, 116)' }}>
                            Recibe ofertas
                        </Typography>
                        <Typography variant="body2" sx={{ color:"rgb(56, 50, 54)" }}>
                            Suscríbete para recibir las mejores ofertas directo a tu correo.
                        </Typography>
                    </Grid>

                </Grid>

                <Box sx={{ borderTop: '2px solid rgb(69, 49, 116)', pt: 3 }}>
                    <Typography sx={{ color:"rgb(69, 49, 116)" }} align="center">
                        © 2026 Juan José Giraldo All Right Reserved :|
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};