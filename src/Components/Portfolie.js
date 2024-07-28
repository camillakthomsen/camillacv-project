import React from 'react';
import '../Styles/Portfolie.css';
import { useNavigate } from 'react-router-dom';

export function Portfolie() {
    const navigate = useNavigate();

  const portfolieItems = [
    {
      largeImage: `${process.env.PUBLIC_URL}/appointmentmediabig.png`,
      smallImage: `${process.env.PUBLIC_URL}/appointmentmediasmall.png`,
      description: 'appointmentmedia.dk ⋅ Hjemmeside for mødebooker Rebecca Kolby Thomsen. Mulighed for at inspirere til et nyt design af allerede eksisterende hjemmeside. Kunder kan på kontakt siden indtaste et bøde, som går til databasens (db.json) "appointments".'
    },
    {
      largeImage: `${process.env.PUBLIC_URL}/pizzariabig.png`,
      smallImage: `${process.env.PUBLIC_URL}/pizzariasmall.png`,
      description: 'Pizzaria app ⋅ Via lokal databasen (db.json) hentes pizzaer til "Menu". Hver pizza kan vælges via "Bestil". Valgte pizzaer tilføjes til databasen og hentes ned i fanen "Kurv". Når en pizza vælges kan antal og ekstra tilbehør tilføjes.'
    }
  ];

  return (
    <div className="portfolie-container">
        <button className="tilbage-button" onClick={() => navigate('/personlig')}>
        Tilbage
    </button>
      {portfolieItems.map((item, index) => (
        <div key={index} className="portfolie-layout">
          <div className="column large-image">
            <img src={item.largeImage} alt={`Large view of project ${index + 1}`} className="image" />
          </div>
          <div className="column small-image-and-text">
            <img src={item.smallImage} alt={`Thumbnail view of project ${index + 1}`} className="image small-image" />
            <p className="description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
