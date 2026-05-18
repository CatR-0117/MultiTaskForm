import Image from "next/image";

let Header = () => {
  return (
    <div className="flex min-h-[320px] w-full max-w-[480px] flex-col justify-center rounded-lg bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-2">
        <Image
          src="https://pinecone-academy-multi-step-form.vercel.app/pinecone-logo.svg"
          alt="Pinecone Logo"
          width={56}
          height={56}
        />
        <div className="text-2xl font-semibold leading-8 text-[#202124]">
          You&apos;re All Set 🔥
        </div>
        <div className="text-base font-normal leading-6 text-[#8E8E8E]">
          We have received your submission. Thank you!{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
