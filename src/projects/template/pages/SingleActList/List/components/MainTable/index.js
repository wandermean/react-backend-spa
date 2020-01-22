import React, { useContext, memo } from "react";
import { Table } from "antd";
import AppContext from "../../../context";
import styles from "./style.less";

function MainTable() {
  const { state, dispatch } = useContext(AppContext);
  const { pagination } = state;

  const columns = [
    {
      align: "center",
      title: "序号",
      width: 100,
      key: "key",
      render: function(text, record, index) {
        return <span>{index + 1}</span>;
      }
    },
    {
      title: "门店名称",
      dataIndex: "storeName",
      key: "storeName"
    }
  ];

  return (
    <Table
      pagination={{
        current: pagination.pageNumber,
        defaultPageSize: pagination.pageSize,
        total: pagination.totalCount
      }}
      className={styles.mianTable}
      columns={columns}
      dataSource={state.tableData}
      rowKey={record => `${record.uuid}`}
      locale={{ emptyText: "暂无数据" }}
    />
  );
}

export default memo(MainTable);
