import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
  // Optional: You can specify additional options here if needed
});

export const prisma = new PrismaClient({
  adapter,
  // Optional: You can specify additional options here if needed
});
