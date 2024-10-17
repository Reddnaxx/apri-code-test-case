import { Portal } from '@app/utils';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useModalContext } from '../../contexts/modalContext';

export const Modal = observer(() => {
  const { isOpen, content, closeModal } = useModalContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closeModal]);

  const handleOutsideClick = () => {
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 flex bg-black/50"
        onClick={handleOutsideClick}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8">
        {content}
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';

export default Modal;
