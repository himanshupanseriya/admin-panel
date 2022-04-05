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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  return (
    <>
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
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
            <CNavTitle>ZECHROME</CNavTitle>
            <Link to="/employee">
              <CNavItem to="/employee">
                <CIcon customClassName="nav-icon" icon={cilUser} />
                Employee
              </CNavItem>
            </Link>
            <Link to="/commision">
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilDollar} />
                Commission
                {/* <CBadge color="primary ms-auto">NEW</CBadge> */}
              </CNavItem>
            </Link>
            <Link to="/vendros">
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilPeople} />
                Vendors
              </CNavItem>
            </Link>
            <Link to="/client">
              <CNavItem href="#">
                <CIcon customClassName="nav-icon" icon={cilGraph} />
                Clients
              </CNavItem>
            </Link>
          </SimpleBar>
        </CSidebarNav>
        {/* <CSidebarToggler /> */}
      </CSidebar>
    </>
  );
};
export default Sidebar;
