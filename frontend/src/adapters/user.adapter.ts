import { User } from '@/models'

interface UserFormatted {
  nombre: string
  apellido: string
  edad: number
  telefono: number
}

export const userAdapter = (user: User): UserFormatted => {
  const userFormatted: UserFormatted = {
    nombre: user.firstName,
    apellido: user.lastName,
    edad: user.age,
    telefono: user.phone
  }

  return userFormatted
}
