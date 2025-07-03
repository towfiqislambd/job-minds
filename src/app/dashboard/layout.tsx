"use client";
import {
  DashboardLogo,
  DFive,
  DFour,
  DOne,
  DSeven,
  DSix,
  DThree,
  DTwo,
  NotificationSvg,
  SearchSvg,
} from "@/Components/SvgContainer/SvgContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    id: 1,
    label: "Resume Builder",
    path: "/dashboard/resume-builder",
    icon: <DOne />,
  },
  {
    id: 2,
    label: "Cover Letter Tool",
    path: "/dashboard/cover-letter-tools",
    icon: <DTwo />,
  },
  {
    id: 3,
    label: "Job Matcher",
    path: "/dashboard/job-matcher",
    icon: <DThree />,
  },
  {
    id: 4,
    label: "Interview Coach",
    path: "/dashboard/interview-coach",
    icon: <DFour />,
  },
  {
    id: 5,
    label: "Linkedin Optimizer",
    path: "/dashboard/linkedin-optimizer",
    icon: <DFive />,
  },
  {
    id: 6,
    label: "Documents",
    path: "/dashboard/documents",
    icon: <DSix />,
  },
  {
    id: 7,
    label: "Account",
    path: "/dashboard/accounts",
    icon: <DSeven />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="min-h-screen max-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white p-7 shrink-0">
        {/* Logo */}
        <figure className="flex gap-3 items-center mb-10">
          <DashboardLogo />
          <p className="text-2xl font-bold tracking-[-0.203px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] bg-clip-text text-transparent">
            Job Minds
          </p>
        </figure>

        {/* Nav Links */}
        <ul className="space-y-5">
          <p className="text-light-gray font-medium">AI Tools</p>

          {navLinks?.map((link, idx) => {
            const isActive = pathname === link.path;
            const isCreating =
              pathname === "/dashboard/resume-builder/collect-personal-info" ||
              pathname === "/dashboard/resume-builder/collect-education" ||
              pathname === "/dashboard/resume-builder/collect-experience" ||
              pathname === "/dashboard/resume-builder/collect-skills" ||
              pathname === "/dashboard/resume-builder/resume-preview";
            return (
              <div key={idx}>
                <Link
                  key={link.id}
                  href={link.path}
                  className={`flex px-5 py-3 rounded-[50px] gap-4 items-center font-medium
                     ${
                       isActive
                         ? "bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white"
                         : "text-light-gray"
                     }
                  ${
                    idx === 0 && isCreating
                      ? "bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white"
                      : "text-light-gray"
                  }
                    `}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
                {idx === 5 && (
                  <p className="text-light-gray font-medium mt-5">Others</p>
                )}
              </div>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-white h-[84px] flex justify-between items-center px-11">
          {/* Left */}
          <p className="flex gap-2 items-center w-[660px] px-4 py-2.5 border border-[#ECEEF0] rounded-full">
            <SearchSvg />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
            />
          </p>
          {/* Right */}
          <div className="flex gap-3 items-center">
            <button className="w-10 h-10 rounded-full grid place-items-center cursor-pointer border border-[#ECEEF0]">
              <NotificationSvg />
            </button>
            <select className="border-none outline-none text-dark-blue font-medium">
              <option value="">English</option>
              <option value="">Arabic</option>
            </select>
          </div>
        </section>

        {/* outlet */}
        <section className="p-7 bg-gray-100 h-[calc(100vh-84px)] overflow-y-auto">
          {children}
        </section>
      </main>
    </section>
  );
}
