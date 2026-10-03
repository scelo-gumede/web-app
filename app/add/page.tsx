import React from "react";
import AddForm from "@/components/forms/AddForm";
import { createUser } from "@/actions/UserActions";

const page = () => {
  return (
    <div>
      <AddForm action={createUser} />
    </div>
  );
};

export default page;
