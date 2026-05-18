import { Asterisk } from "lucide-react";

let Input = ({ error, name, onChange, title, type, value }) => {
  const errorId = `${name}-error`;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        className="flex text-sm font-semibold leading-5 text-[#202124]"
        htmlFor={name}
      >
        {title}
        <Asterisk
          aria-hidden="true"
          className="mt-0.5 size-3 text-[#E14942]"
        ></Asterisk>
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={Boolean(error)}
        className={`h-11 w-full rounded-md border px-3 text-sm leading-5 text-[#202124] placeholder:text-[#94A3B8] transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:ring-2 ${
          error
            ? "border-[#E14942] focus:border-[#E14942] focus:ring-[#E14942]/10"
            : "border-[#CBD5E1] focus:border-[#0CA5E9] focus:ring-[#0CA5E9]/10"
        }`}
        id={name}
        name={name}
        onChange={(event) => onChange(name, event.target.value)}
        placeholder={`Your ${title}`}
        type={type}
        value={value}
      ></input>
      <p
        className={`min-h-5 text-sm font-normal leading-5 text-[#E14942] transition-opacity duration-150 ${
          error ? "opacity-100" : "opacity-0"
        }`}
        id={errorId}
      >
        {error}
      </p>
    </div>
  );
};

export default Input;
