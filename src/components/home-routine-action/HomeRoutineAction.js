import React from "react";
import "./HomeRoutineAction.css";
import { Card, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const HomeRoutineAction = () => {
  //#region Objects & Function
  const navigate = useNavigate();
  //#endregion
  return (
    <Card size="small" className="routine-action-wrapper mb-3">
      <Button
        type="primary"
        className="action-button"
        onClick={() => navigate("/add-new-routine")}
      >
        <PlusCircleOutlined /> Add Routine
      </Button>
    </Card>
  );
};

export default HomeRoutineAction;
