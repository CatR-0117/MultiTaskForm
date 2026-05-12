import Image from "next/image";

let Header = () => {
  return (
    <div className="flex flex-col gap-2 mb-5">
      <Image
        src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
        alt="Pinecone Logo"
        width={60}
        height={60}
      />
      <div className="text-[26px] font-semibold text-[#202124] leading-[normal]">
        Join Us! 😎
      </div>
      <div className="text-[#8e8e8e] text-lg font-normal leading-[normal]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};

export default Header;
