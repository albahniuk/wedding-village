import React from 'react';
import './Popup.css';

function Popup({ content, onClose }) {
  if (!content) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={onClose}>✕</button>
        <h2 className="popup__title">{content.title}</h2>
        <h3 className="popup__subtitle">{content.subtitle}</h3>
        <p className="popup__body">{content.body}</p>
      </div>
    </div>
  );
}

export default Popup;
