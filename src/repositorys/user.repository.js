import { prisma } from '../services/prisma'

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      admin: true,
      password: false,
      created_at: true,
      updated_at: true,
    },
  })
  return user
}

export const findUser = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  })
}
