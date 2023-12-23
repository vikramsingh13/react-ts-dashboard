import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Text, Flex, Em, Box } from "@radix-ui/themes";
import NotificationData from "../data/NotificationData";
import { IoPersonCircle } from "react-icons/io5";
import { RiNotification2Fill } from "react-icons/ri";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  //TODO: refactor these styles with props or theme context
  const navbarStyle = "bg-gray-200 text-black text-2xl min-h-12 w-full max-w-full flex flex-row justify-end text-center";
  const itemStyle = "p-2 mb-2 text-center text-black";
  const dropdownContentStyle =
    "bg-gray-200 text-black min-w-48 max-w-64 rounded";

  return (
    <nav className={navbarStyle}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <RiNotification2Fill />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={dropdownContentStyle}>
            {NotificationData.map((item, index) => {
              return (
                <a href={item.redirectLink} key={index}>
                  <DropdownMenu.Item className={itemStyle}>
                    <Flex
                      direction="column"
                      gap="1"
                      justify="center"
                      align="center"
                      className="text-center"
                    >
                      <Text as="p">{item.title}</Text>
                      <Text as="p" className="text-sm wrap font-thin" size="1">
                        {item.message}
                      </Text>
                      <Text
                        as="p"
                        trim="both"
                        className="text-xs italic font-light"
                      >
                        {item.dateCreated}
                      </Text>
                    </Flex>
                  </DropdownMenu.Item>
                </a>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IoPersonCircle />
        </DropdownMenu.Trigger>
      </DropdownMenu.Root>
    </nav>
  );
};

export default Navbar;
