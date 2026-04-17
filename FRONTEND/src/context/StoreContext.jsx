import { createContext, useContext, useState } from 'react'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {

  const [favoritos, setFavoritos] = useState([])
  const [carrito, setCarrito] = useState([])

  const toggleFavorito = (id) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const agregarCarrito = (id) => {
    setCarrito(prev =>
      prev.includes(id) ? prev : [...prev, id]
    )
  }

  return (
    <StoreContext.Provider value={{
      favoritos,
      carrito,
      toggleFavorito,
      agregarCarrito
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)