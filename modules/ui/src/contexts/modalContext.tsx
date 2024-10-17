import { makeAutoObservable } from 'mobx';
import { createContext, ReactNode, useContext } from 'react';

class ModalStore {
  isOpen = false;
  content: ReactNode | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (content: ReactNode) => {
    this.isOpen = true;
    this.content = content;
  };

  closeModal = () => {
    this.isOpen = false;
    this.content = null;
  };
}

const modalStore = new ModalStore();

const ModalContext = createContext(modalStore);

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => (
  <ModalContext.Provider value={modalStore}>{children}</ModalContext.Provider>
);
