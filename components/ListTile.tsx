"use client";
import { useRouter } from "next/navigation";
import { ListTileProps } from "@/types/user";

const ListTile = ({ id, firstName, lastName, email }: ListTileProps) => {
  const router = useRouter();
  function handleUpdateUser() {
    router.push(`/update/${id}`);
  }

  return (
    <div className="flex flex-col items-start justify-center p-4 border-b border-gray-200 dark:border-gray-700">
      <p>
        {firstName} {lastName} - {email}
      </p>

      <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>

      <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleUpdateUser}
      >
        View
      </button>
    </div>
  );
};

export default ListTile;
