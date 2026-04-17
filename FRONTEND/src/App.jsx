import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from './layout/components/Header'
import { Content } from './layout/components/Content'
import { Footer } from './layout/components/Footer'
import { Libros } from './libros/components/Libros'
import { Api } from './api/components/Api'
import { Login } from './api/components/Login'
import { Register } from './api/components/Register'
import { PrivateRoute } from './api/components/PrivateRoute'
import { Dashboard } from './api/components/Dashboard'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />

      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />

          <Route path='/libros' element={<Libros />} />

          <Route path='/api' element={<Api />} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
        </Routes>

        <Footer />
      </HashRouter >
    </>
  )
}

export default App