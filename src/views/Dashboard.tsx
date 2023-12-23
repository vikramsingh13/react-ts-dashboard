import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Flex, Text } from "@radix-ui/themes";

type DashboardProps = {};

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Flex className="w-screen" direction="row">
      <Sidebar />

      {/* this div makes sure the content is not hidden behind the sidebar */}
      <Flex grow="1" direction="column">
        <Navbar />

        {/* content will be displayed based on routes */}
        <Flex grow="1" justify="center" align="center">
          <Text size="6">content goes here</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
