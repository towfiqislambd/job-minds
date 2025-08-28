import { ClockSvg, FileSvg } from "@/Components/SvgContainer/SvgContainer";
import React from "react";
import moment from "moment";

type activityItem = {
  id: number;
  title: string;
  type: string;
  created_at: string;
};

interface activityData {
  data: activityItem[];
}

const RecentActivity = ({ data }: activityData) => {
  return (
    <section className="dashboard_card">
      <h4 className="section_sub_title">Recent Activity</h4>

      {/* Map */}
      <div className="mt-3 xl:mt-5 2xl:mt-7 space-y-3 lg:space-y-5">
        {data?.map(({ id, title, type, created_at }) => (
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
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
