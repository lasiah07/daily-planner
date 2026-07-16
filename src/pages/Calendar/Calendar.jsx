import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";

import { useState, useEffect } from "react";
import "./Calendar.css";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

import AddEventModal from "../../components/AddEventModal/AddEventModal";

function Calendar() {
  const [currentDate, setCurrentDate] =
    useState(new Date());

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [isTaskModalOpen, setIsTaskModalOpen] =
  useState(false);

  const [selectedDate, setSelectedDate] =
    useState("");

  const [events, setEvents] = useState(() => {
    const savedEvents =
      localStorage.getItem("planora_events");
    return savedEvents
      ? JSON.parse(savedEvents)
      : [];
  });
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
    setSelectedDate("");
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
    setSelectedDate("");
  };

  const handleSelectDate = (date) => {
    if (!date) return;
    const fullDate = `${date} ${
      months[month]
    } ${year}`;
    setSelectedDate(fullDate);
  };

  const handleSaveEvent = (event) => {
    setEvents((prev) => [...prev, event]);
      setIsModalOpen(false);
    setIsModalOpen(false);
  };

  const dates = [];

  for (let i = 0; i < firstDay; i++) {
    dates.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    dates.push(i);
  }

  const today = new Date();

  const selectedEvents = events.filter(
    (event) => event.date === selectedDate
  );

  // selectedDate is now a full string like "15 Juli 2026",
  // so we pull the day number back out for comparisons below.
  const selectedDay = selectedDate
    ? parseInt(selectedDate, 10)
    : null;

  const selectedTasks = selectedDay
    ? tasks.filter((task) => {
        if (!task.deadline) return false;

        const taskDate = new Date(task.deadline);

        return (
          taskDate.getDate() === selectedDay &&
          taskDate.getMonth() === month &&
          taskDate.getFullYear() === year
        );
      })
    : [];

  return (
    <div className="calendar-page">

      <h1 className="calendar-title">
        Calendar
      </h1>

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

          const hasEvent = events.some(
            (event) =>
              event.date ===
              `${date} ${months[month]} ${year}`
          );

          return (
            <div
              key={index}
              className={`day ${
                isToday ? "today" : ""
              } ${
                selectedDay === date
                  ? "selected-day"
                  : ""
              }`}
              onClick={() =>
                handleSelectDate(date)
              }
            >
              <span>{date}</span>

              {hasTask && (
                <div className="deadline-dot" />
              )}

              {hasEvent && (
                <div className="event-dot"></div>
              )}
            </div>
          );
        })}

      </div>

      {selectedDate && (

        <div className="activity-card">
          <h3>
            {selectedDate}
          </h3>

          <h4>Event</h4>

          {selectedEvents.length === 0 ? (
            <p>
              Belum ada event.
            </p>
          ) : (
            <div className="event-list">
              {selectedEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-item"
                >
                  {event.title}
                </div>
              ))}
            </div>
          )}

          {selectedTasks.length === 0 ? (
            <p>
              Belum ada task.
            </p>
          ) : (
            <div className="task-list">
              {selectedTasks.map((task) => (
                <div
                  key={task.id}
                  className="task-item"
                >
                  <span>
                    {task.completed
                      ? "✅"
                      : ""}
                  </span>

                  <p>{task.title}</p>
                </div>
              ))}
            </div>
          )}

          <div className="activity-actions">

    <button className="add-task-btn">
      + Add Task
    </button>

    <button
      className="add-event-btn"
      onClick={() => setIsModalOpen(true)}
    >
      + Add Event
    </button>

  </div>
  


        </div>

      )}

      <AddEventModal
        isOpen={isModalOpen}
        selectedDate={selectedDate}
        onClose={() =>
          setIsModalOpen(false)
        }
        onSave={handleSaveEvent}
      />

    </div>
  );
}

export default Calendar;
