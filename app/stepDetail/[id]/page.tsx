import { deleteStep, getStep } from "@/server/action";
import { PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type PostProps = {
  params: {
    id: number;
  };
};

const stepDetail = async ({ params }: PostProps) => {
  const { success, error } = await getStep(params.id);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-4 px-4">
      <div>
        <div className="text-2xl font-bold">{success?.title}</div>
        <div className=" mt-2">{success?.description}</div>
      </div>

      <div className="flex items-center gap-2 pr-1 mt-4 justify-end">
        {/* @ts-ignore */}
        <form action={deleteStep}>
          <input type="text" name="id" value={params.id} hidden readOnly />
          <button className="cursor-pointer hover:text-red-500 flex items-center gap-2">
            <TrashIcon size={16} />
          </button>
        </form>
        <Link
          href={`/updateStep/${success?.id}`}
          className="w-fit cursor-pointer bg-fuchsia-200 text-black px-2 py-1 rounded flex items-center gap-2 text-sm"
        >
          <PencilIcon size={16} /> Edit
        </Link>
      </div>
    </div>
  );
};

export default stepDetail;
