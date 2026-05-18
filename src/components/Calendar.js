"use client";

import NextImage from "next/image";
import { useEffect, useMemo } from "react";
import { Asterisk, Image as ImageIcon } from "lucide-react";

const Calendar = ({ errors, onChange, values }) => {
  const image = useMemo(() => {
    if (!values.profileImage) {
      return "";
    }

    return URL.createObjectURL(values.profileImage);
  }, [values.profileImage]);

  useEffect(
    () => () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    },
    [image]
  );

  const handleImage = (event) => {
    const file = event.target.files?.[0] ?? null;

    onChange("profileImage", file);
  };

  return (
    <div className="flex w-full flex-col gap-1.5">
      <label
        className="flex text-sm font-semibold leading-5 text-[#202124]"
        htmlFor="dateOfBirth"
      >
        Date of Birth
        <Asterisk aria-hidden="true" className="mt-0.5 size-3 text-[#E14942]" />
      </label>
      <input
        aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
        aria-invalid={Boolean(errors.dateOfBirth)}
        className={`h-11 w-full rounded-md border px-3 text-sm leading-5 text-[#202124] transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus:ring-2 ${
          errors.dateOfBirth
            ? "border-[#E14942] focus:border-[#E14942] focus:ring-[#E14942]/10"
            : "border-[#CBD5E1] focus:border-[#0CA5E9] focus:ring-[#0CA5E9]/10"
        }`}
        id="dateOfBirth"
        name="dateOfBirth"
        onChange={(event) => onChange("dateOfBirth", event.target.value)}
        type="date"
        value={values.dateOfBirth}
      />
      <p
        className={`min-h-5 text-sm font-normal leading-5 text-[#E14942] transition-opacity duration-150 ${
          errors.dateOfBirth ? "opacity-100" : "opacity-0"
        }`}
        id="dateOfBirth-error"
      >
        {errors.dateOfBirth}
      </p>
      <label
        className="mt-1 flex text-sm font-semibold leading-5 text-[#202124]"
        htmlFor="profileImage"
      >
        Profile Image
        <Asterisk aria-hidden="true" className="mt-0.5 size-3 text-[#E14942]" />
      </label>
      <label
        className={`flex h-44 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md border bg-[#F8FAFC] transition-[background-color,border-color,box-shadow] duration-150 ease-out hover:border-[#0CA5E9] hover:bg-white ${
          errors.profileImage
            ? "border-[#E14942] shadow-[0_0_0_3px_rgba(225,73,66,0.08)]"
            : "border-[#CBD5E1]"
        }`}
        htmlFor="profileImage"
      >
        {image ? (
          <NextImage
            src={image}
            alt="Profile preview"
            width={416}
            height={180}
            unoptimized
            className="h-full w-full object-cover transition-transform duration-200 ease-out"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-sm font-medium text-[#64748B] transition-colors duration-150">
            <ImageIcon aria-hidden="true" className="size-7"></ImageIcon>
            <span>Add Image</span>
          </div>
        )}
        <input
          aria-describedby={
            errors.profileImage ? "profileImage-error" : undefined
          }
          aria-invalid={Boolean(errors.profileImage)}
          accept="image/*"
          className="sr-only"
          id="profileImage"
          onChange={handleImage}
          type="file"
        />
      </label>
      <p
        className={`min-h-5 text-sm font-normal leading-5 text-[#E14942] transition-opacity duration-150 ${
          errors.profileImage ? "opacity-100" : "opacity-0"
        }`}
        id="profileImage-error"
      >
        {errors.profileImage}
      </p>
    </div>
  );
};

export default Calendar;
