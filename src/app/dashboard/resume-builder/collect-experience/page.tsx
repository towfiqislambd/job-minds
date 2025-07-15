"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const page = () => {
  const router = useRouter();

  type formData = {
    work_title: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
    router.push("/dashboard/resume-builder/collect-education");
  };

  return (
    <section className="dashboard_card">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <h4 className="section_sub_title">Experience</h4>

        {/* Description */}
        <p className="section_sub_description !mb-5">
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
              {errors.work_title.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-7">
          {/* Back btn */}
          <button
            onClick={e => {
              e.preventDefault();
              router.back();
            }}
            className="secondary-btn"
          >
            Back
          </button>

          {/* Next btn */}
          <button className="primary-btn">Next</button>
        </div>
      </form>
    </section>
  );
};

export default page;
