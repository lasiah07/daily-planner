import { useState } from "react";
import "./Calendar.css";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

function Calendar() {
  const [currentDate, setCurrentDate] =
    useState(new Date());

  const [selectedDate, setSelectedDate] =
    useState(null);

  const [tasks] = useState(() => {
    const saved = localStorage.getItem(
      "planora_tasks"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const days = [
    "Min",
    "Sen",
    "Sel",
    "Rab",
    "Kam",
    "Jum",
    "Sab",
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
    setSelectedDate(null);
  };

  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    dates.push(i);
  }

  const today = new Date();

  const selectedTasks = selectedDate
    ? tasks.filter((task) => {
        if (!task.deadline) return false;

        const taskDate = new Date(task.deadline);

        return (
          taskDate.getDate() === selectedDate &&
          taskDate.getMonth() === month &&
          taskDate.getFullYear() === year
        );
      })
    : [];

  return (
    <div className="calendar-page">

      <div className="calendar-header">

        <button onClick={prevMonth}>
          <RiArrowLeftSLine />
        </button>

        <h2>
          {months[month]} {year}
        </h2>

        <button onClick={nextMonth}>
          <RiArrowRightSLine />
        </button>

      </div>

      <div className="weekdays">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="calendar-grid">

        {dates.map((date, index) => {

          if (date === null) {
            return (
              <div
                key={index}
                className="day empty"
              />
            );
          }

          const isToday =
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const hasTask = tasks.some((task) => {
            if (!task.deadline) return false;

            const taskDate = new Date(task.deadline);

            return (
              taskDate.getDate() === date &&
              taskDate.getMonth() === month &&
              taskDate.getFullYear() === year
            );
          });

          return (
            <div
              key={index}
              className={`day ${
                isToday ? "today" : ""
              } ${
                selectedDate === date
                  ? "selected-day"
                  : ""
              }`}
              onClick={() =>
                setSelectedDate(date)
              }
            >
              <span>{date}</span>

              {hasTask && (
                <div className="deadline-dot" />
              )}
            </div>
          );
        })}

      </div>

      {selectedDate && (

        <div className="selected-tasks">

          <h3>
            Aktivitas {selectedDate}{" "}
            {months[month]}
          </h3>

          {selectedTasks.length === 0 ? (
            <p>
              Tidak ada deadline.
            </p>
          ) : (
            selectedTasks.map((task) => (
              <div
                key={task.id}
                className="task-item"
              >
                <span>
                  {task.completed
                    ? "✅"
                    : "📌"}
                </span>

                <p>{task.title}</p>
              </div>
            ))
          )}

        </div>

      )}

    </div>
  );
}

export default Calendar;