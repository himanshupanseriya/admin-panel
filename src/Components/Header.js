import {
  CContainer,
  CHeader,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import "../Asset/css/index.css";
import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Header = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  return (
    <>
      <CHeader style={{ left: sidebarShow ? "256px" : "0", transition:"0.3s"}}>
        <CContainer fluid className="d-flex align-items-center">
          <div
            className="ps-1 "
            onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
          >
            <CIcon content={cilMenu} size="lg" style={{cursor:"pointer"}}/>
          </div>
        </CContainer>
      </CHeader>
    </>
  );
};
export default Header;
