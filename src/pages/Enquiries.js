import React from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const columns = [
  {
    title: "Mã đơn",
    dataIndex: "key",
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
  },
  {
    title: "Sản phẩm",
    dataIndex: "product",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
];
const ord_data = [];
for (let i = 0; i < 46; i++) {
  ord_data.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Enquiries = () => {
  return (
    <div>
      <h3 className="mb-4 title">Hỏi đáp</h3>
      <div>
        <Table columns={columns} dataSource={ord_data} />
      </div>
    </div>
  );
};

export default Enquiries;
