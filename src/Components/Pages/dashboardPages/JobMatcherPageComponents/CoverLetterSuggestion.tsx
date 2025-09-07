import React from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";

const CoverLetterSuggestion = ({ data }: any) => {
  // Func for copy to clipboard
  const handleCopyToClipboard = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;
    tempDiv.querySelectorAll("br").forEach(br => (br.outerHTML = "\n"));
    tempDiv.querySelectorAll("p").forEach(p => {
      p.outerHTML = `${p.innerText}\n\n`;
    });
    const formattedText = tempDiv.innerText || tempDiv.textContent || "";
    navigator.clipboard.writeText(formattedText);
    toast.success("Copied to clipboard");
  };

  return (
    <section className="dashboard_card self-start">
      <h4 className="section_sub_title !mb-3 lg:!mb-5">
        Suggested Cover Letter
      </h4>

      <div className="w-full outline-none p-6 bg-[#F8FAFB] overflow-y-auto text-gray-800 text-[15px] leading-[170%] relative rounded-lg max-h-[500px]">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.replace(/\n/g, "<br />"),
          }}
        />

        {/* Copy to clipboard */}
        <button
          className="absolute top-5 right-5 size-9 border border-gray-300 rounded-full grid place-items-center cursor-pointer"
          onClick={handleCopyToClipboard}
        >
          <MdContentCopy className="text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default CoverLetterSuggestion;
