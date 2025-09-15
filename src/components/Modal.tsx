import React from 'react';
import { useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({title, children}) => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
        <button className="hover:underline" onClick={() => setShowModal(true)}>{title}</button>
        {showModal && createPortal(
        <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
            <div className='relative bg-white  p-10 border-3'>
                {children}
                <button className='absolute top-1 right-2 text-gray-500 hover:text-gray-700' onClick={() => setShowModal(false)}>x</button>
            </div>
        </div>,
        document.body
      )}

    </div>
    )
};

export default Modal;