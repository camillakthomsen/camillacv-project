import React from 'react';
import '../Styles/Jobs.css';

export function Jobs() {
  const jobs = [
    { 
      year: '05/2023-nu', 
      title: 'NRT X-ray',
      position: 'Praktikant og studiemedhjælper',
      description: 'En del af projektet Alrø, som omhandler release af røntgensystemet Adora DRFi på det amerikanske marked. Dokumentation af alt det elektriske ved systemet. Servicemanualer til udgivelse med systemet.', 
      contact: 'Kontaktperson: Birthe Friis Hansen, bf@nrtxray.com, +45 60 86 92 92'
    },
    { 
      year: '06/2020-02/2022', 
      title: 'Vestervang Plejehjem', 
      position: 'Fast afløser',
      description: 'Hjælpe demente borger med daglige gøremål. Fast weekendaffløser og faste ugedage.', 
      contact: 'Kontaktperson: Susanne Vester, suve@aarhus.dk, +45 41 86 46 18'
    },
    { 
      year: '06/2020-02/2022', 
      title: 'Vestervang Lokalcenter',
      position: 'Weekend- og ferieafløser', 
      description: 'Hjælpe borgere i Århus Kommune med de dele af dagligt gøremål, som de fandt svært. Cyklede rundt i Øgaderne hos de ældre, som stadig bor i lejlighed/hus.'
    },
    {
        year: '02/2020-06/2020',
        title: 'JKS Vikarbureau',
        position: 'Vikar',
        description: 'Vikarbureauet indebar forskellige erhversmæssig erfaring, indenfor lagerarbejde, rengøring og køkkenhjælper.'
    },
    {
        year: '12/2019-06/2020',
        title: 'Tjørringhus',
        position: 'Tilkalde vikar',
        description: 'Tjørringhus er et bosted for handicappede børn under 18 år. Arbejdet bestod i at hjælpe børnene med deres dagelige gøremål'
    },
    {
        year: '05/2019-11/2019',
        title: 'SuperBrugsen',
        position: 'Salgsassistent',
        description: 'Betjene kassen og hjælpe med at fylde varer på hylderne.',
        contact: 'Claus Hansen, +45 27 13 12 92'
    },
    {
        year: '05/2018-02/2019',
        title: 'Tarm-Hemmet Hjemmeplejen',
        position: 'Afløser',
        description: 'Hjælpe borger med deres dagelige gøremål.'
    },
    {
        year: '04/2016-05/2022',
        title: 'Danwest Ferieudlejning',
        position: 'Rengøringsassistent',
        description: 'Rengøring af sommerhus til udlejning.'
    },
    {
        year: '07/2012-05/2019',
        title: 'City Kiosken, Skjern',
        position: 'Kasseassistent',
        description: 'Betjene kunder ved kassen.',
        contact: 'Eva Jacobsen, +45 97 35 10 40'
    }
  ];

  return (
    <div className="jobs-layout">
      <div className="jobs-images-container">
        <div className="jobs-image-box">
          <img src={`${process.env.PUBLIC_URL}/morecomputers.jpg`} alt="First" className="jobs-image" />
        </div>
        <div className="jobs-image-box">
          <img src={`${process.env.PUBLIC_URL}/morecomputers.jpg`} alt="Second" className="jobs-image" />
        </div>
        <div className="jobs-image-box">
          <img src={`${process.env.PUBLIC_URL}/morecomputers.jpg`} alt="Second" className="jobs-image" />
        </div>
        <div className="jobs-image-box">
          <img src={`${process.env.PUBLIC_URL}/morecomputers.jpg`} alt="Second" className="jobs-image" />
        </div>
      </div>
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-box">
            <div className="job-summary">
              <p>{job.year}</p>
              <h3>{job.title}</h3>
              <h4>{job.position}</h4>
            </div>
            <div className="job-description">
              <p>{job.description}</p>
              <p>{job.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
