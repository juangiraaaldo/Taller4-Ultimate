import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Badge from '@mui/material/Badge';
import { useStore } from '../../context/StoreContext';

const pagesPublicas = [
    { label: 'INICIO', path: '/' },
    { label: 'LIBROS', path: '/libros' },
    { label: 'API', path: '/api' },
];

const pagesPrivadas = [
    { label: 'INICIO', path: '/' },
    { label: 'LIBROS', path: '/libros' },
    { label: 'API', path: '/api' },
];

export const Header = () => {

    const { favoritos, carrito } = useStore()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { token, logout } = useAuth()
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const handleLogout = () => {
        logout()
        handleCloseUserMenu()
        navigate('/login')
    }

    const pages = token ? pagesPrivadas : pagesPublicas

    return (
        <AppBar position="static" sx={{ background: '#a0a0a0', width: '100%' }}>
            <Toolbar sx={{ px: { xs: 2, md: 4 } }}>

                <Box component="img" src='/imgs/Logo.png'
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: 40 }} />
                <Typography component={NavLink} to="/" sx={{
                    display: { xs: 'none', md: 'flex' }, mr: 2,
                    fontFamily: 'monospace', fontWeight: 800, letterSpacing: '.3rem',
                    color: 'inherit', textDecoration: 'none',
                    fontSize: { md: '1.5rem', lg: '1.8rem' },
                    textShadow: '2px 2px 4px rgb(86, 50, 168)',
                }}>
                    Bibliber
                </Typography>

                {/* Mobile menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}>
                        {pages.map((page) => (
                            <MenuItem key={page.label} component={NavLink} to={page.path} onClick={handleCloseNavMenu}>
                                <Typography>{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Mobile title */}
                <Typography component={NavLink} to="/" sx={{
                    display: { xs: 'flex', md: 'none' }, flexGrow: 1,
                    fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.2rem',
                    color: 'inherit', textDecoration: 'none',
                }}>
                    Bibliber
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* Links desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button key={page.label} component={NavLink} to={page.path}
                            onClick={handleCloseNavMenu}
                            sx={{
                                color: '#4a4a4a4a', fontWeight: 600, letterSpacing: '.1rem',
                                '&:hover': { color: 'rgb(69, 49, 116)' },
                                '&.active': { borderBottom: '2px solid rgb(69, 49, 116)', color: 'rgb(69, 49, 116)' },
                            }}>
                            {page.label}
                        </Button>
                    ))}
                </Box>

                {/* Login o Avatar */}
                {token ? (
                    <Box sx={{ ml: 2 }}>
                        <IconButton onClick={handleOpenUserMenu}>
                            <Badge badgeContent={favoritos.length + carrito.length} color="error" invisible={favoritos.length + carrito.length === 0}>
                                <Avatar>U</Avatar>
                            </Badge>
                        </IconButton>
                        <Menu
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        >
                            <MenuItem onClick={() => navigate('/dashboard')}>
                                Dashboard
                            </MenuItem>

                            <MenuItem onClick={() => navigate('/favoritos')}>
                                Favoritos ({favoritos.length})
                            </MenuItem>

                            <MenuItem onClick={() => navigate('/compras')}>
                                Compras ({carrito.length})
                            </MenuItem>

                            <MenuItem onClick={handleLogout}>
                                Cerrar sesión
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Button component={NavLink} to="/login" sx={{
                        ml: 2, px: 2.5, py: 0.8,
                        border: '2px solid #4a4a4a4a',
                        color: 'rgb(73, 66, 71)', fontWeight: 700, letterSpacing: '.1rem',
                        borderRadius: '4px', transition: 'all 0.2s ease',
                        '&:hover': { background: 'rgb(69, 49, 116)', color: '#a0a0a0', border: '2px solid #c5c5c5' },
                    }}>
                        LOGIN
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};