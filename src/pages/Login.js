import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <form action="">
          <h3 className="text-center title">Đăng nhập</h3>
          <p className="text-center">Đăng nhập để có thể tiếp tục</p>
          <CustomInput type="text" label="Email" id="email" />
          <CustomInput type="password" label="Mật khẩu" id="password" />
          <div className="mb-3 text-end">
            <Link to="/forgot-password">Quên mật khẩu?</Link>
          </div>
          <Link
            to="/admin"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Đăng nhập
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
