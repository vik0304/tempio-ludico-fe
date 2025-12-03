import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function ExternalLinkButton({
  label = "EVENTI",
  to = "/eventi",
}) {
  return (
    <Link to={to}>
      <button className="text-md group flex items-center justify-center gap-1 rounded-md bg-red-900 px-6 py-3 text-white hover:cursor-pointer hover:text-yellow-200">
        <span>{label}</span>
        <ArrowTopRightIcon
          height={20}
          width={20}
          className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-200 group-hover:opacity-100"
        />
      </button>
    </Link>
  );
}
