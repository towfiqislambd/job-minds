"use client";
import React, { useState } from "react";

interface FormData {
  jobTitle: string;
  companyName: string;
  department: string;
  education: string;
  keySkills: string;
  length: "Short" | "Long";
  tone: "Professional" | "Normal";
}

const page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: "",
    companyName: "",
    department: "",
    education: "",
    keySkills: "",
    length: "Short",
    tone: "Professional",
  });

  const [preview, setPreview] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateCoverLetter = () => {
    const {
      jobTitle,
      companyName,
      department,
      education,
      keySkills,
      length,
      tone,
    } = formData;
    const date = new Date().toLocaleDateString();
    const salutation =
      tone === "Professional" ? `Dear Hiring Manager,` : `Hello,`;
    const intro = `I am excited to apply for the ${jobTitle} position at ${companyName}${
      department ? ` in the ${department} department` : ""
    }. With my background and skills, I am confident in my ability to contribute to your team.`;
    const bodyShort = `My education in ${
      education || "my field"
    } has equipped me with a strong foundation. Additionally, my skills in ${
      keySkills || "various areas"
    } allow me to excel in this role. I am eager to bring my expertise to ${companyName} and contribute to your success.`;
    const bodyLong = `My educational background includes ${
      education || "a comprehensive study in my field"
    }, which has provided me with a robust foundation to tackle complex challenges. Over the course of my academic and professional journey, I have honed my skills in ${
      keySkills || "multiple disciplines"
    }, enabling me to deliver high-quality results. I am particularly drawn to ${companyName}'s innovative approach and am excited about the opportunity to contribute to your team’s success through dedication and collaboration.`;
    const closing =
      tone === "Professional"
        ? `Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to ${companyName}. Please feel free to contact me at your convenience.\n\nSincerely,\n[Your Name]`
        : `Thanks for reviewing my application. I’m excited about the chance to join ${companyName} and would love to talk more about this opportunity.\n\nBest regards,\n[Your Name]`;

    const coverLetter =
      length === "Short"
        ? `${date}\n\n${salutation}\n\n${intro}\n\n${bodyShort}\n\n${closing}`
        : `${date}\n\n${salutation}\n\n${intro}\n\n${bodyLong}\n\n${closing}`;

    setPreview(coverLetter);
    setIsGenerated(true);
  };

  const handleBack = () => {
    setFormData({
      jobTitle: "",
      companyName: "",
      department: "",
      education: "",
      keySkills: "",
      length: "Short",
      tone: "Professional",
    });
    setPreview("");
    setIsGenerated(false);
  };

  const handleSave = () => {
    alert(
      "Cover letter saved! (Note: This is a frontend-only simulation. Backend integration required for actual saving.)"
    );
  };

  const handleDownload = () => {
    if (!preview) {
      alert("Please generate a cover letter first.");
      return;
    }
    const blob = new Blob([preview], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Cover_Letter_${formData.jobTitle || "Job"}_${
      formData.companyName || "Company"
    }.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="flex flex-col gap-5 md:gap-y-7 3xl:gap-y-10">
      <div className="flex flex-col">
        <h3 className="section_title">
          Create Professional Cover Letters in Minutes
        </h3>
        <p className="section_description">
          AI-powered cover letter generator with GPT-4 Turbo integration
        </p>
      </div>

      <div className="flex flex-col 3xl:flex-row gap-6">
        <form className="w-full 3xl:w-[700px] flex flex-col gap-y-1 md:gap-y-3 dashboard_card">
          <div className="flex flex-col gap-y-1 md:gap-y-2 ">
            <h4 className="section_sub_title">Job details</h4>
            <p className="section_sub_description">
              This information will be displayed publicity so be careful what
              you share
            </p>
          </div>

          <div className="flex flex-col gap-4.5 md:gap-y-6">
            <div className="relative">
              <label className="resume_label">Job Title</label>
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Web developer"
                className="resume_input"
                type="text"
              />
            </div>
            <div className="relative">
              <label className="resume_label">Company Name</label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Google"
                className="resume_input"
                type="text"
              />
            </div>
            <div className="relative">
              <label className="resume_label">Department (optional)</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="Mern stack"
                className="resume_input"
                type="text"
              />
            </div>
            <div className="relative">
              <label className="resume_label">Education</label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="List your educational background..."
                className="resume_input !h-[114px] "
              ></textarea>
            </div>
            <div className="relative">
              <label className="resume_label">Key skills</label>
              <textarea
                name="keySkills"
                value={formData.keySkills}
                onChange={handleInputChange}
                placeholder="Describe your key skills"
                className="resume_input !h-[114px] "
              ></textarea>
            </div>
            <div className="relative">
              <label className="resume_label">Letter Length</label>
              <select
                name="length"
                value={formData.length}
                onChange={handleInputChange}
                className="resume_input"
              >
                <option value="Short">Short</option>
                <option value="Long">Long</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 items-center mt-5">
            <div className="flex flex-row gap-3 xl:gap-5 items-center ">
              <button className="primary-btn" onClick={handleBack}>
                Back
              </button>
              <button
                className="primary-btn"
                onClick={e => {
                  e.preventDefault();
                  generateCoverLetter();
                }}
              >
                {isGenerated ? "Re-generate" : "Generate"}
              </button>
            </div>
          </div>
        </form>

        <div className="w-full grow max-h-[637px] flex flex-col gap-y-3 dashboard_card">
          <div className="flex gap-3 md:gap-0 flex-col md:flex-row w-full justify-between">
            <h4 className="section_sub_title">Live Preview</h4>

            <div className="flex flex-row gap-3">
              <select
                name="length"
                value={formData.length}
                onChange={handleInputChange}
                className="h-auto w-auto py-2 md:py-3 cursor-pointer px-4 bg-cream-white rounded-[50px]"
              >
                <option value="Short">Short</option>
                <option value="Long">Long</option>
              </select>
              <select
                name="tone"
                value={formData.tone}
                onChange={handleInputChange}
                className="h-auto w-auto py-2 md:py-3 cursor-pointer px-4 bg-cream-white rounded-[50px]"
              >
                <option value="Professional">Professional</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
          </div>
          <textarea
            className="w-full outline-none h-[517px] p-6 bg-[#F8FAFB]"
            value={preview}
            readOnly
          ></textarea>

          <div className="flex gap-3 xl:gap-5 items-center mt-5">
            <button className="primary-btn" onClick={handleSave}>
              Save
            </button>
            <button className="primary-btn" onClick={handleDownload}>
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
