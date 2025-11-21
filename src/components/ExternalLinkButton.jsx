import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function ExternalLinkButton() {
  return (
    <button className="text-md group flex items-center justify-center gap-1 rounded-md bg-red-900 px-6 py-3 text-white hover:cursor-pointer hover:text-yellow-300">
      <span>EVENTI</span>
      <ArrowTopRightIcon
        height={20}
        width={20}
        className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-300 group-hover:opacity-100"
      />
    </button>
  );
}
