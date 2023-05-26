import React from "react";
import CustomInput from "../components/CustomInput";

const AddCate = () => {
  return (
    <div>
      <h3 className="mb-4 title">Thêm loại sản phẩm</h3>
      <div>
        <form action=""></form>
        <CustomInput type="text" label="Nhập tên loại sản phẩm" />
        <button
          className="btn btn-success border-0 rounded-3 my-5"
          type="submit"
        >
          Thêm loại sản phẩm
        </button>
      </div>
    </div>
  );
};

export default AddCate;
