import React from "react";
import { CCardBody } from "@coreui/react";
import CDataTable from "../../Components/CDataTable";

class CommissionTable extends React.Component {
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
      <>
        <CCardBody>
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
  }
}

export default CommissionTable;
