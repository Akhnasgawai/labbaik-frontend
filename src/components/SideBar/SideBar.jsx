import React, { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Contact,
  ContactRound,
  Plus,
  User,
  UserPlus,
  UserRoundPlus,
  Users,
} from "lucide-react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SideBar = ({ collapseState, setCollapsedState }) => {
  const handleCollapse = () => {
    setCollapsedState(!collapseState);
  };
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isMobile) {
      setCollapsedState(true);
    }
  }, [isMobile, setCollapsedState]);

  const adminMenuItems = [
    { to: "/view_members", icon: <User />, name: "All Members" },
    { to: "/add_members", icon: <Plus />, name: "Add Members" },
    { to: "/view_users", icon: <Contact />, name: "All Users" },
    { to: "/add_users", icon: <UserPlus />, name: "Add Users" },
  ];

  const menuItems = adminMenuItems;
  return (
    <>
      <StyledCircle
        collapsed={collapseState}
        onClick={handleCollapse}
        className="pointer"
        left={collapseState ? "43px" : "200px"}
      >
        {collapseState ? <ArrowRight /> : <ArrowLeft />}
      </StyledCircle>

      <Side collapsed={collapseState}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} to={item.to} collapsed={collapseState}>
            {collapseState ? (
              item.icon
            ) : (
              <>
                {item.icon}
                <span>{item.name}</span>
              </>
            )}
          </MenuItem>
        ))}
      </Side>
    </>
  );
};

export default SideBar;

const StyledCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: ${(props) => (props.collapsed ? "49px" : "49px")};
  left: ${(props) => props.left || "150px"}; /* Dynamic left property */
  z-index: 99;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;

const Side = styled.div`
  width: ${(props) =>
    props.collapsed
      ? "4rem"
      : "14rem"}; /* Adjusted width based on collapsed state */
  box-shadow: 1px 2px 4px rgba(62, 62, 62, 0.5);
  position: sticky;
  bottom: 0;
  top: 0;
  position: fixed;
  background-color: var(--primary-color);
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  color: white;
  justify-content: ${(props) => (props.collapsed ? "center" : "flex-start")};
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin: 10px;
  border-radius: 4px;

  &:hover {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
  }

  &.active {
    background-color: var(--tertiary-color);
    color: var(--text-color);
  }
`;
