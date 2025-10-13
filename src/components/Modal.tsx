import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({showModal, onClose, children}: ModalProps) {
    if (!showModal) return null;

  return createPortal(
        <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50' onClick={onClose}>
            <div className='relative bg-white p-4 border-2 w-[90vw] max-w-5xl max-h-[80vh] overflow-y-auto border-black mb-3 shadow-retro group' onClick={(e) => e.stopPropagation()}>
            <button className='sticky top-0 float-right font-extrabold text-sm rounded-2xl px-1.5 h-fit w-fit border-3 bg-gray-100 text-gray-500 border-gray-500 hover:text-black hover:bg-gray-400 hover:border-black transition-colors' onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.body
      );
}