import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

type Experience = {
  company_name: string;
  title: string;
  years: string;
  description: string;
};

interface FormValues {
  experience: Experience[];
}

const StepTwo = ({ step, setStep }: any) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <section className="dashboard_card">
      {/* Title */}
      <h4 className="section_sub_title">Experience</h4>
      <p className="section_sub_description !mb-3 md:!mb-5">
        Review your work history. Add multiple experiences if needed.
      </p>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid md:grid-cols-2 gap-4 md:gap-5 2xl:gap-7 border border-gray-200 p-4 rounded-xl mb-5 relative"
        >
          {/* Company Name */}
          <div>
            <label
              htmlFor={`experience.${index}.company_name`}
              className="resume_label"
            >
              Company Name*
            </label>
            <input
              type="text"
              placeholder="Enter Your Company Name"
              className="resume_input"
              {...register(`experience.${index}.company_name`, {
                required: "Company Name is required",
              })}
            />
            {errors.experience?.[index]?.company_name && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.experience[index].company_name.message}
              </p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <label
              htmlFor={`experience.${index}.title`}
              className="resume_label"
            >
              Job Title*
            </label>
            <input
              type="text"
              placeholder="Enter Your Job Title"
              className="resume_input"
              {...register(`experience.${index}.title`, {
                required: "Job Title is required",
              })}
            />
            {errors.experience?.[index]?.title && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.experience[index].title.message}
              </p>
            )}
          </div>

          {/* Years */}
          <div>
            <label
              htmlFor={`experience.${index}.years`}
              className="resume_label"
            >
              Years of experience*
            </label>
            <input
              type="text"
              placeholder="2012 — 2015"
              className="resume_input"
              {...register(`experience.${index}.years`, {
                required: "Years of experience is required",
              })}
            />
            {errors.experience?.[index]?.years && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.experience[index].years.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label
              htmlFor={`experience.${index}.description`}
              className="resume_label"
            >
              Description*
            </label>
            <textarea
              rows={4}
              placeholder="Add Description"
              className="resume_input"
              {...register(`experience.${index}.description`, {
                required: "Description is required",
              })}
            ></textarea>
            {errors.experience?.[index]?.description && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.experience[index].description.message}
              </p>
            )}
          </div>

          {/* Remove button */}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute top-3 right-3 text-red-500 text-sm cursor-pointer"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {/* Add New Experience Button */}
      <button
        type="button"
        onClick={() =>
          append({
            company_name: "",
            title: "",
            years: "",
            description: "",
          })
        }
        className="secondary-btn mt-3"
      >
        + Add New Experience
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-5 md:mt-7">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="secondary-btn"
        >
          Back
        </button>
        <button type="submit" className="primary-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
