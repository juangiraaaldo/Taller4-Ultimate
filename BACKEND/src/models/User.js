import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  nombre: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  refreshToken: String
}, { timestamps: true })

export default mongoose.model('User', userSchema)