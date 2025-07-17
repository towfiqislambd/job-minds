"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type formData = {
  profileInfo: string;
};
const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {
    console.log(data);
    router.push("/dashboard/linkedin-optimizer/improvement");
  };

  return (
    <>
      <div className="mb-7 3xl:mb-10">
        {/* Title */}
        <h3 className="section_title">LinkedIn Profile Optimizer</h3>

        {/* Description */}
        <p className="section_description">
          Enhance your professional presence with AI-powered suggestions.
        </p>
      </div>

      <div className="dashboard_card">
        <h5 className="section_sub_title !mb-3.5 3xl:!mb-5">
          Paste Your LinkedIn Profile
        </h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Paste Your Current LinkedIn Profile Content Below (Summary, About, Experience, Etc.)"
            rows={5}
            className="resume_input"
            id="profileInfo"
            {...register("profileInfo", {
              required: "You must provide your profile information here",
            })}
          ></textarea>

          {errors.profileInfo && (
            <p className="text-sm text-red-500 mt-1">
              {errors.profileInfo.message}
            </p>
          )}

          <button className="primary-btn mt-5">Analyze Profile</button>
        </form>
      </div>
    </>
  );
};

export default Page;
