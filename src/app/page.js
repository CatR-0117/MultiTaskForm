"use client";

import { useState } from "react";

import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import { page1Schema, page2Schema, page3Schema } from "@/lib/formSchemas";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  profileImage: null,
};

const pageSchemas = {
  1: page1Schema,
  2: page2Schema,
  3: page3Schema,
};

const pageFields = {
  1: ["firstName", "lastName", "username"],
  2: ["email", "phoneNumber", "password", "confirmPassword"],
  3: ["dateOfBirth", "profileImage"],
};

const formatZodErrors = (error) =>
  Object.entries(error.flatten().fieldErrors).reduce(
    (errors, [field, messages]) => ({
      ...errors,
      [field]: messages?.[0] ?? "Invalid value.",
    }),
    {}
  );

const Home = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: "",
    }));
  };

  const clearStepErrors = (currentStep) => {
    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      pageFields[currentStep].forEach((field) => {
        delete nextErrors[field];
      });

      return nextErrors;
    });
  };

  const handleNext = (nextStep) => {
    const result = pageSchemas[step].safeParse(values);

    if (!result.success) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        ...formatZodErrors(result.error),
      }));
      return;
    }

    setValues((currentValues) => ({
      ...currentValues,
      ...result.data,
    }));
    clearStepErrors(step);
    setStep(nextStep);
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-8">
      {step === 1 && (
        <Page1
          errors={errors}
          onChange={handleChange}
          onNext={handleNext}
          values={values}
        />
      )}
      {step === 2 && (
        <Page2
          errors={errors}
          onBack={() => setStep(1)}
          onChange={handleChange}
          onNext={handleNext}
          values={values}
        />
      )}
      {step === 3 && (
        <Page3
          errors={errors}
          onBack={() => setStep(2)}
          onChange={handleChange}
          onNext={handleNext}
          values={values}
        />
      )}
      {step === 4 && <Page4 setStep={setStep} />}
    </main>
  );
};

export default Home;
