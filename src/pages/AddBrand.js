import React from "react";
import CustomInput from "../components/CustomInput";

const AddBrand = () => {
  return (
    <div>
      <h3 className="mb-4 title">Thêm nhà sản xuất</h3>
      <div>
        <form action=""></form>
        <CustomInput type="text" label="Nhập tên nhà sản xuất" />
        <button
          className="btn btn-success border-0 rounded-3 my-5"
          type="submit"
        >
          Thêm nhà sản xuất
        </button>
      </div>
    </div>
  );
};

export default AddBrand;
