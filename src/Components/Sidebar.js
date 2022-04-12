import React, { useRef } from "react";
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavItem,
  CSidebarNavTitle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";

import {
  cilDiamond,
  cilPeople,
  cilDollar,
  cilGraph,
  cilUser,
  cilCaretBottom,
} from "@coreui/icons";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const { title } = props;
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  const selectSidebarValue = useRef(null);

  const openSubMenu = (e) => {
    e.target.classList.toggle("active-tab");
    e.target.nextSibling.classList.toggle("hide-content");
    e.target.parentElement.classList.toggle("e-accordion-item");
  };

  return (
    <>
      <CSidebar
        position="fixed"
        style={{ left: sidebarShow ? "0" : "-256px", transition: "0.3s" }}
      >
        <CSidebarBrand className="d-none d-md-flex">
          <CIcon content={cilDiamond} />
        </CSidebarBrand>
        <CSidebarNav>
          <div className="sidebar-wrapper">
            <CSidebarNavTitle>{title}</CSidebarNavTitle>
            <div className="c-accordion-item e-accordion-item bg-transparent">
              <div
                className="c-accordion-header active-tab"
                id="headingOne"
                onClick={openSubMenu}
              >
                <CIcon content={cilUser} />
                Employee
              </div>
              <div className="py-0 px-0 c-accordion-body">
                <NavLink to="/employee" className="text-decoration-none">
                  <CNavItem to="/employee">
                    <CIcon />
                    List
                  </CNavItem>
                </NavLink>
                <NavLink to="/commission" className="text-decoration-none">
                  <CNavItem to="/commission">
                    <CIcon />
                    Commission
                  </CNavItem>
                </NavLink>
                <NavLink to="/salary" className="text-decoration-none">
                  <CNavItem to="/salary">
                    <CIcon />
                    Salary
                  </CNavItem>
                </NavLink>
              </div>
            </div>
            <NavLink to="/vendors" className="text-decoration-none">
              <CNavItem to="/vendors">
                <CIcon icon={cilPeople} />
                Vendors
              </CNavItem>
            </NavLink>
            <div className="c-accordion-item bg-transparent">
              <div
                className="c-accordion-header"
                id="headingOne"
                onClick={openSubMenu}
              >
                <CIcon content={cilUser} />
                Employee
              </div>
              <div className="py-0 px-0 c-accordion-body hide-content">
                <NavLink to="/employee" className="text-decoration-none">
                  <CNavItem to="/employee">
                    <CIcon />
                    List
                  </CNavItem>
                </NavLink>
                <NavLink to="/commission" className="text-decoration-none">
                  <CNavItem to="/commission">
                    <CIcon />
                    Commission
                  </CNavItem>
                </NavLink>
                <NavLink to="/salary" className="text-decoration-none">
                  <CNavItem to="/salary">
                    <CIcon />
                    Salary
                  </CNavItem>
                </NavLink>
              </div>
            </div>
            <NavLink to="/client" className="text-decoration-none">
              <CNavItem to="/client">
                <CIcon icon={cilGraph} />
                Clients
              </CNavItem>
            </NavLink>
          </div>
        </CSidebarNav>
      </CSidebar>
    </>
  );
};
export default Sidebar;
