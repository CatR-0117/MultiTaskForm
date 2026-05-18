import { z } from "zod";

const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const usernamePattern = /^[A-Za-z0-9_]+$/;
const phonePattern = /^\+?[0-9\s()-]+$/;

const isValidCalendarDate = (value) => {
  const date = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
};

const getToday = () => {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

  return localDate.toISOString().slice(0, 10);
};

const isImageFile = (file) => {
  if (typeof File === "undefined") {
    return false;
  }

  return file instanceof File && file.type.startsWith("image/");
};

const isValidPhoneNumber = (value) => {
  const digitCount = value.replace(/\D/g, "").length;

  return phonePattern.test(value) && digitCount >= 8 && digitCount <= 15;
};

export const page1Schema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(
      namePattern,
      "Only letters, spaces, apostrophes, and hyphens are allowed."
    ),
  lastName: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(
      namePattern,
      "Only letters, spaces, apostrophes, and hyphens are allowed."
    ),
  username: z
    .string()
    .trim()
    .min(2, "Username must be at least 2 characters.")
    .regex(usernamePattern, "Use only letters, numbers, and underscores."),
});

export const page2Schema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "This field is required.")
      .email("Please provide a valid email address."),
    phoneNumber: z
      .string()
      .trim()
      .min(1, "This field is required.")
      .refine(isValidPhoneNumber, "Please enter a valid phone number."),
    password: z
      .string()
      .min(1, "This field is required.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
        "Use at least 8 characters with letters and numbers."
      ),
    confirmPassword: z.string().min(1, "This field is required."),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match. Please try again.",
    path: ["confirmPassword"],
  });

export const page3Schema = z.object({
  dateOfBirth: z
    .string()
    .min(1, "This field is required.")
    .refine(isValidCalendarDate, "Please select a date.")
    .refine((value) => value <= getToday(), "Choose a date in the past."),
  profileImage: z.custom(isImageFile, "Please upload an image."),
});
