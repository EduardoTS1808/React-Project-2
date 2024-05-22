import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
       
        {children}
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000'
};

const modalStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '5px',
  position: 'relative',
  minWidth: '500px',
};



export default CustomModal;
