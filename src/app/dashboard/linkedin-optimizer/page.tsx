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
    <section>
      <div className="mb-10">
        {/* Title */}
        <h3 className="section_title">LinkedIn Profile Optimizer</h3>

        {/* Description */}
        <p className="section_description">
          Enhance your professional presence with AI-powered suggestions.
        </p>
      </div>
      <div className="px-6 py-8 bg-white rounded-lg">
        <h5 className="text-xl font-bold text-dark-blue mb-6">
          Paste Your LinkedIn Profile
        </h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            placeholder="Paste Your Current LinkedIn Profile Content Below (Summary, About, Experience, Etc.)"
            rows={6}
            cols={50}
            className="w-full mb-10 cv-input"
            id="profileInfo"
            {...register("profileInfo", {
              required: "You must provide your profile information here",
            })}
          ></textarea>
          {errors.profileInfo && (
            <p className="text-sm text-red-500 mb-5">
              {errors.profileInfo.message}
            </p>
          )}

          <button className="primary-btn cursor-pointer" type="submit">
            Analyze Profile
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
