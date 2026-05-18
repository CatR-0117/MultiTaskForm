import Header from "./Header";
import Input from "./Input";
import { ArrowRight } from "lucide-react";

let Page1 = ({ errors, onChange, onNext, values }) => {
  return (
    <div className="flex min-h-[620px] w-full max-w-[480px] flex-col justify-between rounded-lg bg-white p-6 shadow-sm transition-all duration-200 ease-out sm:min-h-[689px] sm:p-8">
      <div className="space-y-6">
        <Header></Header>
        <div className="flex w-full flex-col gap-3">
          <Input
            error={errors.firstName}
            name="firstName"
            onChange={onChange}
            type="text"
            title="First Name"
            value={values.firstName}
          ></Input>
          <Input
            error={errors.lastName}
            name="lastName"
            onChange={onChange}
            type="text"
            title="Last Name"
            value={values.lastName}
          ></Input>
          <Input
            error={errors.username}
            name="username"
            onChange={onChange}
            type="text"
            title="Username"
            value={values.username}
          ></Input>
        </div>
      </div>
      <button
        onClick={() => onNext(2)}
        className="flex h-11 w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-[#121316] px-4 text-sm font-medium text-white transition-[background-color,transform] duration-150 ease-out hover:bg-[#2B2D31] active:translate-y-px"
      >
        Continue 1/3
        <ArrowRight className="size-4"></ArrowRight>
      </button>
    </div>
  );
};

export default Page1;
