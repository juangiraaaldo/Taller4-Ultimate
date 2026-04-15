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
import { NavLink } from 'react-router-dom';

const pages = [
    { label: 'INICIO', path: '/' },
    { label: 'LIBROS', path: '/libros' },
    { label: 'API', path: '/api' },
];

export const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <AppBar position="static" sx={{ background: '#a0a0a0', width: '100%' }}>
            <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
                
                {/* Logo + Título desktop */}
                <Box component="img" src='/imgs/Logo.png'
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: 40 }} />
                <Typography
                    component={NavLink} to="/"
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        mr: 2,
                        fontFamily: 'monospace',
                        fontWeight: 800,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        fontSize: { md: '1.5rem', lg: '1.8rem' },
                        textShadow: '2px 2px 4px rgb(86, 50, 168)',
                    }}
                >
                    Bibliber
                </Typography>

                {/* Menú hamburguesa mobile */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.label} component={NavLink} to={page.path} onClick={handleCloseNavMenu}>
                                <Typography>{page.label}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Título mobile */}
                <Typography
                    component={NavLink} to="/"
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Bibliber
                </Typography>

                {/* Spacer */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Links desktop */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.label}
                            component={NavLink}
                            to={page.path}
                            onClick={handleCloseNavMenu}
                            sx={{
                                color: 'rgb(107, 98, 104)',
                                fontWeight: 600,
                                letterSpacing: '.1rem',
                                '&:hover': { color: 'rgb(69, 49, 116)' },
                                '&.active': {
                                    borderBottom: '2px solid rgb(69, 49, 116)',
                                    color: 'rgb(69, 49, 116)',
                                },
                            }}
                        >
                            {page.label}
                        </Button>
                    ))}
                </Box>

                {/* Login estilizado */}
                <Button
                    component={NavLink}
                    to="/login"
                    sx={{
                        ml: 2,
                        px: 2.5,
                        py: 0.8,
                        border: '2px solid rgb(107, 98, 104)',
                        color: 'rgb(73, 66, 71)',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        borderRadius: '4px',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            background: 'rgb(69, 49, 116)',
                            color: '#a0a0a0',
                            border: '2px solid #c5c5c5',
                        },
                    }}
                >
                    LOGIN
                </Button>
            </Toolbar>
        </AppBar>
    );
};