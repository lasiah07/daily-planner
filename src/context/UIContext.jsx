import {
  createContext,
  useContext,
  useState,
} from "react";

const UIContext = createContext();

export function UIProvider({ children }) {
  const [activeModal, setActiveModal] =
    useState(null);

  const openModal = (type) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <UIContext.Provider
      value={{
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}