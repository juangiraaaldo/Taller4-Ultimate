import { useState, useEffect } from 'react'
import { getPersonajes } from '../services/rickandmortyservice'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const POR_PAGINA = 8

export const Api = () => {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagina, setPagina] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPersonajes()
        setPersonajes(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const totalPaginas = Math.ceil(personajes.length / POR_PAGINA)
  const inicio = pagina * POR_PAGINA
  const personajesPagina = personajes.slice(inicio, inicio + POR_PAGINA)

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <CircularProgress />
    </Box>
  )

  if (error) return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography color="error">Error: {error}</Typography>
    </Box>
  )

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, backgroundColor: '#d8d8d8', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
        Rick & Morty
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Personajes de la API oficial
      </Typography>

      <Grid container spacing={3}>
        {personajesPagina.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
            <Card sx={{
              height: '100%',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.03)' }
            }}>
              <CardMedia component="img" height="200" image={p.image} alt={p.name} loading='lazy' />
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1, fontSize: '0.95rem' }}>
                  {p.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label={p.status}
                    size="small"
                    sx={{
                      backgroundColor: p.status === 'Alive' ? '#4caf50' : p.status === 'Dead' ? '#f44336' : '#9e9e9e',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                  <Chip label={p.species} size="small" sx={{ backgroundColor: '#212121', color: 'white' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Controles de paginación */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, mt: 4 }}>
        <IconButton
          aria-label='Página Anterior'
          onClick={() => setPagina(p => p - 1)}
          disabled={pagina === 0}
          sx={{ backgroundColor: '#212121', color: 'white', '&:hover': { backgroundColor: 'rgb(69, 49, 116)' }, '&:disabled': { backgroundColor: '#ccc' } }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Typography fontWeight={600}>
          {pagina + 1} / {totalPaginas}
        </Typography>

        <IconButton
          aria-label='Página Siguiente'
          onClick={() => setPagina(p => p + 1)}
          disabled={pagina === totalPaginas - 1}
          sx={{ backgroundColor: '#212121', color: 'white', '&:hover': { backgroundColor: 'rgb(69, 49, 116)' }, '&:disabled': { backgroundColor: '#ccc' } }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}