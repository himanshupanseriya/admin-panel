import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilX } from "@coreui/icons";

function WarningModel(props) {
  const { deleteModel, setDeleteModel, sureWantDelete, init } = props;

  return (
    <>
      <CModal show={deleteModel} onClose={() => setDeleteModel(false)}>
        <CModalHeader className="d-flex align-items-center">
          <h3>Confirm!!</h3>
          <CIcon
            content={cilX}
            onClick={() => setDeleteModel(false)}
            style={{ cursor: "pointer" }}
          ></CIcon>
        </CModalHeader>
        <CModalBody>
          <h5>Are You Sure You Want To Delete?</h5>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="success"
            style={{ width: 100 }}
            onClick={() => setDeleteModel(false)}
          >
            No
          </CButton>
          <CButton
            color="danger"
            style={{ width: 100 }}
            onClick={() => {
              sureWantDelete(true);
              setDeleteModel(false);
              init()
            }}
          >
            Yes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default WarningModel;
