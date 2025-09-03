import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

type Education = {
  institution: string;
  subject: string;
  degree: string;
  years: string;
  gpa: number;
};

interface FormValues {
  education: Education[];
}

const StepThree = ({ step, setStep }: any) => {
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const handleNext = async () => {
    const isValid = await trigger("education");
    if (fields.length < 1) {
      toast.error("Please add at least one education");
      return;
    }

    if (isValid) {
      setStep(step + 1);
    }
  };

  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title">Education</h4>
      <p className="section_sub_description !mb-3 md:!mb-5">
        Review your education history. Add multiple entries if needed.
      </p>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid md:grid-cols-2 gap-4 md:gap-5 2xl:gap-7 border border-gray-200 p-4 rounded-xl mb-5 relative"
        >
          {/* Institution */}
          <div>
            <label className="resume_label">Institution Name*</label>
            <input
              type="text"
              placeholder="Enter Your Institution Name"
              className="resume_input"
              {...register(`education.${index}.institution` as const, {
                required: "Institution Name is required",
              })}
            />
            {errors.education?.[index]?.institution && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.education[index]?.institution?.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="resume_label">Subject*</label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="resume_input"
              {...register(`education.${index}.subject` as const, {
                required: "Subject is required",
              })}
            />
            {errors.education?.[index]?.subject && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.education[index]?.subject?.message}
              </p>
            )}
          </div>

          {/* Degree */}
          <div>
            <label className="resume_label">Degree Title*</label>
            <input
              type="text"
              placeholder="Enter Your Degree Title"
              className="resume_input"
              {...register(`education.${index}.degree` as const, {
                required: "Degree Title is required",
              })}
            />
            {errors.education?.[index]?.degree && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.education[index]?.degree?.message}
              </p>
            )}
          </div>

          {/* Graduation Year */}
          <div>
            <label className="resume_label">Graduation Year*</label>
            <input
              type="text"
              placeholder="Enter Graduation Year"
              className="resume_input"
              {...register(`education.${index}.years`, {
                required: "Graduation Year is required",
              })}
            />
            {errors.education?.[index]?.years && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.education[index]?.years?.message}
              </p>
            )}
          </div>

          {/* CGPA */}
          <div>
            <label className="resume_label">CGPA*</label>
            <input
              type="number"
              placeholder="Enter CGPA"
              className="resume_input"
              {...register(`education.${index}.gpa` as const, {
                required: "CGPA is required",
              })}
            />
            {errors.education?.[index]?.gpa && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.education[index]?.gpa?.message}
              </p>
            )}
          </div>

          {/* Remove Button */}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-2 right-2 text-red-500 text-sm"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {/* Add New Education */}
      <button
        type="button"
        onClick={() =>
          append({
            institution: "",
            subject: "",
            degree: "",
            years: "",
            gpa: 0,
          })
        }
        className="secondary-btn mt-3"
      >
        + Add New Education
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-7">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="secondary-btn"
        >
          Back
        </button>
        <button type="button" onClick={handleNext} className="primary-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default StepThree;
