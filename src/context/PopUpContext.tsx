import { createContext, useContext, useState, ReactNode } from 'react';

interface PopupContextType {
  isOpen: boolean;
  popupContent: ReactNode | null;
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function usePopup() {

  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
}

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<ReactNode | null>(null);

  const openPopup = (content: ReactNode) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => setPopupContent(null), 300); // 300ms para a animação de saída
  };

  const value = { isOpen, popupContent, openPopup, closePopup };

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
}