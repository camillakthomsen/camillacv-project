import React from 'react';
import '../Styles/Uddannelse.css';
import { useNavigate } from 'react-router-dom';

export function Uddannelse() {
    const navigate = useNavigate();
  const uddannelser = [
    { year: '2021-2025', name: 'Sundhedsteknologi, AU', description: 'Professionsbachelor' },
    { year: '2015-2018', name: 'Ringkjøbing Gymnasium', description: 'STX - Biologi A, Matematik A, og Fysik B' },
    { year: '2014-2015', name: 'Lyngs Idrætsefterskole', description: 'Efterskole - 10. klasse' },
    { year: '2013-2014', name: 'Dejbjerglund Efterskole', description: 'Efterskole - 9.klasse' },
    { year: '2004-2013', name: 'Amagerskole, Skjern', description: 'Folkeskole' }
  ];

  return (
    <div className="uddannelse-container">
      <div className="uddannelser">
        {uddannelser.map((uddannelse, index) => (
          <div key={index} className="uddannelse-box">
            <h3>{uddannelse.name}</h3>
            <p>{uddannelse.description}</p>
          </div>
        ))}
      </div>
      <div className="timeline">
        {uddannelser.map((uddannelse, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-year">{uddannelse.year}</span>
            <span className="timeline-name">{uddannelse.name}</span>
          </div>
        ))}
        <button className="karakter-button" onClick={() => navigate('/karakter')}>
        AU Karakter
      </button>
      </div>
    </div>
  );
}
