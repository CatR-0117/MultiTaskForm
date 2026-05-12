import { ArrowRight } from "lucide-react";

let Track = () => {
  return (
    <button className="bg-[#121316] text-white w-[416px] g-2 flex px-2.5 py-3 text-base font-medium rounded-md justify-center items-center cursor-pointer">
      Continue
      <ArrowRight className="size-4"></ArrowRight>
    </button>
  );
};

export default Track;
