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
  CButton,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCaretLeft, cilCaretRight, cilX } from "@coreui/icons";

import {
  commissionDataSave,
  commissionDataUpdate,
} from "../../Redux/Actions/CommissionAction";
import { useDispatch, useSelector } from "react-redux";
import { RequiredField } from "../../Utils/CommonUtils";

const CommissionModel = (props) => {
  const { showModal, setShowModal, emvCommission, setEmvCommissionAdd } = props;
  // const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [checkRequired, setCheckRequired] = useState(false);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const [modelNumberShow, setModelNumberShow] = useState({
    firstModal: true,
    secondModel: false,
    tiredModal: true,
  });

  const employeeList = useSelector(
    (state) => state.employeeReducer.employeeData
  );

  const currentDate = (e) => {
    const _date = e.target.value;
    setEmvCommissionAdd({
      ...emvCommission,
      commission_date: _date,
    });
  };

  const prevDay = () => {
    const date = emvCommission.commission_date;
    let yesterday = moment(date).add(-1, "days").format("YYYY-MM-DD");
    setEmvCommissionAdd({
      ...emvCommission,
      commission_date: yesterday,
    });
  };

  const nextDay = () => {
    const date = emvCommission.commission_date;
    const nextDay = moment(date).add(1, "days").format("YYYY-MM-DD");
    setEmvCommissionAdd({
      ...emvCommission,
      commission_date: nextDay,
    });
    // setDate(nextDay);
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
      setEmvCommissionAdd({
        ...emvCommission,
        employee_id: value,
        fname: f_Name,
        lname: l_Name,
        mobile: mo_Number,
        email: email_id,
      });
    } else {
      setEmvCommissionAdd({
        ...emvCommission,
        [name]: value,
      });
    }
  };

  const dispatchUpdateCommission = (data) => {
    dispatch(commissionDataUpdate(data));
  };

  const dispatchSaveCommission = (data) => {
    dispatch(commissionDataSave(data));
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
      let _emvCommission = {
        employee_id: emvCommission.employee_id,
        date: emvCommission.commission_date,
        commission: emvCommission.commission,
        tich: emvCommission.tich,
      };
      dispatchSaveCommission(_emvCommission);

      // ? dispatchUpdateCommission(_emvCommission)
      closeModel();
    }
  };

  const onAddNewEmployee = () => {
    setShowModal(true);
    setDisabled(true);
  };

  const closeModel = () => {
    setEmvCommissionAdd({
      ...emvCommission,
      employee_id: "",
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      commission: "",
      tich: "",
      commission_date: moment().format("YYYY-MM-DD"),
    });
    setShowModal(false);
    setDisabled(false);
  };

  const commissionCounter = () => {
    const _value = emvCommission.tich / 10;
    return _value;
  };

  return (
    <>
      <CButton
        color="dark"
        className="me-2"
        variant="outline"
        onClick={prevDay}
      >
        <CIcon content={cilCaretLeft} width={20} />
      </CButton>
      <CInput
        className=" me-2"
        type="date"
        onChange={currentDate}
        value={emvCommission.commission_date}
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
        onClick={nextDay}
      >
        <CIcon content={cilCaretRight} width={20} />
      </CButton>
      <CButton
        color="primary"
        className="my-2 ms-auto"
        onClick={() => onAddNewEmployee()}
      >
        Add New
      </CButton>

      <CModal
        show={showModal}
        alignment="center"
        onClose={() => closeModel()}
        size="md"
      >
        <CModalHeader>
          <h3>Employee Commission</h3>
          <CIcon
            content={cilX}
            onClick={closeModel}
            style={{ cursor: "pointer" }}
          ></CIcon>
        </CModalHeader>
        <CModalBody>
          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="fname">
                First Name : <span className="text-danger">*</span>
              </CLabel>
            </CCol>
            <CCol sm="8">
              {!disabled ? (
                <CSelect
                  disabled
                  id="fullName"
                  name="fullName"
                  value={emvCommission.employee_id}
                  className="Req"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value={""} selected hidden>
                    Select Employee FName
                  </option>
                  {employeeList?.map((list, index) => (
                    <option value={list._id} key={index}>
                      {list.fname}
                    </option>
                  ))}
                </CSelect>
              ) : (
                <CSelect
                  id="fullName"
                  name="fullName"
                  value={emvCommission.employee_id}
                  className="Req"
                  onChange={(e) => handleInputChange(e)}
                >
                  <option value={""} selected hidden>
                    Select Employee FName
                  </option>
                  {employeeList?.map((list, index) => (
                    <option value={list._id} key={index}>
                      {list.fname}
                    </option>
                  ))}
                </CSelect>
              )}
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
                disabled
                id="lname"
                name="lname"
                value={emvCommission.lname}
                className="Req"
                placeholder="Enter Last Name"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!emvCommission.lname || emvCommission.lname === "-1") ? (
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
                disabled
                type="email"
                id="email"
                name="email"
                value={emvCommission.email}
                className="Req"
                placeholder="Enter Email Id	"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!emvCommission.email || emvCommission.email === "-1") ? (
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
                disabled
                id="mobile"
                name="mobile"
                value={emvCommission.mobile}
                className="Req"
                maxLength="10"
                placeholder="Enter Mobile No."
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!emvCommission.mobile || emvCommission.mobile === "-1") ? (
                <RequiredField />
              ) : null}
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
                value={emvCommission.tich}
                className="Req"
                placeholder="Enter tich"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!emvCommission.tich || emvCommission.tich === "-1") ? (
                <RequiredField />
              ) : null}
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
                disabled
                type="number"
                id="commission"
                name="commission"
                value={commissionCounter()}
                className="Req"
                placeholder="Enter commission"
                onChange={(e) => handleInputChange(e)}
              />
              {checkRequired &&
              (!emvCommission.commission ||
                emvCommission.commission === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
          </CRow>

          <CRow className="mb-2">
            <CCol sm="4">
              <CLabel htmlFor="Commission_date">
                Commission date : <span className="text-danger">*</span>
              </CLabel>
              {checkRequired &&
              (!emvCommission.commission_date ||
                emvCommission.commission_date === "-1") ? (
                <RequiredField />
              ) : null}
            </CCol>
            <CCol sm="8">
              <CInput
                type="date"
                id="commission_date"
                name="commission_date"
                value={emvCommission.commission_date}
                className="Req"
                placeholder="Enter month Of Birth"
                onChange={(e) => handleInputChange(e)}
              />
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
            onClick={onSaveEmployee}
          >
            Save
          </button>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default CommissionModel;
