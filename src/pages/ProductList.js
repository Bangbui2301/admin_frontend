import React from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const columns = [
  {
    title: "Mã sản phẩm",
    dataIndex: "key",
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
  },
  {
    title: "Số lượng",
    dataIndex: "quantity",
  },
  {
    title: "Đơn giá",
    dataIndex: "price",
  },
  {
    title: "Link hình ảnh",
    dataIndex: "image",
  },
  {
    title: "Loại sản phẩm",
    dataIndex: "category",
  },
  {
    title: "Nhà sản xuất",
    dataIndex: "brand",
  },
  {
    title: "Hành động",
    dataIndex: "action",
  },
];
const ord_data = [];
for (let i = 0; i < 10; i++) {
  ord_data.push({
    key: i,
    name: `Edward King ${i}`,
    quantity: 32,
    price: 3000,
    image: `Edward King`,
    category: `Edward King`,
    brand: `Edward King`,
    // Button hành động xoá, sửa
    status: `London, Park Lane no. ${i}`,
  });
}

const ProductList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Danh sách sản phẩm</h3>
      <div>
        <Table columns={columns} dataSource={ord_data} />
      </div>
    </div>
  );
};

export default ProductList;
