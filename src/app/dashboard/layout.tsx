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
import PrivateLayout from "@/Private/PrivateLayout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
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
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <PrivateLayout>
      <section className="min-h-screen max-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white h-[70px] md:h-[84px] flex justify-between items-center px-4 md:px-5 3xl:px-10 fixed w-full left-0 right-0 z-40">
          {/* Left */}
          <div className="flex gap-10 2xl:gap-24">
            {/* Logo */}
            <figure
              onClick={() => router.push("/")}
              className="flex gap-2 md:gap-3 items-center cursor-pointer"
            >
              <DashboardLogo />
              <p className="hidden sm:block text-xl md:text-2xl font-bold md:tracking-[-0.203px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] bg-clip-text text-transparent">
                Job Minds
              </p>
            </figure>
            <p className="hidden xl:flex gap-2 items-center w-[350px] 2xl:w-[450px] 3xl:w-[660px] px-4 py-2.5 border border-[#ECEEF0] rounded-full">
              <SearchSvg />
              <input
                type="text"
                placeholder="Search....."
                className="outline-none w-full"
              />
            </p>
          </div>
          {/* Right */}
          <div className="flex gap-3 md:gap-4 items-center">
            <button className="w-9 md:w-10 h-9 md:h-10 rounded-full grid place-items-center cursor-pointer border border-[#ECEEF0]">
              <NotificationSvg />
            </button>
            <select className="border-none outline-none text-dark-blue font-medium">
              <option value="">English</option>
              <option value="">Arabic</option>
            </select>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden w-9 md:w-10 h-8.5 md:h-9.5 cursor-pointer grid place-items-center rounded text-white bg-secondary-blue"
            >
              <FaBars className="text-xl md:text-2xl" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex overflow-x-hidden mt-[70px] md:mt-[84px] h-[calc(100vh-70px)] md:h-[calc(100vh-84px)]">
          {/* Sidebar */}
          <aside
            className={`${
              open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
            } fixed top-0 left-0 z-[999] xl:static max-xl:h-screen w-60 2xl:w-64 3xl:w-72 duration-500 transition-transform shadow bg-white p-4 2xl:p-5 3xl:p-7 shrink-0 overflow-y-auto`}
          >
            {/* Logo */}
            <figure
              onClick={() => router.push("/")}
              className="flex xl:hidden gap-3 items-center cursor-pointer mt-3 mb-8"
            >
              <DashboardLogo />
              <p className="text-2xl font-bold tracking-[-0.203px] bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] bg-clip-text text-transparent">
                Job Minds
              </p>
            </figure>

            {/* Nav Links */}
            <ul className="space-y-4.5 2xl:space-y-5">
              <p className="text-light-gray font-medium">AI Tools</p>

              {navLinks?.map((link, idx) => {
                const isActive = pathname === link.path;

                return (
                  <div key={idx}>
                    <Link
                      key={link.id}
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className={`flex text-[15px] 2xl:text-base px-4 3xl:px-5 py-2.5 2xl:py-3 rounded-[50px] gap-2.5 3xl:gap-4 items-center font-medium
                     ${
                       isActive
                         ? "bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white"
                         : "text-light-gray"
                     }
                  ${
                    (idx === 0 &&
                      pathname.startsWith("/dashboard/resume-builder")) ||
                    (idx === 3 &&
                      pathname.startsWith("/dashboard/mock-interview"))
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

          {/* Outlet */}
          <section className="flex-1 p-4 md:p-5 2xl:p-6 3xl:p-7 bg-gray-100 overflow-y-auto">
            {children}
          </section>

          {/* Blur Overlay */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] transition-opacity duration-300 xl:hidden z-50 ${
              open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        </main>
      </section>
    </PrivateLayout>
  );
}
