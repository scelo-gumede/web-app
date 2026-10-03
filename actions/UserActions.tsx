"use server";

import { prisma } from "@/lib/prisma";
import { StateForm } from "@/types/user";
import { updateTag } from "next/cache";

export const createUser = async (
  previousState: StateForm,
  formData: FormData,
): Promise<StateForm> => {
  

  updateTag('users')
  try {
    const firstName = formData.get("name") as string;
    const lastName = formData.get("surname") as string;
    const email = formData.get("email") as string;

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });
    
    return {
      status: true,
      message: "User created successfully",
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { status: false, message: "Error creating user" };
  }
};

export const deleteUser = async (
  { id }: { id: number },
  formData: FormData,
) => {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return { status: false, message: "Error deleting user" };
  }
};
