import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getEvents,
  saveEvents,
} from "../services/eventStorage";

const EventContext = createContext();

export function EventProvider({
  children,
}) {
  const [events, setEvents] = useState(() =>
    getEvents()
  );

  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const addEvent = (event) => {
    setEvents((prev) => [
      ...prev,
      event,
    ]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) =>
      prev.filter(
        (event) => event.id !== id
      )
    );
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  return useContext(EventContext);
}