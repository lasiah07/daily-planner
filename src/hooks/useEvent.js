import { useState, useEffect } from "react";

import {
  getEvents,
  saveEvents,
} from "../services/eventStorage";

export default function useEvents() {

  const [events, setEvents] = useState(() => {
    return getEvents();
  });

  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [
      ...prev,
      event,
    ]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === updatedEvent.id
          ? updatedEvent
          : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents((prev) =>
      prev.filter(
        (event) => event.id !== id
      )
    );
  };

  return {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
  };
}