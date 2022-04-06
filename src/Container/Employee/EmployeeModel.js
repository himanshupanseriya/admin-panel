import {
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
} from "@coreui/react";
import React, { useState, useEffect } from "react";
import { saveEmployee, updateEmployee } from "../../Services/EmployeeApi";
import { RequiredField } from "../../Utils/CommonUtils";

const InitialEmployee = {
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  dob: "",
  salary: "",
  address: "",
  status: "",
};

const EmployeeModel = (props) => {
  const { showModal, setShowModal, emplyoeeList, setUserData } = props;
  const [editEmp, setEditEmp] = useState(false);
  const [employee, setEmployee] = useState(InitialEmployee);
  const [checkRequired, setCheckRequired] = useState(false);

  useEffect(() => {
    setEmployee(emplyoeeList);
  }, [emplyoeeList]);

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
    setShowModal(false);
    setEditEmp(false);
    setCheckRequired(false);
    setEmployee(InitialEmployee);
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
      console.log(employee);
      let res = await updateEmployee(employee._id, employee);
      // setEmployee(res.data);
      console.log(res.data);
      closeModel();
      setCheckRequired(false);
    }
  };

  return (
    <>
    
      <h3>Employee Table</h3>
      <button className="btn btn-primary my-2" onClick={() => setEditEmp(!editEmp)}>
        Add New
      </button>
      <CModal
        visible={showModal}
        onClose={() => closeModel()}
        alignment="center"
        size="md"
      >
        <CModalHeader>
          <h3>Employee Details</h3>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="fname">
                First Name : <span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="lname">
                Last Name:<span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="mobile">
                Mobile No:<span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="email">
                Email Id:<span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="dob">
                Date Of Birth : <span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="salary">
                Salary : <span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormInput
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
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="status">
                Status<span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormSelect
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
              </CFormSelect>
              {checkRequired &&
              (!employee.status || employee.status === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol sm="4">
              <CFormLabel htmlFor="address">
                Address<span className="text-danger">*</span>
              </CFormLabel>
            </CCol>
            <CCol sm="8">
              <CFormTextarea
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
            style={{ width: 100 }}
            onClick={closeModel}
          >
            Cancel
          </button>
          <button
            className="btn btn-success"
            style={{ width: 100 }}
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
