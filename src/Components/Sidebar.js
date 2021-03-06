import React from "react";
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
  const { title } = props;
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  return (
    <>
      <CSidebar
        position="fixed"
        // visible={sidebarShow}
        // onVisibleChange={(visible) => {
        //   dispatch({ type: "set", sidebarShow: visible });
        // }}
        style={{ left: sidebarShow ? "0" : "-256px" ,transition:"0.3s"}}
      >
        <CSidebarBrand className="d-none d-md-flex">
          <CIcon icon={cilDiamond} size="xl" />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <CSidebarNavTitle>{title}</CSidebarNavTitle>
            <div className="accordion" activeItemKey={1}>
              <div className="accordion-item" itemKey={1} className="bg-transparent">
                <div className="accordion-header">
                  <CIcon customClassName="nav-icon" icon={cilUser} />
                  Employee
                </div>
                <div className="py-0 px-0 accordion-body">
                  <NavLink to="/employee" className="text-decoration-none">
                    <CSidebarNavItem to="/employee">
                      <CIcon customClassName="nav-icon" />
                      List
                    </CSidebarNavItem>
                  </NavLink>
                  <NavLink to="/commission" className="text-decoration-none">
                    <CNavItem to="/commission">
                      <CIcon customClassName="nav-icon"/>
                      Commission
                    </CNavItem>
                  </NavLink>
                  <NavLink to="/salary" className="text-decoration-none">
                    <CNavItem to="/salary">
                      <CIcon customClassName="nav-icon"/>
                      Salary
                    </CNavItem>
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/vendors" className="text-decoration-none">
              <CNavItem to="/vendors">
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
      </CSidebar>
    </>
  );
};
export default Sidebar;
