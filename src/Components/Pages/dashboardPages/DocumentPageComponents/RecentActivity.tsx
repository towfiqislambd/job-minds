import moment from "moment";
import React, { useState } from "react";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { useAllRecentActivities } from "@/Hooks/api/dashboard_api";
import { ClockSvg, FileSvg } from "@/Components/SvgContainer/SvgContainer";

type activityItem = {
  id: number;
  title: string;
  type: string;
  created_at: string;
};

const RecentActivity = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { data: allRecentActivities, isLoading } =
    useAllRecentActivities(activePage);

  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title">Recent Activity</h4>

      {/* Map */}
      <div className="mt-3 xl:mt-5 2xl:mt-7 space-y-3 lg:space-y-5">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-3 lg:px-5 lg:py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-0 animate-pulse"
            >
              <div className="flex gap-4 items-center">
                <div className="w-11 lg:w-12 h-11 lg:h-12 rounded-full border border-gray-200 bg-gray-200" />
                <div className="flex flex-col gap-2">
                  <div className="h-4 lg:h-5 w-28 lg:w-32 bg-gray-200 rounded" />
                  <div className="h-3 lg:h-4 w-20 lg:w-24 bg-gray-200 rounded" />
                </div>
              </div>

              <div className="flex gap-2 items-center justify-center md:justify-start">
                <div className="w-4 h-4 bg-gray-200 rounded" />
                <div className="h-3 lg:h-4 w-16 lg:w-20 bg-gray-200 rounded" />
              </div>
            </div>
          ))
        ) : allRecentActivities?.data?.data?.length > 0 ? (
          allRecentActivities?.data?.data?.map(
            ({ id, title, type, created_at }: activityItem) => (
              <div
                key={id}
                className="border border-gray-200 rounded-lg p-3 lg:px-5 lg:py-4 flex flex-col md:flex-row md: md:justify-between md:items-center gap-3 md:gap-0 "
              >
                {/* Left */}
                <div className="flex gap-4 items-center">
                  <p className="w-11 lg:w-12 h-11 lg:h-12 rounded-full grid place-items-center border-2 bg-[#cce6ff] border-secondary-blue">
                    <FileSvg />
                  </p>
                  <p className="flex flex-col gap-1 text-sm lg:text-base">
                    <span className="text-secondary-black font-medium">
                      {title}
                    </span>
                    <span className="text-light-gray">{type}</span>
                  </p>
                </div>

                {/* Right */}
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <ClockSvg />
                  <p className="text-light-gray text-sm lg:text-base">
                    {moment(created_at).fromNow()}
                  </p>
                </div>
              </div>
            )
          )
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 text-center py-16">
            <AiOutlineFileUnknown className="text-5xl text-gray-500" />
            <p className="font-medium text-gray-600">
              No recent activity found yet!
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && (
        <div className="mt-5 flex justify-center items-center gap-2 flex-wrap">
          {allRecentActivities?.data?.links.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => item.url && setActivePage(item.url.split("=")[1])}
              className={`px-3 py-1 rounded border transition-all duration-200 
        ${
          item.active ? "bg-primary-blue text-white" : "bg-white text-gray-700"
        } 
        ${!item.url ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              disabled={!item.url}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentActivity;
