import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "../Asset/css/index.css";
import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
const Header = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  return (
    <>
      <CHeader position="sticky" className="mb-4 ">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CHeaderBrand href="#">Header</CHeaderBrand>
          </CHeaderNav>
        </CContainer>
      </CHeader>
    </>
  );
};
export default Header;
