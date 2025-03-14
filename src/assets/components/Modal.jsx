import React from 'react';

function Modal({ message, isVisible, onClose }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modalContainer">
            <div className="modalContent">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Modal;
