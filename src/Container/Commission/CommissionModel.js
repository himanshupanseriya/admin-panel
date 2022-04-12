import React, { useState } from "react";
import moment from "moment";
import {
  CCol,
  CInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
  CLabel,
  CTextarea,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCaretLeft, cilCaretRight } from "@coreui/icons";

const CommissionModel = (props) => {
  const {
    showModal,
    setShowModal,
    setEmployee,
    employee,
    init,
    InitialEmployee,
  } = props;
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const currentDate = (e) => {
    const _date = e.target.value;
    setDate(_date);
  };

  const prevDay = () => {
    let yesterday = moment(date).add(-1, "days").format("YYYY-MM-DD");
    setDate(yesterday);
  };

  const nextDay = () => {
    const nextDay = moment(date).add(1, "days").format("YYYY-MM-DD");
    setDate(nextDay);
  };

  const onAddNewEmployee = () => {
    setShowModal(true);
  };

  const closeModel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="btn btn-dark me-2" onClick={prevDay}>
        <CIcon content={cilCaretLeft} width={20} />
      </button>
      <input
        className="form-control me-2"
        //   className="dateInput"
        type="date"
        onChange={(e) => currentDate(e)}
        value={date}
        style={{
          width: "12%",
          textAlign: "center",
          color: "black",
        }}
      />
      <button className="btn btn-dark me-2" onClick={nextDay}>
        <CIcon content={cilCaretRight} width={20} />
      </button>
      <button
        className="btn btn-primary my-2 ms-auto"
        onClick={() => onAddNewEmployee()}
      >
        Add New
      </button>
      <CModal show={showModal} alignment="center" size="md">
        <CModalHeader>
          <h3>Employee Commission</h3>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="fname">
                First Name : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                id="fname"
                name="fname"
                // value={employee.fname}
                className="Req"
                placeholder="Enter First Name"
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired && (!employee.fname || employee.fname === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="lname">
                Last Name:<span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                id="lname"
                name="lname"
                // value={employee.lname}
                className="Req"
                placeholder="Enter Last Name"
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired && (!employee.lname || employee.lname === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="email">
                Email Id:<span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                type="email"
                id="email"
                name="email"
                // value={employee.email}
                className="Req"
                placeholder="Enter Email Id	"
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired && (!employee.email || employee.email === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="mobile">
                Mobile No:<span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                id="mobile"
                name="mobile"
                // value={employee.mobile}
                className="Req"
                maxLength="10"
                placeholder="Enter Mobile No."
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired &&
              (!employee.mobile || employee.mobile === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="commission">
                commission : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                type="number"
                id="commission"
                name="commission"
                // value={employee.salary}
                className="Req"
                placeholder="Enter commission"
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired &&
              (!employee.salary || employee.salary === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="tich">
                Tich : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                type="number"
                id="tich"
                name="tich"
                // value={employee.salary}
                className="Req"
                placeholder="Enter tich"
                // onChange={(e) => handleInputChange(e)}
              />
              {/* {checkRequired &&
              (!employee.salary || employee.salary === "-1") ? (
                <RequiredField />
              ) : null} */}
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <button
            className="btn btn-danger"
            style={{ width: 100, color: "White" }}
            onClick={closeModel}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            style={{ width: 100, color: "White" }}
            // onClick={onSaveEmployee}
          >
            Save
          </button>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CommissionModel;
