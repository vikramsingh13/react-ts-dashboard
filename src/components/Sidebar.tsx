import React, { useState } from "react";
import SidebarData from "../data/SidebarData";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { BiBarChartSquare, BiBarChartAlt2 } from "react-icons/bi";
import { MdOutlineBrokenImage } from "react-icons/md";

type SidebarProps = {};

// takes a string and returns the corresponding icon
const getIconComponentFromIconName = (icon: string) => {
  switch (icon) {
    case "BiBarChartSquare":
      return <BiBarChartSquare />;
    case "BiBarChartAlt2":
      return <BiBarChartAlt2 />;
    default:
      return <MdOutlineBrokenImage />;
  }
};

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // toggles the isSidebarOpen state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar min-h-full p-4">
      <div className="flex justify-end items-end text-2xl">
        {isSidebarOpen && <FaCircleChevronRight onClick={toggleSidebar} />}
        {!isSidebarOpen && <FaCircleChevronLeft onClick={toggleSidebar} />}
      </div>

      {/* TODO: refactor to make sure the code doesn't repeat itself for open and closed sidebar */}
      {isSidebarOpen &&
        SidebarData.map((item, index) => {
          return (
            <div key={index} className="p-2 [&>*]:p-2 text-2xl">
              <div className="flex flex-row justify-center items-center text-center [&>*]:m-2 ">
                {getIconComponentFromIconName(item.icon)}
                {item.header}
              </div>
              {item.items.map((subItem, subIndex) => {
                return (
                  <div
                    key={subIndex}
                    className="flex flex-row justify-center items-center text-center [&>*]:m-2 "
                  >
                    {getIconComponentFromIconName(subItem.icon)}
                    {subItem.title}
                  </div>
                );
              })}
            </div>
          );
        })}
      {!isSidebarOpen &&
        SidebarData.map((item, index) => {
          return (
            <div key={index} className="p-2 [&>*]:p-2 text-2xl">
              <div className="flex flex-row justify-center items-center text-center [&>*]:m-2 ">
                {getIconComponentFromIconName(item.icon)}
              </div>
              {item.items.map((subItem, subIndex) => {
                return (
                  <div
                    key={subIndex}
                    className="flex flex-row justify-center items-center text-center [&>*]:m-2 "
                  >
                    {getIconComponentFromIconName(subItem.icon)}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default Sidebar;
