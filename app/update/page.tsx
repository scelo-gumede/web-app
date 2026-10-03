import React from "react";
import UpdateForm from "@/components/forms/UpdateForm";
import { getUserById } from "@/lib/queries/User";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const userId = parseInt(id, 10);

  if (isNaN(userId)) {
    return notFound();
  }

  const user = await getUserById(userId);

  if (!user) {
    return notFound();
  }

  return (
    <div>
      <h1>Update User</h1>
    </div>
  );
};

export default page;
