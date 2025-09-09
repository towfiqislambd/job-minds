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
import { RiNotificationOffLine } from "react-icons/ri";
import PrivateLayout from "@/Private/PrivateLayout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "@/Provider/TranslationProvider/TranslationContext";
import { RxCross2 } from "react-icons/rx";
import { MdLogout, MdOutlineNotificationsActive } from "react-icons/md";
import { CgSpinnerTwo } from "react-icons/cg";
import { useLogout } from "@/Hooks/api/auth_api";
import Image from "next/image";
import useAuth from "@/Hooks/useAuth";
import { IoSettingsOutline } from "react-icons/io5";
import { useAllNotifications } from "@/Hooks/api/dashboard_api";
import moment from "moment";

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

const notificationData = [
  {
    id: 1,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "2 second ago",
  },
  {
    id: 2,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "2 days ago",
  },
  {
    id: 3,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "1/11/2025",
  },
  {
    id: 4,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "5 second ago",
  },
  {
    id: 5,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "5 hours ago",
  },
  {
    id: 6,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "2 second ago",
  },
  {
    id: 7,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "3 days ago",
  },
  {
    id: 8,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "4 second ago",
  },
  {
    id: 9,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "2 minutes ago",
  },
  {
    id: 10,
    userProfile: "https://i.ibb.co.com/BH922QRG/profile.jpg",
    title: "New Property Alert!",
    duration: "8 second ago",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const { changeLanguage } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState("US");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const { mutate: logoutMutation, isPending } = useLogout();
  const [openPopup, setOpenPopup] = useState(false);
  const { data: allNotifications, isLoading } = useAllNotifications();

  useEffect(() => {
    const handleWindowClick = () => {
      setNotification(false);
      setOpenPopup(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <PrivateLayout>
      <section className="min-h-screen max-h-screen flex flex-col">
        {/* Dashboard Header */}
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
                onChange={e => {
                  // router.push("/dashboard/documents");
                  // setSearch(e.target.value);
                }}
              />
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-3 items-center">
            {/* Notification Modal */}
            <div className="relative">
              {/* btn */}
              <button
                onClick={e => {
                  e.stopPropagation();
                  setNotification(!notification);
                  setOpenPopup(false);
                }}
                className="w-9 md:w-10 h-9 md:h-10 rounded-full grid place-items-center cursor-pointer border border-[#ECEEF0]"
              >
                <NotificationSvg />
              </button>

              {/* Notification Modal */}
              <div
                onClick={e => e.stopPropagation()}
                className={`${
                  notification
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                } absolute bg-slate-50 top-16 right-0 max-h-[420px] w-[280px] md:w-[320px] rounded-lg shadow-2xl overflow-y-scroll transition-all duration-300 notification_scrollbar z-[999]`}
              >
                <div className="flex justify-between px-4 py-2 sticky top-0 border-b bg-slate-50 border-gray-200">
                  <h3 className="text-xl font-semibold text-headingTextColor">
                    Notifications
                  </h3>
                  <button
                    onClick={() => setNotification(!notification)}
                    className="cursor-pointer"
                  >
                    <RxCross2 className="text-lg" />
                  </button>
                </div>

                <div className="p-5 space-y-4">
                  {isLoading ? (
                    "Loading"
                  ) : allNotifications?.data?.length > 0 ? (
                    allNotifications?.data?.map((notification: any) => (
                      <div
                        key={notification.id}
                        className="flex items-start gap-3"
                      >
                        <figure className="size-10 shrink-0 rounded-full border border-gray-100 grid place-items-center bg-blue-50">
                          <MdOutlineNotificationsActive className="text-xl text-secondary-blue" />
                        </figure>
                        <div className="space-y-1">
                          <p className="font-medium text-gray-800 text-sm">
                            {notification?.data?.title}
                          </p>
                          <span className="text-gray-400 text-sm">
                            {moment(notification?.created_at).fromNow()}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-7 text-gray-600 flex flex-col gap-5 justify-center items-center">
                      <RiNotificationOffLine className="text-5xl" />
                      No Notifications found!!
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Language Modal */}
            <ReactFlagsSelect
              selected={selectedCountry}
              onSelect={countryCode => {
                const languageMap: Record<string, string> = {
                  US: "en",
                  GB: "en",
                  FR: "fr",
                  DE: "de",
                  IT: "it",
                  BD: "bn",
                  IN: "hi",
                };

                const langCode = languageMap[countryCode] || "en";
                changeLanguage(langCode);
                setSelectedCountry(countryCode);
              }}
              countries={["US", "GB", "FR", "DE", "IT", "BD", "IN"]}
              customLabels={{
                US: "English",
                GB: "English (UK)",
                FR: "Français",
                DE: "Deutsch",
                IT: "Italiano",
                BD: "বাংলা",
                IN: "हिन्दी",
              }}
              placeholder="Select Language"
              searchable
              searchPlaceholder="Search..."
              selectedSize={16}
              optionsSize={14}
              className="inline-block"
              selectButtonClassName="p-2 !mt-1 !rounded-full !border-gray-200 bg-[#0F1E3A] text-white"
            />

            {/* Profile Modal */}
            <div
              onClick={e => {
                e.stopPropagation();
                setOpenPopup(!openPopup);
                setNotification(false);
              }}
              className="relative"
            >
              {/* Figure Image */}
              <figure className="size-10 2xl:size-11 bg-primary-blue rounded-full cursor-pointer relative grid place-items-center">
                {user?.avatar ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SITE_URL}/${user?.avatar}`}
                    alt="user"
                    fill
                    className="size-full rounded-full object-cover"
                  />
                ) : (
                  <p className="text-lg lg:text-[22px] font-medium text-white rounded-full">
                    {user?.name.slice(0, 1)}
                  </p>
                )}
              </figure>

              {/* Account Modal */}
              <div
                className={`bg-gray-200 z-50 rounded-xl w-64 lg:w-[260px] 3xl:w-[270px] absolute right-2 2xl:right-0 top-[65px] mt-2 shadow-[0_8px_24px_rgba(0,0,0,0.1)] p-4 3xl:p-5 transition-all duration-300 ${
                  openPopup
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="flex gap-3 md:gap-4 items-center mb-4 lg:mb-5">
                  <figure className="size-10 lg:size-12 bg-primary-blue rounded-full cursor-pointer relative grid place-items-center shrink-0">
                    {user?.avatar ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}/${user?.avatar}`}
                        alt="user"
                        fill
                        className="size-full rounded-full object-cover"
                      />
                    ) : (
                      <p className="text-lg lg:text-[22px] font-medium text-white rounded-full">
                        {user?.name.slice(0, 1)}
                      </p>
                    )}
                  </figure>

                  <div>
                    <h3 className="font-semibold truncate">{user?.name}</h3>
                    <p className="text-gray-500 text-sm w-44 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <hr className="text-gray-300" />

                <div className="mt-4 font-medium flex gap-2.5 lg:gap-3.5 3xl:gap-4 flex-col text-gray-700 text-sm lg:text-[15px]">
                  <button
                    onClick={() => router.push("/dashboard")}
                    className="w-fit flex gap-2 items-center cursor-pointer hover:text-primary-blue duration-200"
                  >
                    <FaUser />
                    Dashboard
                  </button>

                  <button
                    onClick={() => router.push("/dashboard/accounts")}
                    className="w-fit flex gap-2 items-center cursor-pointer hover:text-primary-blue duration-200"
                  >
                    <IoSettingsOutline />
                    Settings
                  </button>

                  <button
                    disabled={isPending}
                    onClick={() => logoutMutation()}
                    className={`text-left text-red-500 w-fit flex gap-2 items-center ${
                      isPending ? "!cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    {isPending ? (
                      <div className="flex gap-2 items-center">
                        <CgSpinnerTwo className="animate-spin text-xl" />
                        <span>Signing out...</span>
                      </div>
                    ) : (
                      <p className="flex gap-1 items-center">
                        <MdLogout />
                        Sign Out
                      </p>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* bar */}
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
                    (idx === 0 &&
                      pathname.startsWith("/dashboard/resume-builder")) ||
                    (idx === 2 &&
                      pathname.startsWith("/dashboard/job-matcher")) ||
                    (idx === 3 &&
                      pathname.startsWith("/dashboard/mock-interview")) ||
                    isActive
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
