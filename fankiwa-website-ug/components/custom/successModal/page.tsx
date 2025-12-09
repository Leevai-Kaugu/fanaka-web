'use client';

import React, { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const handleClose = () => {
  setTimeout(() => {
    window.location.reload();
  });
};


const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4">

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg text-center">
        <h2 className="text-xl font-semibold text-green-600 mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-4">Your message has been successfully sent. We'll be in touch soon.</p>
        <button
          onClick={onClose || handleClose}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
