"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, KeyboardEvent } from "react";

const Page = () => {
  const router = useRouter();
  const { handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const skill = inputValue.trim().replace(/,$/, "");
      if (!skills.includes(skill)) {
        setSkills(prev => [...prev, skill]);
      }
      setInputValue("");
    }
  };

  const removeSkill = (index: number) => {
    setSkills(prev => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async () => {
    if (skills.length === 0) return;
    console.log(skills);
    router.push("/dashboard/resume-builder/resume-preview");
  };

  return (
    <section className="p-7 bg-white shadow-box rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <h4 className="text-dark-blue text-2xl font-semibold leading-[132%] tracking-[-0.319px] mb-2">
          Skills
        </h4>

        {/* Description */}
        <p className="text-light-gray leading-[164%] mb-5">
          Review Your Skills
        </p>

        {/* Add Skills */}
        <div>
          <label htmlFor="skills" className="resume_label">
            Add Skills*
          </label>
          <input
            id="skills"
            placeholder="Write Your Skills Here...."
            className="resume_input !p-5"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <p className="text-sm text-gray-500 mt-1.5">
            Note: Separate each skill by pressing Enter or Comma.
          </p>
          {skills.length === 0 && (
            <p className="text-sm text-red-500 mt-1.5">
              Please add at least one skill.
            </p>
          )}
        </div>

        {/* Display Added Skills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-primary-blue text-white px-3 py-1 rounded-full flex items-center gap-2"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="text-white hover:text-red-200"
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <div className="flex justify-end gap-5 items-center mt-7">
          {/* Cancel btn */}
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
          <button type="submit" className="primary-btn">
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default Page;
