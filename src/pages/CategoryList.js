import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Mã loại sản phẩm",
    dataIndex: "key",
  },
  {
    title: "Tên loại sản phẩm",
    dataIndex: "name",
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
    name: `Edward King ${i}`,
    // Button thực hiện hành động xoá sửa
    action: `London, Park Lane no. ${i}`,
  });
}

const CategoryList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Danh mục loại sản phẩm</h3>
      <div>
        <Table columns={columns} dataSource={ord_data} />
      </div>
    </div>
  );
};

export default CategoryList;
