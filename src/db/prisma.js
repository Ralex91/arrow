/* eslint-disable no-undef */
import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => new PrismaClient()
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma
}