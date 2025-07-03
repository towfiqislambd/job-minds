"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const page = () => {
  const router = useRouter();

  type formData = {
    institution_name: string;
    subject: string;
    degree_title: string;
    graduation_year: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
    router.push("/dashboard/resume-builder/collect-skills");
  };

  return (
    <section className="p-7 bg-white shadow-box rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <h4 className="text-dark-blue text-2xl font-semibold leading-[132%] tracking-[-0.319px] mb-2">
          Education
        </h4>

        {/* Description */}
        <p className="text-light-gray leading-[164%] mb-5">
          Review Your Education history.
        </p>

        <div className="grid grid-cols-2 gap-7">
          {/* Institution Name */}
          <div>
            <label htmlFor="institution_name" className="resume_label">
              Institution Name*
            </label>
            <input
              type="text"
              placeholder="Enter Your Institution Name"
              id="institution_name"
              className="resume_input"
              {...register("institution_name", {
                required: "Institution Name is required",
              })}
            />
            {errors.institution_name && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.institution_name.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="resume_label">
              Subject*
            </label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              id="subject"
              className="resume_input"
              {...register("subject", {
                required: "Subject is required",
              })}
            />
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Degree Title */}
          <div>
            <label htmlFor="degree_title" className="resume_label">
              Degree Title*
            </label>
            <input
              type="text"
              placeholder="Enter Your Degree Title"
              id="degree_title"
              className="resume_input"
              {...register("degree_title", {
                required: "Degree Title is required",
              })}
            />
            {errors.degree_title && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.degree_title.message}
              </p>
            )}
          </div>

          {/* Graduation Year */}
          <div>
            <label htmlFor="graduation_year" className="resume_label">
              Graduation Year*
            </label>
            <input
              type="number"
              placeholder="Enter Graduation Year"
              id="graduation_year"
              className="resume_input"
              {...register("graduation_year", {
                required: "Graduation Year is required",
              })}
            />
            {errors.graduation_year && (
              <p className="text-sm text-red-500 mt-1.5">
                {errors.graduation_year.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-5 items-center mt-7">
          {/* Cancel btn */}
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
