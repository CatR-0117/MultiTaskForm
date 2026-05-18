import Header from "./Header";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Calendar from "./Calendar";

let Page3 = ({ errors, onBack, onChange, onNext, values }) => {
  return (
    <div className="flex min-h-[620px] w-full max-w-[480px] flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition-all duration-200 ease-out sm:min-h-[689px] sm:p-8">
      <div className="space-y-6">
        <Header></Header>
        <div className="flex w-full flex-col gap-3">
          <Calendar
            errors={errors}
            onChange={onChange}
            values={values}
          ></Calendar>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="flex h-11 w-[128px] cursor-pointer items-center justify-center gap-1 rounded-md border border-[#CBD5E1] bg-white px-4 text-sm font-medium text-[#121316] transition-[background-color,border-color,transform] duration-150 ease-out hover:border-[#94A3B8] hover:bg-[#F8FAFC] active:translate-y-px"
        >
          <ArrowLeft className="size-4"></ArrowLeft>
          Back
        </button>
        <button
          onClick={() => onNext(4)}
          className="flex h-11 w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-[#121316] px-4 text-sm font-medium text-white transition-[background-color,transform] duration-150 ease-out hover:bg-[#2B2D31] active:translate-y-px"
        >
          Continue 3/3
          <ArrowRight className="size-4"></ArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Page3;
