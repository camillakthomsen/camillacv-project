import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Personlig.css';

export function Personlig() {
  const navigate = useNavigate();

  return (
    <div className="personlig-container">
      <div className="left-column">
        <img src={`${process.env.PUBLIC_URL}/profilepicture.jpg`} alt="Profile" className="profile-image" />
        <h2>Camilla Kolby Thomsen</h2>
        <div className="section">
          <h3>Kompetencer:</h3>
          <div className="kompetencer">
            <div className="kompetence-item">
              <div className="kompetence-title">Personlige kompetencer</div>
              <div className="kompetence-description">Ansvarsbevidst overfor egen læring. Initiativrig overfor opgaver. Struktureret og organiseret.</div>
            </div>
            <div className="kompetence-item">
              <div className="kompetence-title">IT kompetencer</div>
              <div className="kompetence-description">C# .Net (visual studio) ⋅ Javascript (Visual studio code) ⋅ React ⋅ Database (db.json) ⋅ Gitlab/github ⋅ Latex ⋅ mathlab ⋅ Microsoft Word.</div>
            </div>
            <div className="kompetence-item">
              <div className="kompetence-title">Scrum kursus</div>
              <div className="kompetence-description">Scrum Course Certificate, Systematic A/S 2022</div>
            </div>
            <div className="kompetence-item">
              <div className="kompetence-title">Relations dannelse og kollegial sparring</div>
              <div className="kompetence-description">God til at danne relationer, og ser vigtigheden i at kunne sparer med kollegaer.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="section">
          <h3>Mest stolt af:</h3>
          <div className="stolt-af">
            <div className="achievement">
              <div>
                <strong>Udtægelse Pige Projekt 2012, håndbold</strong>
                <p>Ungdomsårene bød på en udtagelse til pige projekt, som var de 30 bedste på min årgang i hele Jylland. Pige Projekt var året inden man kunne udtages til U17 landsholdet.</p>
              </div>
            </div>
            <div className="achievement">
              <div>
                <strong>Årets ven 2014 og 2015</strong>
                <p>Har gået på to forskellige efterskoler, og begge år bød på en kåring til årets veninde.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Sprog:</h3>
          <div className="sprog">
            <div className="language">
              <span>Dansk</span>
              <span className="proficiency">
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot filled"></span>
              </span>
              <span>Modersmål</span>
            </div>
            <div className="language">
              <span>Engelsk</span>
              <span className="proficiency">
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </div>
            <div className="language">
              <span>Tysk</span>
              <span className="proficiency">
                <span className="dot filled"></span>
                <span className="dot filled"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="section">
          <button className="portfolie-button" onClick={() => navigate('/portfolie')}>
            Portfolie
          </button>
          <button className="kontakt-button" onClick={() => navigate('/kontakt')}>
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}




