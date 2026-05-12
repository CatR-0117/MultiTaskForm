import { Asterisk } from 'lucide-react';

let Input = (props) => {
  return (
    <div className="gap-2 flex flex-col w-full">
      <div className="text-sm font-semibold leading-4 flex">
        {props.title}
        <Asterisk className='size-3 text-red-500'></Asterisk>
      </div>
      <input
        className="flex p-2.5 items-center border-[#CBD5E1] border rounded-lg leading-4 focus:border-[#0CA5E9] focus:outline-none focus:ring-0"
        type="text"
        placeholder={`Your ${props.title}`}
      ></input>
      <p className="h-5 text-[#E14942] text-sm font-normal">
        {props.req}
      </p>
    </div>
  );
};

export default Input;
