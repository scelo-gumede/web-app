import { getUserById } from "@/lib/queries/User";
import { notFound } from "next/navigation";

const UpdatePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const userId = parseInt(id, 10);

  if (isNaN(userId)) {
    notFound();
  }

  const user = await getUserById(userId);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>Update User</h1>

      <p>{user?.firstName}</p>
    </div>
  );
};

export default UpdatePage;
