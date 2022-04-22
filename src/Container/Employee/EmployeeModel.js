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
  CInputFile,
  CSelect,
} from "@coreui/react";
import React, { useState } from "react";
import { saveEmployee } from "../../Services/EmployeeApi";
import { RequiredField } from "../../Utils/CommonUtils";
import NextPrevious from "../../Components/NextPrevious";
import moment from "moment";
import FormRangeUi from "../../Components/formRangeUI";

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
  const [modelNumberShow, setModelNumberShow] = useState({
    firstModal: true,
    secondModel: false,
    tiredModal: false,
  });
  const maxDate = {
    max_date: moment().format("YYYY-MM-DD"),
  };

  const status = ["PENDING", "PROCESSING", "IN-TRIAL", "SELECTED", "REJECTED"];

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "file" ? target.files[0] : target.value;
    const name = target.name;
    // let _date = target.type === "date" ? moment(new Date(value)).format() : "";
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
    setModelNumberShow({
      ...modelNumberShow,
      firstModal: true,
      secondModel: false,
      tiredModal: false,
    });
  };

  const onSaveEmployee = async () => {
    var formData = new FormData();
    setCheckRequired(true);
    let require = true;
    const requiredFieldCollection = document.getElementsByClassName("Req");
    let requiredFields = [...requiredFieldCollection];
    requiredFields = requiredFields.map((field) => {
      if (field.value === "") {
        require = false;
      }
    });

    // for (const property in employee) {
    //   formData.append(`${property}`, `${employee[property]}`);
    // }
    formData.append("firstName", employee.firstName);
    formData.append("lastName", employee.lastName);
    formData.append("mobile", employee.mobile);
    formData.append("email", employee.email);
    formData.append("dob", moment(employee.dob).format());
    formData.append("salary", employee.salary);
    formData.append("address1", employee.address1);
    formData.append("address2", employee.address2);
    formData.append("status", employee.status);
    formData.append(
      "form_entry_date",
      employee.form_entry_date ? moment(employee.form_entry_date).format() : ""
    );
    formData.append(
      "process_date",
      employee.process_date ? moment(employee.process_date).format() : ""
    );
    formData.append(
      "trial_start_date",
      employee.trial_start_date
        ? moment(employee.trial_start_date).format()
        : ""
    );
    formData.append(
      "trial_end_date",
      employee.trial_end_date ? moment(employee.trial_end_date).format() : ""
    );
    formData.append(
      "employee_start_date",
      employee.employee_start_date
        ? moment(employee.employee_start_date).format()
        : ""
    );
    formData.append(
      "rejected_date",
      employee.rejected_date ? moment(employee.rejected_date).format() : ""
    );
    formData.append("employee_code", employee.employee_code);
    formData.append("profile_photo", employee.profile_photo);
    formData.append("aadharCard_photo", employee.aadharCard_photo);
    formData.append("panCard_photo", employee.panCard_photo);

    if (require) {
      await saveEmployee(formData);
      init();
      // getEmployeesData(formData)

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      // employee._id
      // ? dispatchUpdateEmployee(employee)
      // : // await updateEmployee(employee._id, employee)
      // await saveEmployee(employee);
      // dispatchSaveEmployee(employee);
      closeModel();
    }
  };
  const onAddNewEmployee = () => {
    setShowModal(true);
    setEmployee(InitialEmployee);
  };

  const nextHandle = () => {
    setCheckRequired(true);
    let require = true;
    const requiredFieldCollection = document.getElementsByClassName("Req");
    let requiredFields = [...requiredFieldCollection];
    requiredFields = requiredFields.map((field) => {
      if (field.value === "") {
        require = false;
      }
    });
    {
      if (require && showModal && modelNumberShow.firstModal) {
        setModelNumberShow({
          ...modelNumberShow,
          firstModal: false,
          secondModel: true,
        });
        setCheckRequired(false);
      }
    }
    {
      if (require && showModal && modelNumberShow.secondModel) {
        setModelNumberShow({
          ...modelNumberShow,
          secondModel: false,
          tiredModal: true,
        });
        setCheckRequired(false);
      }
    }
  };

  const previousHandel = () => {
    {
      showModal &&
        modelNumberShow.secondModel &&
        setModelNumberShow({
          ...modelNumberShow,
          firstModal: true,
          secondModel: false,
        });
    }
    {
      showModal &&
        modelNumberShow.tiredModal &&
        setModelNumberShow({
          ...modelNumberShow,
          tiredModal: false,
          secondModel: true,
        });
    }
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
      <CModal show={showModal} onClose={() => closeModel()}>
        <CModalHeader className="d-flex align-items-center">
          <h3>Employee Details</h3>
          <CIcon
            content={cilX}
            onClick={closeModel}
            style={{ cursor: "pointer" }}
          ></CIcon>
        </CModalHeader>
        <CModalBody>
          <FormRangeUi modelNumberShow={modelNumberShow} />
        </CModalBody>
        {showModal && modelNumberShow.firstModal && (
          <CModalBody>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="firstName">
                  First Name : <span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.firstName || employee.firstName === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInput
                  id="firstName"
                  name="firstName"
                  value={employee.firstName}
                  className="Req"
                  placeholder="Enter First Name"
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="lastName">
                  Last Name:<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.lastName || employee.lastName === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInput
                  id="lastName"
                  name="lastName"
                  value={employee.lastName}
                  className="Req"
                  placeholder="Enter Last Name"
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="mobile">
                  Mobile No:<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.mobile || employee.mobile === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInput
                  id="mobile"
                  type="number"
                  name="mobile"
                  value={employee.mobile}
                  className="Req"
                  maxLength="10"
                  placeholder="Enter Mobile No."
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="email">
                  Email Id:<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.email || employee.email === "-1") ? (
                  <RequiredField />
                ) : null}
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
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="dob">
                  Date Of Birth : <span className="text-danger">*</span>
                </CLabel>
                {checkRequired && (!employee.dob || employee.dob === "-1") ? (
                  <RequiredField />
                ) : null}
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
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="salary">
                  Salary : <span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.salary || employee.salary === "-1") ? (
                  <RequiredField />
                ) : null}
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
                  autocomplete="off"
                />
              </CCol>
            </CRow>
            {/* <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="status">
                  Status<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.status || employee.status === "-1") ? (
                  <RequiredField />
                ) : null}
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
              </CCol>
            </CRow> */}
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="address1">
                  Address 1:<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.address1 || employee.address1 === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CTextarea
                  rows="2"
                  id="address1"
                  name="address1"
                  value={employee.address1}
                  className="Req"
                  placeholder="Enter Address"
                  onChange={(e) => handleInputChange(e)}
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="4">
                <CLabel htmlFor="address2">
                  Address 2:<span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                (!employee.address2 || employee.address2 === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CTextarea
                  rows="2"
                  id="address2"
                  name="address2"
                  value={employee.address2}
                  className="Req"
                  placeholder="Enter Native  Address"
                  onChange={(e) => handleInputChange(e)}
                />
              </CCol>
            </CRow>
          </CModalBody>
        )}
        {showModal && modelNumberShow.secondModel && (
          <CModalBody>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="status">
                  Status: <span className="text-danger">*</span>
                </CLabel>
                {!modelNumberShow.firstModal &&
                checkRequired &&
                (!employee.status || employee.status === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CSelect
                  id="status"
                  name="status"
                  value={employee.status}
                  className="Req"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value={""} selected hidden>
                    Select Employee Status
                  </option>
                  {status?.map((list, index) => (
                    <option value={list._id} key={index}>
                      {list}
                    </option>
                  ))}
                </CSelect>
              </CCol>
            </CRow>
            {employee.status === "PENDING" && (
              <CRow className="mb-2">
                <CCol sm="4">
                  <CLabel htmlFor="form_entry_date">
                    Form Entry Date : <span className="text-danger">*</span>
                  </CLabel>
                  {checkRequired &&
                  (!employee.form_entry_date ||
                    employee.form_entry_date === "-1") ? (
                    <RequiredField />
                  ) : null}
                </CCol>
                <CCol sm="8">
                  <CInput
                    type="date"
                    id="form_entry_date"
                    name="form_entry_date"
                    value={employee.form_entry_date}
                    className="Req"
                    onChange={(e) => handleInputChange(e)}
                    max={maxDate.max_date}
                  />
                </CCol>
              </CRow>
            )}
            {employee.status === "PROCESSING" && (
              <CRow className="mb-2">
                <CCol sm="4">
                  <CLabel htmlFor="process_date">
                    Processing Date : <span className="text-danger">*</span>
                  </CLabel>
                  {checkRequired &&
                  (!employee.process_date || employee.process_date === "-1") ? (
                    <RequiredField />
                  ) : null}
                </CCol>
                <CCol sm="8">
                  <CInput
                    type="date"
                    id="process_date"
                    name="process_date"
                    value={employee.process_date}
                    className="Req"
                    onChange={(e) => handleInputChange(e)}
                    autocomplete="off"
                    min={employee.form_entry_date}
                    max={maxDate.max_date}
                  />
                </CCol>
              </CRow>
            )}
            {employee.status === "IN-TRIAL" && (
              <>
                <CRow className="mb-2">
                  <CCol sm="4">
                    <CLabel htmlFor="trial_start_date">
                      Trial Start Date: <span className="text-danger">*</span>
                    </CLabel>
                    {checkRequired &&
                    (!employee.trial_start_date ||
                      employee.trial_start_date === "-1") ? (
                      <RequiredField />
                    ) : null}
                  </CCol>
                  <CCol sm="8">
                    <CInput
                      type="date"
                      id="trial_start_date"
                      name="trial_start_date"
                      value={employee.trial_start_date}
                      className="Req"
                      placeholder="Enter Salary"
                      onChange={(e) => handleInputChange(e)}
                      autocomplete="off"
                      min={employee.process_date}
                      max={maxDate.max_date}
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-2">
                  <CCol sm="4">
                    <CLabel htmlFor="trial_end_date">
                      Trial End Date : <span className="text-danger">*</span>
                    </CLabel>
                    {checkRequired &&
                    (!employee.trial_end_date ||
                      employee.trial_end_date === "-1") ? (
                      <RequiredField />
                    ) : null}
                  </CCol>
                  <CCol sm="8">
                    <CInput
                      type="date"
                      id="trial_end_date"
                      name="trial_end_date"
                      value={employee.trial_end_date}
                      className="Req"
                      placeholder="Enter Salary"
                      onChange={(e) => handleInputChange(e)}
                      autocomplete="off"
                      min={employee.trial_start_date}
                      max={maxDate.max_date}
                    />
                  </CCol>
                </CRow>
              </>
            )}
            {employee.status === "SELECTED" && (
              <>
                <CRow className="mb-2">
                  <CCol sm="4">
                    <CLabel
                      htmlFor="employee_start_date"
                      style={{ fontSize: "13px" }}
                    >
                      Employee Start Date:
                      <span className="text-danger">*</span>
                    </CLabel>
                    {checkRequired &&
                    (!employee.employee_start_date ||
                      employee.employee_start_date === "-1") ? (
                      <RequiredField />
                    ) : null}
                  </CCol>
                  <CCol sm="8">
                    <CInput
                      type="date"
                      id="employee_start_date"
                      name="employee_start_date"
                      value={employee.employee_start_date}
                      className="Req"
                      placeholder="Enter Salary"
                      onChange={(e) => handleInputChange(e)}
                      autocomplete="off"
                      min={employee.trial_end_date}
                      max={maxDate.max_date}
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-2">
                  <CCol sm="4">
                    <CLabel htmlFor="employee_code">
                      Employee Code : <span className="text-danger">*</span>
                    </CLabel>
                    {checkRequired &&
                    (!employee.employee_code ||
                      employee.employee_code === "-1") ? (
                      <RequiredField />
                    ) : null}
                  </CCol>
                  <CCol sm="8">
                    <CInput
                      type="text"
                      id="employee_code"
                      name="employee_code"
                      value={employee.employee_code}
                      className="Req"
                      placeholder="Enter Employee Code"
                      onChange={(e) => handleInputChange(e)}
                      autocomplete="off"
                    />
                  </CCol>
                </CRow>
              </>
            )}
            {employee.status === "REJECTED" && (
              <CRow className="mb-2">
                <CCol sm="4">
                  <CLabel htmlFor="rejected_date">
                    Rejected Date : <span className="text-danger">*</span>
                  </CLabel>
                  {checkRequired &&
                  (!employee.rejected_date ||
                    employee.rejected_date === "-1") ? (
                    <RequiredField />
                  ) : null}
                </CCol>
                <CCol sm="8">
                  <CInput
                    type="date"
                    id="rejected_date"
                    name="rejected_date"
                    value={employee.rejected_date}
                    className="Req"
                    placeholder="Enter Salary"
                    onChange={(e) => handleInputChange(e)}
                    autocomplete="off"
                    max={maxDate.max_date}
                  />
                </CCol>
              </CRow>
            )}
          </CModalBody>
        )}
        {showModal && modelNumberShow.tiredModal && (
          <CModalBody>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="profile_photo">
                  Photo Upload :{" "}
                  <span
                    className={
                      employee.status === "SELECTED" ? "text-danger" : "d-none"
                    }
                  >
                    *
                  </span>
                </CLabel>
                {employee.status === "SELECTED" &&
                checkRequired &&
                (!employee.profile_photo || employee.profile_photo === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInputFile
                  type="file"
                  id="profile_photo"
                  name="profile_photo"
                  // value={employee.profile_photo}
                  className={employee.status === "SELECTED" ? "Req" : ""}
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => handleInputChange(e)}
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="aadharCard_photo">
                  Adhara-Card :{" "}
                  <span
                    className={
                      employee.status === "SELECTED" ? "text-danger" : "d-none"
                    }
                  >
                    *
                  </span>
                </CLabel>
                {employee.status === "SELECTED" &&
                checkRequired &&
                (!employee.aadharCard_photo ||
                  employee.aadharCard_photo === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInputFile
                  type="file"
                  id="aadharCard_photo"
                  name="aadharCard_photo"
                  // value={employee.aadharCard_photo}
                  className={employee.status === "SELECTED" ? "Req" : ""}
                  onChange={(e) => handleInputChange(e)}
                />
              </CCol>
            </CRow>
            <CRow className="mb-2">
              <CCol sm="4">
                <CLabel htmlFor="panCard_photo">
                  PAN-Card :{" "}
                  <span
                    className={
                      employee.status === "SELECTED" ? "text-danger" : "d-none"
                    }
                  >
                    *
                  </span>
                </CLabel>
                {employee.status === "SELECTED" &&
                checkRequired &&
                (!employee.panCard_photo || employee.panCard_photo === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="8">
                <CInputFile
                  type="file"
                  id="panCard_photo"
                  name="panCard_photo"
                  // value={employee.panCard_photo}
                  className={employee.status === "SELECTED" ? "Req" : ""}
                  onChange={(e) => handleInputChange(e)}
                />
              </CCol>
            </CRow>
          </CModalBody>
        )}

        <CModalFooter>
          <NextPrevious
            previousHandel={previousHandel}
            nextHandle={nextHandle}
            nextButtonText={modelNumberShow.tiredModal ? "Save" : "Next"}
            onSaveEmployee={onSaveEmployee}
          />
        </CModalFooter>
      </CModal>
    </>
  );
};

export default EmployeeModel;
