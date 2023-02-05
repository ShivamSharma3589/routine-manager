import React, { useEffect, useState } from "react";
import { Card } from "antd";
import "./CurrentDate.css";
import { AM, MONTH_NAME, PM } from "../../constants/Constants";

const CurrentDate = () => {
  //#region States
  const [currentDate, setCurrentDate] = useState(() => {
    let currentDate = new Date();
    return {
      date: currentDate.getDate(),
      month: MONTH_NAME[currentDate.getMonth()],
      year: currentDate.getFullYear(),
      hour:
        currentDate.getHours() <= 12
          ? currentDate.getHours()
          : currentDate.getHours() - 12,
      min:
        currentDate.getMinutes() > 9
          ? currentDate.getMinutes().toString()
          : currentDate.getMinutes().toString().padStart(2, "0"),
      median: currentDate.getHours() <= 12 ? AM : PM,
    };
  });
  const [isTimerInitialized, setIsTimerInitialized] = useState(false);
  //#endregion

  //#region Objects & Functions
  const readCurrentDate = () => {
    setInterval(() => {
      let currentDate = new Date();
      setCurrentDate({
        date: currentDate.getDate(),
        month: MONTH_NAME[currentDate.getMonth()],
        year: currentDate.getFullYear(),
        hour:
          currentDate.getHours() <= 12
            ? currentDate.getHours()
            : currentDate.getHours() - 12,
        min:
          currentDate.getMinutes() > 9
            ? currentDate.getMinutes().toString()
            : currentDate.getMinutes().toString().padStart(2, "0"),
        median: currentDate.getHours() <= 12 ? AM : PM,
      });
    }, 5000);
  };

  //#endregion

  //#region
  useEffect(() => {
    if (!isTimerInitialized) {
      setIsTimerInitialized(true);
      readCurrentDate();
    }
  }, [isTimerInitialized]);
  //#endregion

  return (
    <Card size="small" className="current-date-wrapper mb-3">
      <div className="date-time-shower">
        <h2 className="date-shower">
          <span className="date">{currentDate.date}, </span>
          <span className="month">{currentDate.month} </span>
          <span className="year">{currentDate.year}</span>
        </h2>
        <h3 className="time-shower">
          <span className="hour">{currentDate.hour} : </span>
          <span className="minutes">{currentDate.min} </span>
          <span className="median">{currentDate.median}</span>
        </h3>
      </div>
    </Card>
  );
};

export default CurrentDate;
