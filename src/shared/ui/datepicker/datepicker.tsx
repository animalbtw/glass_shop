"use client";

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";

import style from "./datepicker.module.scss";

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => {
  return (
    <div className={style.customInput} onClick={onClick} ref={ref}>
      {value ? value : placeholder}
    </div>
  );
});

export default function Datepicker() {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="дд/мм/гггг"
      locale={ru}
      dateFormat="dd/MM/yyyy"
      customInput={<CustomInput />}
      renderCustomHeader={({
        monthDate,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
      }) => (
        <div className={"react-datepicker__head"}>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("ru-RU", {
              month: "long",
              year: "numeric",
            })}
          </span>
          <div className={"react-datepicker__navigationwrapper"}>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        </div>
      )}
    />
  );
}
