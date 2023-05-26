import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Mã đơn",
    dataIndex: "key",
  },
  {
    title: "Họ",
    dataIndex: "first_name",
  },
  {
    title: "Tên",
    dataIndex: "last_name",
  },
  {
    title: "Giới tính",
    dataIndex: "sex",
  },
  {
    title: "Ngày sinh",
    dataIndex: "birthday",
  },
  {
    title: "Hành động",
    dataIndex: "action",
  },
];
const ord_data = [];
for (let i = 0; i < 46; i++) {
  ord_data.push({
    key: i,
    first_name: `Edward`,
    last_name: `King ${i}`,
    sex: `Nam`,
    birthday: `20/03/2003`,
    action: "xoá, sửa",
  });
}

const Customers = () => {
  return (
    <div>
      <h3 className="mb-4 title">Khách hàng</h3>
      <div>
        <Table columns={columns} dataSource={ord_data} />
      </div>
    </div>
  );
};

export default Customers;
