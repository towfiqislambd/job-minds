import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useState, KeyboardEvent } from "react";

const StepFour = ({ step, setStep }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const { trigger, getValues, setValue } = useFormContext();

  useEffect(() => {
    const savedSkills = getValues("skills");
    if (Array.isArray(savedSkills) && savedSkills.length > 0) {
      setSkills(savedSkills);
    }
  }, [getValues]);

  useEffect(() => {
    setValue("skills", skills, { shouldValidate: true });
  }, [skills, setValue]);

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

  const handleNext = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isValid = await trigger("skills");
    if (isValid && skills.length > 0) {
      setStep(step + 1);
    }
  };

  return (
    <section className="dashboard_card">
      {/* Title */}
      <h3 className="section_sub_title">Skills</h3>

      {/* Description */}
      <p className="section_sub_description !mb-3 md:!mb-5">
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
          className="resume_input !p-3 md:!p-5"
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

      <div className="flex justify-end gap-3.5 2xl:gap-5 items-center mt-7">
        {/* Cancel btn */}
        <button onClick={() => setStep(step - 1)} className="secondary-btn">
          Back
        </button>

        {/* Next btn */}
        <button type="submit" className="primary-btn">
          Submit
        </button>
      </div>
    </section>
  );
};

export default StepFour;
