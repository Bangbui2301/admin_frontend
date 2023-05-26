import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Tiêu đề",
    dataIndex: "name",
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
    // Thực hiện các hành động xoá và chỉnh sửa
    action: `London, Park Lane no. ${i}`,
  });
}

const BlogList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Danh sách tin tức</h3>
      <div>
        <Table columns={columns} dataSource={ord_data} />
      </div>
    </div>
  );
};

export default BlogList;
