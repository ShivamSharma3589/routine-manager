import React from "react";
import "./AddRoutinePage.css";
import { Card, Form, Input, Button, InputNumber } from "antd";

const AddRoutinePage = () => {
  return (
    <div className="add-routine-wrapper">
      <Card size="small" title="Add New Routine">
        <Form name="add-new-routine" layout="vertical">
          <Form.Item
            label="Enter Routine Name: "
            name="routine-name"
            rules={[
              {
                required: true,
                message: "Please enter your routine name!",
              },
            ]}
          >
            <Input placeholder="Enter Routine Name" />
          </Form.Item>
          <Form.Item
            label="Enter Daily Effort Time: (In min)"
            name="effort-time"
            rules={[
              {
                required: true,
                message: "Please input your daily effort time!",
              },
            ]}
          >
            <InputNumber className="w-100" placeholder="Enter Dialy Effort Time" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="add-routine-form-button"
            >
              Add Routine
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddRoutinePage;
