import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  isSubmitDisabled?: boolean;
  children: ReactNode;
}

function Modal({
  isOpen,
  title,
  onClose,
  isSubmitDisabled,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;

    const prevFocus = document.activeElement as HTMLElement;

    const element = modal?.querySelector<HTMLElement>(
      'input, select, textarea'
    );

    (element ?? modal)?.focus();

    return () => {
      prevFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;
    document.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden={isOpen ? 'false' : 'true'}
        data-testid="overlay"
      />
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-xl min-h-20 overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100"
        aria-modal
        aria-hidden={isOpen ? 'false' : 'true'}
        tabIndex={-1}
        role="dialog"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
            {title}
          </h2>
          <Button
            className="bg-red-400 hover:bg-red-600"
            onClick={onClose}
            data-dismiss="modal"
            aria-label="Close"
          >
            X
          </Button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[60vh]" ref={modalRef}>
          {children}
        </div>
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <Button onClick={onClose} className="bg-red-400 hover:bg-red-600">
            Cancel
          </Button>
          <Button
            type="submit"
            data-action="send"
            aria-label="Send"
            form="modal-form"
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
