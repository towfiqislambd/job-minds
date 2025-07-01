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
      {/* Sidebars */}
      <aside className="w-[275px] bg-white p-7">
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
            return (
              <>
                <Link
                  key={link.id}
                  href={link.path}
                  className={`flex px-5 py-3 rounded-[50px] gap-4 items-center font-medium ${
                    isActive
                      ? "bg-[linear-gradient(90deg,_#21489F_0%,_#0184FF_100%)] text-white"
                      : "text-light-gray"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
                {idx === 5 && (
                  <p className="text-light-gray font-medium mt-5">Others</p>
                )}
              </>
            );
          })}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </section>
  );
}
