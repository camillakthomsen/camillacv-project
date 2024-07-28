import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Karakter.css';

export function Karakter() {
  const navigate = useNavigate();

  return (
    <div className="karakter-container">
    <button className="tilbage-button" onClick={() => navigate('/uddannelse')}>
        Tilbage
    </button>
      <img src={`${process.env.PUBLIC_URL}/karakter.png`} alt="Karakter" className="karakter-image" />
    </div>
  );
}
