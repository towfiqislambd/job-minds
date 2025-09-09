import React from "react";

type improvementItem = {
  title: string;
  suggestions: string;
};

interface improvementProps {
  data: improvementItem[];
  setImprovementSuggestions: any;
}

const ResumeSuggestion = ({
  data,
  setImprovementSuggestions,
}: improvementProps) => {
  const handleCheckboxChange = (item: improvementItem, checked: boolean) => {
    setImprovementSuggestions((prev: any) => {
      if (checked) {
        if (!prev.some((p: any) => p.title === item.title)) {
          return [...prev, item];
        }
        return prev;
      } else {
        return prev.filter((p: any) => p.title !== item.title);
      }
    });
  };

  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title !mb-3 lg:!mb-5">Resume Suggestions</h4>

      <div className="space-y-3 lg:space-y-5">
        {data?.map(({ title, suggestions }, idx) => (
          <div key={idx} className="border p-4 rounded-lg border-gray-100">
            <div className="flex flex-row-reverse md:flex-row justify-between items-start gap-3 md:gap-5">
              <div className="-mt-1">
                <p className="section_sub_title !text-sm md:!text-base lg:!text-lg 3xl:!text-xl">
                  {title}
                </p>
                <p className="text-light-gray text-sm lg:text-[15px] 3xl:text-base">
                  {suggestions}
                </p>
              </div>

              <p className="shrink-0 cursor-pointer grid place-items-center">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={e =>
                    handleCheckboxChange(
                      { title, suggestions },
                      e.target.checked
                    )
                  }
                />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSuggestion;
