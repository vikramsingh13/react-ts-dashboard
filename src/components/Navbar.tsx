import React from "react";
import { NotificationData, AccountDropdownData } from "../data/NotificationData";
import { IoPersonCircle } from "react-icons/io5";
import { RiNotification2Fill } from "react-icons/ri";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  //TODO: refactor these styles with props or theme context
  const navbarStyle =
    "text-2xl min-h-12 w-full max-w-full flex flex-row justify-end text-center [&>*]:p-2 [&>*]:m-2" +
    " bg-teal-200 text-black ";
  const itemStyle = "p-2 mb-2 text-center text-black";
  const dropdownContentStyle =
    "bg-gray-200 text-black min-w-48 max-w-64 rounded";

  // returns an array of <MenuItem> components for notifications dropdown
  const getNotificationItems: () => JSX.Element[] = () => {
    return NotificationData.map((item, index) => {
      return (
        <MenuItem key={index} onClick={e => (console.log('Redirecting notification: ' + item.title + ' to ' + item.redirectLink))}>
          <div className="flex flex-col justify-center items-center text-center min-w-48 max-w-64 mb-2 text-black">

          <div className="font-light text-sm">{item.title}</div>
          <div className="font-thin text-wrap text-sm">{item.message}</div>
          <div className="font-thin italic text-xs">{item.dateCreated}</div>
          </div>
        </MenuItem>
      );
    });
  };

  // returns an array of <MenuItem> components for account dropdown
  const getAccountItems: () => JSX.Element[] = () => {
    return AccountDropdownData.map((item, index) => {
      return (
        <MenuItem key={index} onClick={e => (console.log('Redirecting account item: ' + item.label + ' to ' + item.redirectLink))}>
          <div className="flex flex-col justify-center items-center text-center min-w-48 max-w-64 mb-2 text-black">
            {item.label}
          </div>
        </MenuItem>
      );
    });
  };

  return (
    <nav className={navbarStyle}>
      <Menu size="xl">
        <MenuButton as={Button}>
          <RiNotification2Fill />
        </MenuButton>
        <MenuList>
          {...getNotificationItems()}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button}>
          <IoPersonCircle />
        </MenuButton>
        <MenuList>
          {...getAccountItems()}
        </MenuList>
      </Menu>
    </nav>
  );
};

export default Navbar;
