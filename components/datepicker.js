import React, { useState } from "react";
import { DatePicker } from "antd";

export default function AntDatepicker() {
  const [date, setDate] = useState(new Date());
  function onChange(date, dateString) {
    setDate(date);
  }
  return (
    <div className="mt-5">
        <DatePicker onChange={onChange} />
    </div>
 )
}