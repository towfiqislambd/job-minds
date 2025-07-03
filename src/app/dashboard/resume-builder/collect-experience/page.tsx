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
    <section className="p-7 bg-white shadow-box rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <h4 className="text-dark-blue text-2xl font-semibold leading-[132%] tracking-[-0.319px] mb-2">
          Experience
        </h4>

        {/* Description */}
        <p className="text-light-gray leading-[164%] mb-5">
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

        <div className="flex justify-end gap-5 items-center mt-7">
          {/* Back btn */}
          <button
            onClick={e => {
              e.preventDefault();
              router.back();
            }}
            className="px-6 py-2.5 rounded-[50px] bg-transparent text-primary-blue border border-primary-blue cursor-pointer"
          >
            Back
          </button>

          {/* Next btn */}
          <button className="px-10 py-2.5 rounded-[50px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white cursor-pointer">
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default page;
