import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths } from "date-fns";
import { useNavigate } from 'react-router-dom';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));
  const days = [];

  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const navigate = useNavigate();

  const selectDate = (date)=>{
    navigate(`/post?date=${format(date, 'yyyy-MM-dd')}`);
  }

  return (
    <div className="max-w-sm h-screen items-center mx-auto p-4 bg-black  rounded-lg">
      <div className="top-16">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))} className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
        <div className="text-center text-white text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </div>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-white text-center text-sm font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="py-2">{day}</div>
        ))}
        {days.map((date, index) => (
          <div
            key={index}
            onClick={() => selectDate(date)}
            className={` h-20 p-2  text-center text-sm ${
              format(date, "MM") !== format(currentDate, "MM") ? "text-blue-400" : "text-green-600"
            }`}
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Calendar;
