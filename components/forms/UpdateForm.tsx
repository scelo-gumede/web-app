"use client";
import React from "react";
import { useActionState } from "react";
import { UserFormCreate } from "@/types/user";

const initialState = {
  status: false,
  message: "",
};

const UpdateForm = ({ action }: UserFormCreate) => {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start"
    >
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="name"
        name="name"
        required
      />

      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="surname"
        name="surname"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="email"
        name="email"
        required
      />

      <input
        type="submit"
        value="Submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
      />

      <span>
        {state.status && <p className="text-green-500">{state.message}</p>}
        {!state.status && <p className="text-red-500">{state.message}</p>}
      </span>
    </form>
  );
};

export default UpdateForm;
