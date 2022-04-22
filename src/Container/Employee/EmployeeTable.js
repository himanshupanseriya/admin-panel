import React, { useState, useEffect } from "react";
import {
  CCardBody,
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
  CInputCheckbox,
  CSelect,
} from "@coreui/react";
import CDataTable from "../../Components/CDataTable";
import CIcon from "@coreui/icons-react";
import {
  cilDiamond,
  cilPeople,
  cilDollar,
  cilGraph,
  cilUser,
  cilCaretBottom,
  cilSearch,
} from "@coreui/icons";
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
  } = props;

  const Initialfiler = {
    from_date: "",
    to_date: "",
    status_selected: false,
    status_processing: false,
    status_in_trial: false,
    status_pending: false,
    status_rejected: false,
  };

  const maxDate = {
    max_date: moment().format("YYYY-MM-DD"),
  };

  const [filterData, setFilterData] = useState(Initialfiler);
  const [checkRequired, setCheckRequired] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // let _date = target.type === "date" ? moment(new Date(value)).format() : "";

    if (name === "from_date") {
      setFilterData({
        ...filterData,
        [name]: value,
      });
    } else {
      setFilterData({
        ...filterData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    let _filterData = {};
    _filterData.from_date = moment(filterData.from_date).format();
    _filterData.to_date = moment(filterData.to_date).format();
    _filterData.status_selected = filterData.status_selected;
    _filterData.status_processing = filterData.status_processing;
    _filterData.status_in_trial = filterData.status_in_trial;
    _filterData.status_pending = filterData.status_pending;
    _filterData.status_rejected = filterData.status_rejected;
    setSearchDataObj(_filterData);
  }, []);

  const onSearch = async () => {
 
    let _filterData = {};
    _filterData.from_date = moment(filterData.from_date).format();
    _filterData.to_date = moment(filterData.to_date).format();
    _filterData.status_selected = filterData.status_selected;
    _filterData.status_processing = filterData.status_processing;
    _filterData.status_in_trial = filterData.status_in_trial;
    _filterData.status_pending = filterData.status_pending;
    _filterData.status_rejected = filterData.status_rejected;
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
      setSearchDataObj(_filterData);

      // let res = await searchEmployeesData(_filterData);
      // setSearchData(res.data);
      // setGetData(res.data);

      // console.log(res.data);
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
                  value={filterData.from_date}
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
                filterData.from_date &&
                (!filterData.to_date || filterData.to_date === "-1") ? (
                  <RequiredField />
                ) : null}
              </CCol>
              <CCol sm="6">
                <CInput
                  type="date"
                  id="to_date"
                  name="to_date"
                  value={filterData.to_date}
                  className={filterData.from_date ? "Req2" : ""}
                  placeholder="Enter Salary"
                  onChange={(e) => handleInputChange(e)}
                  autocomplete="off"
                  min={filterData.from_date}
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
