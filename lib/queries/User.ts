import { prisma } from "@/lib/prisma";
import { cacheTag } from "next/cache";


export const getAllUsers = async () => {
  'use cache'

  try {
    const users = await prisma.user.findMany();
    cacheTag('users')
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users from the database");
  }
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};
