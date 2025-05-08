import { getStep, updateStep } from "@/server/action";
import React from "react";

type PostProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: PostProps) => {
  const { success, error } = await getStep(params.id);

  return (
    <div>
      {/* @ts-ignore */}
      <form action={updateStep} className="w-full px-4 my-4">
        <input type="text" name="id" value={success?.id} hidden readOnly />
        <label htmlFor="title" className="text-xl">
          Title
        </label>
        <input
          type="text"
          name="title"
          defaultValue={success?.title}
          className="mt-2 mb-8 border-2 border-neutral-300 w-full p-2 rounded focus:border-fuchsia-200 outline-none"
        />
        <label htmlFor="title" className="text-xl">
          Description
        </label>
        <textarea
          name="description"
          defaultValue={success?.description}
          rows={5}
          className="mt-2 border-2 border-neutral-300 w-full p-2 rounded focus:border-fuchsia-200 outline-none"
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
