import React from "react";
import { CCardBody, CButton } from "@coreui/react";
import CDataTable from "../../Components/CDataTable";

class EmployeeTable extends React.Component {
  render() {
    const {
      fields,
      data,
      onClickFunc,
      customObj,
      headerComp,
      scopedSlots,
      underTableSlot,
      showAddForm,
    } = this.props;
    return (
      <div>
        <CCardBody>
          <CDataTable
            items={data}
            fields={fields}
            columnFilter
            tableFilter
            cleaner
            itemsPerPageSelect
            itemsPerPage={20}
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
      </div>
    );
  }
}
export default EmployeeTable;
