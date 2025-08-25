import React from "react";
import { useFormContext } from "react-hook-form";

const StepTwo = ({ step, setStep }: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="dashboard_card">
      {/* Title */}
      <h4 className="section_sub_title">Experience</h4>

      {/* Description */}
      <p className="section_sub_description !mb-3 md:!mb-5">
        Review Your work history.
      </p>

      {/* Work Title */}
      <div>
        <label htmlFor="work_title" className="resume_label">
          Work Title*
        </label>
        <textarea
          rows={5}
          placeholder="Description.... "
          id="work_title"
          className="resume_input"
          {...register("work_title", {
            required: "Work Title is required",
          })}
        ></textarea>
        {errors.work_title && (
          <p className="text-sm text-red-500 mt-1.5">
            {errors.work_title.message as string}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-5 md:mt-7">
        {/* Back btn */}
        <button onClick={() => setStep(step - 1)} className="secondary-btn">
          Back
        </button>

        {/* Next btn */}
        <button type="submit" className="primary-btn">
          Next
        </button>
      </div>
    </section>
  );
};

export default StepTwo;
