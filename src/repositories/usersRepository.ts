import { prisma } from '../databases/postgres';
import { IUserData } from '../types/userTypes'

async function getUserByEmail(email: string){
    return await prisma.users.findUnique({where: {email}}) 
}

async function postUser(email: string, password: string) {
    return await prisma.users.create({data: {email, password}})
}

export {
    getUserByEmail,
    postUser
}