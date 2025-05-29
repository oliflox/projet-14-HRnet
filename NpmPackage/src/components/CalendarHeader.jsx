import React from "react";
import { MdHome } from "react-icons/md";

const CalendarHeader = ({
  currentMonth,
  handlePrevMonth,
  handleNextMonth,
  handleMonthChange,
  handleYearChange,
  handleToday,
}) => {
  const monthOptions = Array.from({ length: 12 }, (_, index) => (
    <option key={index} value={index}>
      {new Date(0, index).toLocaleString("default", { month: "long" })}
    </option>
  ));

  const yearOptions = Array.from({ length: 150 }, (_, index) => {
    const year = 1900 + index;
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div className="calendarHeader">
      <button className="calendarButton prev-button" onClick={handlePrevMonth}>
        {"<"}
      </button>
      <button className="calendarButton home-button" onClick={handleToday} title="Aujourd'hui">
        <MdHome size={17} color="white" />
      </button>
      <select
        className="Dropdown monthDropdown"
        value={currentMonth.getMonth()}
        onChange={handleMonthChange}
      >
        {monthOptions}
      </select>
      <select
        className="Dropdown yearDropdown"
        value={currentMonth.getFullYear()}
        onChange={handleYearChange}
      >
        {yearOptions}
      </select>
      <button className="calendarButton next-button" onClick={handleNextMonth}>
        {">"}
      </button>
    </div>
  );
};

export default CalendarHeader;
