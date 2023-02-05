import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./CustomLoader.css";

const CustomLoader = () => {
  return (
    <div className="custom-loader-wrapper">
      <Spin
        indicator={
          <LoadingOutlined
            spin
            className="loading-icon"
            style={{ fontSize: 35 }}
          />
        }
      />
    </div>
  );
};

export default CustomLoader;
