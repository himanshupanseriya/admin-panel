import { cilCaretLeft, cilCaretRight, cilX } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CButton,
  CCol,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow,
  CSelect,
} from "@coreui/react";
import React, { useState } from "react";
import moment from "moment";
import { RequiredField } from "../../Utils/CommonUtils";
import { useSelector } from "react-redux";
import { saveEmployeeSalary } from "../../Services/SalaryApi";

function SalaryModel(props) {
  const { salary, setSalary, initialSalary, setShowModal, showModal } = props;
  const employeeList = useSelector(
    (state) => state.employeeReducer.employeeData
  );
  const [checkRequired, setCheckRequired] = useState(false);
  const currentMonth = (e) => {
    const _date = e.target.value;
    setSalary({
      ...salary,
      salary_month: _date,
    });
  };

  const prevMonth = () => {
    const month = salary.salary_month;
    const prevMonth = moment(month).add(-1, "M").format("YYYY-MM");
    setSalary({
      ...salary,
      salary_month: prevMonth,
    });
  };

  const nextMonth = () => {
    const month = salary.salary_month;
    const nextMonth = moment(month).add(1, "M").format("YYYY-MM");
    setSalary({
      ...salary,
      salary_month: nextMonth,
    });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    if (name === "fullName") {
      let _id = employeeList.findIndex((list) => list._id === value);
      let f_Name = employeeList[_id].fname;
      let l_Name = employeeList[_id].lname;
      let mo_Number = employeeList[_id].mobile;
      let email_id = employeeList[_id].email;
      setSalary({
        ...salary,
        employee_id: value,
        fname: f_Name,
        lname: l_Name,
        mobile: mo_Number,
        email: email_id,
      });
    } else if (name === "paid_salary") {
      setSalary({
        ...salary,
        [name]: parseInt(value),
      });
    } else {
      setSalary({
        ...salary,
        [name]: value,
      });
    }
  };

  const closeModel = () => {
    setSalary({
      ...salary,
      employee_id: "",
      fname: "",
      lname: "",
      mobile: "",
      email: "",
      paid_salary: "",
    });
    setShowModal(false);
    setCheckRequired(false);
  };
  const addNewEmpSalary = () => {
    setSalary({
      ...salary,
      employee_id: "",
      fname: "",
      lname: "",
      mobile: "",
      email: "",
      paid_salary: "",
    });
    setShowModal(true);
  };
  const saveEmpSalary = async () => {
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
      let response = await saveEmployeeSalary(salary)
      closeModel();
    }
  };
  return (
    <>
      <CButton
        color="dark"
        className="me-2"
        variant="outline"
        onClick={prevMonth}
      >
        <CIcon content={cilCaretLeft} width={20} />
      </CButton>
      <CInput
        className=" me-2"
        type="month"
        onChange={currentMonth}
        value={salary.salary_month}
        style={{
          width: "auto",
          textAlign: "center",
          color: "black",
        }}
      />
      <CButton
        color="dark"
        className="me-2"
        variant="outline"
        onClick={nextMonth}
      >
        <CIcon content={cilCaretRight} width={20} />
      </CButton>
      <CButton color="primary" className="ms-auto" onClick={addNewEmpSalary}>
        Add New
      </CButton>
      <CModal show={showModal} onClose={() => closeModel()}>
        <CModalHeader>
          <h3>Salary</h3>
          <CIcon
            content={cilX}
            onClick={closeModel}
            style={{ cursor: "pointer" }}
          ></CIcon>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="fullName">
                Full Name : <span className="text-danger">*</span>
              </CLabel>
              {checkRequired &&
              (!salary.employee_id || salary.employee_id === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CSelect
                id="fullName"
                name="fullName"
                value={salary.employee_id}
                className="Req"
                onChange={(e) => handleInputChange(e)}
              >
                <option value={""} selected hidden>
                  Select Employee Name
                </option>
                {employeeList?.map((list, index) => (
                  <option value={list._id} key={index}>
                    {list.fname} {list.lname}
                  </option>
                ))}
              </CSelect>
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="mobile">
                Mobile No:<span className="text-danger">*</span>
              </CLabel>
              {checkRequired && (!salary.mobile || salary.mobile === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CInput
                disabled
                id="mobile"
                name="mobile"
                value={salary.mobile}
                className="Req"
                maxLength="10"
                placeholder="Enter Mobile No."
                onChange={(e) => handleInputChange(e)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="email">
                Email Id:<span className="text-danger">*</span>
              </CLabel>
              {checkRequired && (!salary.email || salary.email === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CInput
                disabled
                type="email"
                id="email"
                name="email"
                value={salary.email}
                className="Req"
                placeholder="Enter Email Id	"
                onChange={(e) => handleInputChange(e)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="salary_month1">
                Salary Month : <span className="text-danger">*</span>
              </CLabel>
              {checkRequired &&
              (!salary.salary_month || salary.salary_month === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CInput
                type="month"
                id="salary_month"
                name="salary_month"
                value={salary.salary_month}
                className="Req"
                placeholder="Enter month Of Birth"
                onChange={(e) => handleInputChange(e)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="paid_salary">
                Salary to be paid : <span className="text-danger">*</span>
              </CLabel>
              {checkRequired &&
              (!salary.paid_salary || salary.paid_salary === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CInput
                type="number"
                id="paid_salary"
                name="paid_salary"
                value={salary.paid_salary}
                className="Req"
                placeholder="Enter Salary"
                onChange={(e) => handleInputChange(e)}
              />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton
            color="success"
            onClick={closeModel}
            style={{ width: "100px" }}
          >
            Cancel
          </CButton>
          <CButton
            color="danger"
            onClick={saveEmpSalary}
            style={{ width: "100px" }}
          >
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default SalaryModel;
