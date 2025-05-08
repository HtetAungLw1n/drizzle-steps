import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Step = ({
  title,
  id,
  description,
}: {
  title: string;
  id: number;
  description: string;
}) => {
  return (
    <Link
      href={`stepDetail/${id}`}
      className="flex justify-between items-center border-b border-neutral-400 py-2 mb-2"
    >
      <div>
        <div className="font-bold text-xl">{title}</div>
        <div className="text-sm text-fuchsia-200 opacity-70">{description}</div>
      </div>
      <div className="pr-2">
        <ArrowRightCircle size={30} />
      </div>
    </Link>
  );
};

export default Step;
