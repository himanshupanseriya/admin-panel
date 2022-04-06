import React from "react";
import {
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from "@coreui/react";
// import Logo from "../../public/Asset/logo.jpg"
import CIcon from "@coreui/icons-react";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";

import {
  cilDiamond,
  cilPeople,
  cilDollar,
  cilGraph,
  cilUser,
} from "@coreui/icons";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const {title} = props
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  return (
    <>
      <CSidebar
        position="fixed"
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: visible });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex">
          <CIcon icon={cilDiamond} size="xl" />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <CNavTitle>{title}</CNavTitle>
            <NavLink to="/employee" className="text-decoration-none">
              <CNavItem to="/employee">
                <CIcon customClassName="nav-icon" icon={cilUser} />
                Employee
              </CNavItem>
            </NavLink>
            <NavLink to="/commision" className="text-decoration-none">
              <CNavItem to="/commision">
                <CIcon customClassName="nav-icon" icon={cilDollar} />
                Commission
                {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
              </CNavItem>
            </NavLink>
            <NavLink to="/vendros" className="text-decoration-none">
              <CNavItem to="/vendros">
                <CIcon customClassName="nav-icon" icon={cilPeople} />
                Vendors
              </CNavItem>
            </NavLink>
            <NavLink to="/client" className="text-decoration-none">
              <CNavItem to="/client">
                <CIcon customClassName="nav-icon" icon={cilGraph} />
                Clients
              </CNavItem>
            </NavLink>
          </SimpleBar>
        </CSidebarNav>
        {/* <CSidebarToggler /> */}
      </CSidebar>
    </>
  );
};
export default Sidebar;
