import { createStep } from "@/server/action";
import React from "react";

const page = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <form action={createStep} className="w-full px-4 my-4">
        <label htmlFor="title" className="text-xl">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="mt-2 mb-8 border-2 border-neutral-300 w-full p-2 rounded focus:border-fuchsia-200 outline-none"
          required
        />
        <label htmlFor="description" className="text-xl">
          Description
        </label>
        <textarea
          name="description"
          rows={5}
          className="mt-2 border-2 border-neutral-300 w-full p-2 rounded focus:border-fuchsia-200 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-fuchsia-200 text-black px-4 py-1 rounded mt-8 float-end cursor-pointer"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default page;
