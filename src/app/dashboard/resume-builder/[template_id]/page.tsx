"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import StepOne from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepOne";
import StepTwo from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepTwo";
import StepThree from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepThree";
import StepFour from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepFour";
import StepFive from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepFive";

const steps = [
  { component: StepOne },
  { component: StepTwo },
  { component: StepThree },
  { component: StepFour },
  { component: StepFive },
];

const page = ({ params }: any) => {
  const { template_id } = params;
  const [step, setStep] = useState<number>(1);
  const onNext = () => setStep(prev => Math.min(prev + 1, steps.length));
  const onPrev = () => setStep(prev => Math.max(prev - 1, 1));

  // Hook Form instance
  const methods = useForm({
    defaultValues: {
      name: "sdfdsfdsf",
      photo: null,
      skills: [],
    },
    mode: "onBlur",
  });

  const CurrentStep = steps[step - 1].component;

  const onSubmit = (data: any) => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      console.log(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {/* Step content */}
        <CurrentStep
          step={step}
          setStep={setStep}
          onNext={onNext}
          onPrev={onPrev}
        />
      </form>
    </FormProvider>
  );
};

export default page;
