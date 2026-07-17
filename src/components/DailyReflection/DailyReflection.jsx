import { useState, useEffect } from "react";
import "./DailyReflection.css";

import {
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionNormalLine,
  RiEmotionUnhappyLine,
  RiEmotionSadLine,
  RiCheckLine,
} from "react-icons/ri";

function DailyReflection() {
  const today = new Date().toISOString().split("T")[0];

  const [selectedMood, setSelectedMood] =
    useState("");

  const [note, setNote] =
    useState("");

  const [isCompleted, setIsCompleted] =
    useState(false);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "planora_reflections"
        )
      ) || [];

    const todayReflection = saved.find(
      (item) => item.date === today
    );

    if (todayReflection) {
      setSelectedMood(
        todayReflection.mood
      );

      setNote(todayReflection.note);

      setIsCompleted(true);
    }
  }, [today]);

  const moods = [
    {
      id: "great",
      icon: RiEmotionLaughLine,
    },
    {
      id: "happy",
      icon: RiEmotionHappyLine,
    },
    {
      id: "normal",
      icon: RiEmotionNormalLine,
    },
    {
      id: "tired",
      icon: RiEmotionUnhappyLine,
    },
    {
      id: "sad",
      icon: RiEmotionSadLine,
    },
  ];

  const handleSave = () => {
    if (!selectedMood) {
      alert("Please choose your mood.");
      return;
    }

    const saved =
      JSON.parse(
        localStorage.getItem(
          "planora_reflections"
        )
      ) || [];

    saved.push({
      date: today,
      mood: selectedMood,
      note,
    });

    localStorage.setItem(
      "planora_reflections",
      JSON.stringify(saved)
    );

    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <div className="reflection-card">

        <h2>
          Reflection Completed
        </h2>

        <p>
          Thank you for reflecting today.
        </p>

      </div>
    );
  }

  return (
    <div className="reflection-card">

      <h2>Daily Reflection</h2>

      <p>
        How was your day today?
      </p>

      <div className="mood-list">

        {moods.map((mood) => {

          const Icon = mood.icon;

          return (
            <button
              key={mood.id}
              className={`mood-btn ${
                selectedMood === mood.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedMood(mood.id)
              }
            >
              <Icon />
            </button>
          );

        })}

      </div>

      <textarea
        placeholder="Write something about today..."
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
      />

      <button
        className="save-reflection"
        onClick={handleSave}
      >

        <RiCheckLine />

        <span>
          Save Reflection
        </span>

      </button>

    </div>
  );
}

export default DailyReflection;