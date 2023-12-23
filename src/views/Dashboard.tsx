import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="flex flex-row min-h-full">

      <Sidebar />

      { /* this div makes sure the content is not hidden behind the sidebar */ }
      <div>
        <Navbar />
        content goes here
      </div>
    
    </div>
  )
};

export default Dashboard;