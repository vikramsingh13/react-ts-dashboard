import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="w-screen flex flex-row">
      <Sidebar />

      {/* this div makes sure the content is not hidden behind the sidebar */}
      <div className="flex flex-col flex-grow">
        <Navbar />

        {/* content will be displayed based on routes */}
        <div className="flex flex-grow justify-center items-center">
          <div>content goes here</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
