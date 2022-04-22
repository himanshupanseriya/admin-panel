import React, { useState } from "react";
import {
  CCardBody,
  CCol,
  CInput,
  CRow,
  CLabel,
  CInputCheckbox,
} from "@coreui/react";
import CDataTable from "../../Components/CDataTable";
import CIcon from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";
import { RequiredField } from "../../Utils/CommonUtils";
import moment from "moment";
import { searchEmployeesData } from "../../Services/EmployeeApi";

const EmployeeTable = (props) => {
  const {
    fields,
    data,
    onClickFunc,
    customObj,
    headerComp,
    scopedSlots,
    underTableSlot,
    showAddForm,
    setGetData,
    setSearchDataObj,
    searchDataObj,
  } = props;

  const maxDate = {
    max_date: moment().format("YYYY-MM-DD"),
  };

  const [checkRequired, setCheckRequired] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // let _date = target.type === "date" ? moment(new Date(value)).format() : "";
    setSearchDataObj({
      ...searchDataObj,
      [name]: value,
    });
  };

  const onSearch = async () => {
    let _filterData = {
      from_date: moment(searchDataObj.from_date).format(),
      to_date: moment(searchDataObj.to_date).format(),
      status_selected: searchDataObj.status_selected,
      status_processing: searchDataObj.status_processing,
      status_in_trial: searchDataObj.status_in_trial,
      status_pending: searchDataObj.status_pending,
      status_rejected: searchDataObj.status_rejected,
    };
    setCheckRequired(true);

    let require = true;
    const requiredFieldCollection = document.getElementsByClassName("Req2");
    let requiredFields = [...requiredFieldCollection];
    requiredFields = requiredFields.map((field) => {
      if (field.value === "") {
        require = false;
      }
    });

    if (require) {
      let res = await searchEmployeesData(_filterData);
      setGetData(res.data);
    }
  };

  return (
    <>
      <CCardBody>
        <h4>Search :</h4>
        <CRow style={{ border: "0.5px solid #e3e8ec", padding: "2%" }}>
          <CCol xs={4}>
            <CRow className="mb-2" style={{ alignItems: "center" }}>
              <CCol sm="3">
                <CLabel htmlFor="From_Date">
                  FROM : <span className="text-danger">*</span>
                </CLabel>
                {/* {checkRequired &&
            (!employee.rejected_date || employee.rejected_date === "-1") ? (
              <RequiredField />
            ) : null} */}
              </CCol>
              <CCol sm="6">
                <CInput
                  type="date"
                  id="from_date"
                  name="from_date"
                  value={searchDataObj.from_date}
                  // className="Req2"
                  placeholder="Enter Salary"
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                  max={maxDate.max_date}
                />
              </CCol>
            </CRow>
            <CRow className="mb-2" style={{ alignItems: "center" }}>
              <CCol sm="3">
                <CLabel htmlFor="To_Date">
                  TO: <span className="text-danger">*</span>
                </CLabel>
                {checkRequired &&
                searchDataObj.from_date &&
                (!searchDataObj.to_date || searchDataObj.to_date === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="6">
                <CInput
                  type="date"
                  id="to_date"
                  name="to_date"
                  value={searchDataObj.to_date}
                  className={searchDataObj.from_date ? "Req2" : ""}
                  placeholder="Enter Salary"
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                  min={searchDataObj.from_date}
                  max={maxDate.max_date}
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={4}>
            <CRow>
              <CCol xs={4}>
                <CRow>
                  <CInputCheckbox
                    id="status_selected"
                    onChange={(e) => handleInputChange(e)}
                    name="status_selected"
                    // defaultChecked
                  />
                  <CLabel htmlFor="status_selected">SELECTED</CLabel>
                </CRow>
                <CRow>
                  <CInputCheckbox
                    id="status_processing"
                    name="status_processing"
                    onChange={(e) => handleInputChange(e)}
                    // defaultChecked
                  />
                  <CLabel htmlFor="status_processing">PROCESSING</CLabel>
                </CRow>
                <CRow>
                  <CInputCheckbox
                    id="status_in_trial"
                    onChange={(e) => handleInputChange(e)}
                    name="status_in_trial"
                  />
                  <CLabel htmlFor="status_in_trial">IN-TRIAL</CLabel>
                </CRow>
              </CCol>
              <CCol xs={4}>
                <CRow>
                  <CInputCheckbox
                    id="status_pending"
                    onChange={(e) => handleInputChange(e)}
                    name="status_pending"
                  />
                  <CLabel htmlFor="status_pending">PENDING</CLabel>
                </CRow>
                <CRow>
                  <CInputCheckbox
                    id="status_rejected"
                    onChange={(e) => handleInputChange(e)}
                    name="status_rejected"
                  />
                  <CLabel htmlFor="status_rejected">REJECTED</CLabel>
                </CRow>
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={4}>
            <button
              className="btn btn-primary position-absolute end-0"
              onClick={() => onSearch()}
            >
              <CIcon size="2xl" content={cilSearch} />
            </button>
          </CCol>
        </CRow>
        <CDataTable
          items={data}
          fields={fields}
          tableFilter
          cleaner
          itemsPerPageSelect
          itemsPerPage={10}
          hover
          sorter
          pagination
          onRowClick={onClickFunc}
          customObj={customObj}
          headerComp={headerComp}
          showAddForm={showAddForm}
          border
          underTableSlot={underTableSlot}
          scopedSlots={scopedSlots}
        ></CDataTable>
      </CCardBody>
    </>
  );
};

export default EmployeeTable;
