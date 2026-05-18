import Image from "next/image";

let Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
        alt="Pinecone Logo"
        width={56}
        height={56}
      />
      <div className="text-2xl font-semibold leading-8 text-[#202124]">
        Join Us! 😎
      </div>
      <div className="text-base font-normal leading-6 text-[#8E8E8E]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};

export default Header;
