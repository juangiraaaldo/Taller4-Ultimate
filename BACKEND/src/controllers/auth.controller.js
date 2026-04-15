import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { generateAccessToken, generateRefreshToken } from '../utils/generateToken.js'

export const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    const existe = await User.findOne({ email })
    if (existe) return res.status(400).json({ msg: 'Usuario ya existe' })

    const hash = await bcrypt.hash(password, 10)

    const user = new User({
      nombre,
      email,
      password: hash
    })

    await user.save()

    res.json({ msg: 'Usuario creado' })
  } catch (error) {
    res.status(500).json({ msg: 'Error servidor' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: 'Credenciales inválidas' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(400).json({ msg: 'Credenciales inválidas' })

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    user.refreshToken = refreshToken
    await user.save()

    res.json({ accessToken, refreshToken })
  } catch (error) {
    res.status(500).json({ msg: 'Error servidor' })
  }
}