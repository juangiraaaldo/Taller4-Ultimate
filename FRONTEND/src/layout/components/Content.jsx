import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const caracteristicas = [
  { titulo: 'Género Narrativo', descripcion: '(o Épico): Cuenta una historia (novela, cuento, fábula, leyenda, epopeya)', img: '/imgs/narrativo.png' },
  { titulo: 'Género lírico', descripcion: 'Expresa sentimientos y emociones, generalmente en verso (poesía, oda, elegía).', img: '/imgs/lirico.png' },
  { titulo: 'Género Drámatico', descripcion: 'Diseñado para la representación escénica (teatro, comedia, tragedia, drama).', img: '/imgs/dramatico.png' },
  { titulo: 'Género Didactico', descripcion: ' Tiene finalidad educativa o moralizante (ensayo, fábula, epístola).', img: '/imgs/didactico.png' },
];

const fila1 = [
  '/imgs/biblia.png',
  '/imgs/dune.png',
  '/imgs/hamlet.png',
  '/imgs/principito.png',
  '/imgs/1984.png',
  '/imgs/negritos.png',
  '/imgs/dracula.png',
  '/imgs/harry.png',
];

const fila2 = [
  '/imgs/odisea.png',
  '/imgs/rimas.png',
  '/imgs/atomicos.png',
  '/imgs/guardian.png',
  '/imgs/dos.png',
  '/imgs/pride.png',
  '/imgs/anillos.png',
  '/imgs/don.png',
];

const carruselStyles = `
  @keyframes scrollLeft {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .track-left {
    display: flex;
    width: max-content;
    animation: scrollLeft 30s linear infinite;
  }
  .track-right {
    display: flex;
    width: max-content;
    animation: scrollRight 30s linear infinite;
  }
  .track-left:hover, .track-right:hover {
    animation-play-state: paused;
  }
`;

export const Content = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#d1d1d1cb', minHeight: '100vh' }}>
        <style>{carruselStyles}</style>

        {/* Banner */}
        <Box sx={{ backgroundColor: '#d1d1d1cb', position: 'relative', width: '100%', height: { xs: '250px', md: '400px' } }}>
          <Box component="img" src='/imgs/banner.png' sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }} />
          <Box sx={{ position: 'absolute', bottom: { xs: 20, md: 40 }, left: { xs: 20, md: 40 }, color: 'white', pr: 2 }}>
            <Typography variant="overline" sx={{ letterSpacing: 3, fontSize: { xs: '0.7rem', md: '0.9rem' } }}>
              LANDING PAGE • TIENDA VIRTUAL
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.8rem', md: '3rem' } }}>
              Tu tienda de libros
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Los mejores libros, géneros y subgéneros con el mejor precio del mercado.
            </Typography>
          </Box>
        </Box>

        {/* Carrusel */}
        <Box sx={{ py: 4, overflow: 'hidden', pt: 3 }}>
          {/* Fila 1 — va hacia la izquierda */}
          <Box sx={{ overflow: 'hidden', mb: 3 }}>
            <div className="track-left">
              {[...fila1, ...fila1].map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  sx={{
                    width: 150, 
                    height: 220,
                    objectFit: 'cover', 
                    borderRadius: '8px', 
                    mx: 1.5,  
                    flexShrink: 0,
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' 
                  }}
                />
              ))}
            </div>
          </Box>

          {/* Fila 2 — va hacia la derecha */}
          <Box sx={{ overflow: 'hidden' }}>
            <div className="track-right">
              {[...fila2, ...fila2].map((src, i) => (
                <Box
                  key={i}
                  component="img"
                  src={src}
                  sx={{
                    width: 150,  
                    height: 220, 
                    objectFit: 'cover',
                    borderRadius: '8px',
                    mx: 1.5,
                    flexShrink: 0,
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
                  }}
                />
              ))}
            </div>
          </Box>
        </Box>

        {/* Géneros */}
        <Box sx={{ px: { xs: 2, md: 4 }, py: 6 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
            Géneros
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
            Géneros esenciales de la literatura.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {caracteristicas.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.titulo}>
                <Card sx={{
                  height: '100%', maxWidth: 345, mx: 'auto',
                  boxShadow: '0px 15px 30px rgba(0,0,0,0.1)',
                  borderRadius: '20px',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)' }
                }}>
                  <CardMedia component="img" height="160" image={item.img} alt={item.titulo} sx={{ objectFit: 'cover' }} />
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>{item.titulo}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.descripcion}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Repositorio */}
        <Box sx={{ px: { xs: 2, md: 4 }, pb: 8, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: '900px',
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <Typography variant="h4" fontWeight={800} sx={{ mb: 2, color: '#212121' }}>
              Explora el código del proyecto
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                color: 'text.secondary', 
                maxWidth: '600px', 
                mx: 'auto',
                lineHeight: 1.6 
              }}
            >
              Este proyecto fue desarrollado con <strong>React</strong> y <strong>Material UI</strong> como una landing page moderna para administración de productos. Puedes revisar el código completo, aprender de su estructura o usarlo como base para tus propios proyectos.
            </Typography>

            <Button
              variant="contained"
              component="a"
              href="https://github.com/tu-usuario/tu-repositorio"
              target="_blank"
              sx={{
                backgroundColor: '#f5f5f5',
                color: '#212121',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: '#ffffff',
                  transform: 'scale(1.02)',
                  boxShadow: '0px 6px 15px rgba(0,0,0,0.15)',
                },
                transition: 'all 0.2s ease'
              }}
            >
              Ver repositorio en GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};