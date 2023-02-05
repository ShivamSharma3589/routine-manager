import React from "react";
import "./RecentlyAddedRoutine.css";
import { Card } from "antd";

const RecentlyAddedRoutine = () => {
  return (
    <div className="recently-added-routine-wrapper">
      <Card size="small" title="Recently Added Routines">
        <Card size="small" className="mb-3">
          Shivam Sharma
        </Card>
        <Card size="small" className="mb-3">
          Shivam Sharma
        </Card>
        <Card size="small" className="mb-3">
          Shivam Sharma
        </Card>
      </Card>
    </div>
  );
};

export default RecentlyAddedRoutine;
