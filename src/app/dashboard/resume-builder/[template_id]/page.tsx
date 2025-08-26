"use client";
import React, { use, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import StepTwo from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepTwo";
import StepThree from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepThree";
import StepFour from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepFour";
import { useCreateResume } from "@/Hooks/api/dashboard_api";
import StepOne from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepOne";
import StepFive from "@/Components/Pages/dashboardPages/resumeBuilderComponents/StepFive";

const steps = [
  { component: StepOne },
  { component: StepTwo },
  { component: StepThree },
  { component: StepFour },
  { component: StepFive },
];

interface Props {
  params: Promise<{ template_id: string }>;
}

const page = ({ params }: Props) => {
  const { template_id } = use(params);
  const { mutateAsync: createResumeMutation, isPending } =
    useCreateResume(template_id);
  const [step, setStep] = useState<number>(1);
  const [generatedTemplate, setGeneratedTemplate] = useState<any>(null);
  const onNext = () => setStep(prev => Math.min(prev + 1, steps.length));
  const onPrev = () => setStep(prev => Math.max(prev - 1, 1));

  // Hook Form instance
  const methods = useForm({
    defaultValues: {
      name: "",
      email: "",
      professional_title: "",
      address: "",
      website: "",
      phone: "",
      whatsapp_number: "",
      linkedin: "",
      portfolio: "",
      instagram: "",
      facebook: "",
      twitter: "",
      photo: "",
      career_objective: "",
      skills: [],
      education: [],
      experience: [],
    },
    mode: "onBlur",
  });

  const CurrentStep = steps[step - 1]?.component;

  const onSubmit = async (data: any) => {
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      const formData = new FormData();

      // Append regular fields
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("professional_title", data.professional_title);
      formData.append("address", data.address);
      formData.append("website", data.website);
      formData.append("phone", data.phone);
      formData.append("whatsapp_number", data.whatsapp_number);
      formData.append("linkedin", data.linkedin);
      formData.append("portfolio", data.portfolio);
      formData.append("instagram", data.instagram);
      formData.append("facebook", data.facebook);
      formData.append("twitter", data.twitter);
      formData.append("photo", data.photo);
      formData.append("career_objective", data.career_objective);

      // Append array data
      data.education?.forEach((edu: any, index: number) => {
        formData.append(
          `education[${index}][institution]`,
          edu.institution || ""
        );
        formData.append(`education[${index}][subject]`, edu.subject || "");
        formData.append(`education[${index}][degree]`, edu.degree || "");
        formData.append(`education[${index}][years]`, edu.years || "");
        formData.append(`education[${index}][gpa]`, edu.gpa || "");
      });

      data.experience?.forEach((exp: any, index: number) => {
        formData.append(
          `experience[${index}][company_name]`,
          exp.company_name || ""
        );
        formData.append(`experience[${index}][title]`, exp.title || "");
        formData.append(`experience[${index}][years]`, exp.years || "");
        formData.append(
          `experience[${index}][description]`,
          exp.description || ""
        );
      });

      data.skills?.forEach((skill: string, index: number) => {
        formData.append(`skills[${index}]`, skill);
      });

      const response = await createResumeMutation(formData);
      setGeneratedTemplate(response);
      setStep(5);
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
          template={generatedTemplate}
          isPending={isPending}
        />
      </form>
    </FormProvider>
  );
};

export default page;
