import resumeImage from "@/assets/images/dashboard/resume.png";
import Image from "next/image";
const data = [
  {
    id: 1,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 2,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 3,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 4,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 5,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
  {
    id: 6,
    resume_image: resumeImage,
    resume_template_name: "Modern",
    resume_short_description: "Minmalist",
  },
];

const page = () => {
  return (
    <section className="">
      {/* Title */}
      <h3 className="text-dark-blue text-3xl font-bold leading-[132%] tracking-[-0.319px] mb-3">
        Build a Standout Resume in Minutes
      </h3>
      {/* Description */}
      <p className=" text-xl text-light-gray max-w-[680px]">
        Let AI craft your resume with smart suggestions, clean formatting, and
        ready-to-use templates — no design skills required.
      </p>

      {/* Mapped Data */}
      <div className="mt-5 grid grid-cols-4 gap-5">
        {data?.map(item => (
          <div key={item?.id} className="rounded-2xl p-7 bg-white shadow">
            {/* Resume Image */}
            <figure className="w-full rounded-2xl h-[200px] mx-auto shadow-lg">
              <Image
                src={item?.resume_image}
                alt="resume image"
                className="w-full rounded-2xl h-full"
              />
            </figure>

            {/* Resume Name */}
            <h3 className="text-secondary-blue text-center text-5xl leading-[132%] font-bold capitalize">
              {item?.resume_template_name}
            </h3>

            {/* Resume Short Description */}
            <p className="text-gray-400 text-center font-medium text-[22px]">
              {item?.resume_short_description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
