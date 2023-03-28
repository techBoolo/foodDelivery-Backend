import { PrismaClient } from '@prisma/client'

let prisma 

const connectDB = async () => {
  if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
  } else {
    if(!global.prisma) {
      global.prisma = new PrismaClient()
    }
    prisma = global.prisma
  }
  try {
    await prisma.$connect()
    console.log('connected to db');
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

export const getDB = () => {
  return prisma
}
export default connectDB
