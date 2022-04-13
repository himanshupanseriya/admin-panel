import { cilX } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
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
import React, { useState } from "react";
import { saveEmployee, updateEmployee } from "../../Services/EmployeeApi";
import { RequiredField } from "../../Utils/CommonUtils";

const EmployeeModel = (props) => {
  const {
    showModal,
    setShowModal,
    setEmployee,
    employee,
    init,
    InitialEmployee,
  } = props;
  const [checkRequired, setCheckRequired] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "salary") {
      setEmployee({
        ...employee,
        [name]: parseInt(value),
      });
    } else {
      setEmployee({
        ...employee,
        [name]: value,
      });
    }
  };

  const closeModel = () => {
    setEmployee(InitialEmployee);
    setShowModal(false);
    setCheckRequired(false);
  };

  const onSaveEmployee = async () => {
    setCheckRequired(true);
    let require = true;
    const requiredFieldCollection = document.getElementsByClassName("Req");
    let requiredFields = [...requiredFieldCollection];
    requiredFields = requiredFields.map((field) => {
      if (field.value === "") {
        require = false;
      }
    });
    if (require) {
      employee._id
        ? await updateEmployee(employee._id, employee)
        : await saveEmployee(employee);
      init();
      closeModel();
    }
  };
  const onAddNewEmployee = () => {
    setShowModal(true);
    setEmployee(InitialEmployee);
  };
  return (
    <>
      <h3>Employee Table</h3>
      <button
        className="btn btn-primary my-2 ms-auto"
        onClick={() => onAddNewEmployee()}
      >
        Add New
      </button>
      <CModal
        show={showModal}
        onClose={() => closeModel()}
      >
        <CModalHeader className="d-flex align-items-center">
          <h3>Employee Details</h3>
          <CIcon content={cilX} onClick={closeModel} style={{cursor:"pointer"}}></CIcon>
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
                value={employee.fname}
                className="Req"
                placeholder="Enter First Name"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired && (!employee.fname || employee.fname === "-1") ? (
                <RequiredField />
              ) : null}
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
                value={employee.lname}
                className="Req"
                placeholder="Enter Last Name"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired && (!employee.lname || employee.lname === "-1") ? (
                <RequiredField />
              ) : null}
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
                value={employee.mobile}
                className="Req"
                maxLength="10"
                placeholder="Enter Mobile No."
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!employee.mobile || employee.mobile === "-1") ? (
                <RequiredField />
              ) : null}
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
                value={employee.email}
                className="Req"
                placeholder="Enter Email Id	"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired && (!employee.email || employee.email === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="dob">
                Date Of Birth : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                type="date"
                id="dob"
                name="dob"
                value={employee.dob}
                className="Req"
                placeholder="Enter Date Of Birth"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired && (!employee.dob || employee.dob === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="salary">
                Salary : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CInput
                type="number"
                id="salary"
                name="salary"
                value={employee.salary}
                className="Req"
                placeholder="Enter Salary"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!employee.salary || employee.salary === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="status">
                Status<span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CSelect
                id="status"
                name="status"
                value={employee.status}
                className="Req"
                placeholder="Enter status"
                onChange={(e) => handleInputChange(e)}
              >
                <option value={""} selected hidden disabled>
                  Active / Inactive
                </option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </CSelect>
              {checkRequired &&
              (!employee.status || employee.status === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
          <CRow>
            <CCol sm="4">
              <CLabel htmlFor="address">
                Address<span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              <CTextarea
                rows="2"
                id="address"
                name="address"
                value={employee.address}
                className="Req"
                placeholder="Enter Address"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!employee.address || employee.address === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <button
            className="btn btn-danger"
            style={{ width: 100 ,color:"White"}}
            onClick={closeModel}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            style={{ width: 100 ,color:"White"}}
            onClick={onSaveEmployee}
          >
            Save
          </button>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default EmployeeModel;
