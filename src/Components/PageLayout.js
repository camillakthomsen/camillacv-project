import { Outlet } from "react-router-dom";
import '../Styles/Home.css';

export function PageLayout(){
    return(
      <div className="home-container">
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/computer.jpg`} alt="First" className="image" />
        <div className="overlay">
          <div className="text">
            <p>Sundhedsknologi:</p>
            Sundhedsteknologi er en blanding af forskellige studieretninger indenfor sundhed, elektronik, software og mekanik.  
            </div>
        </div>
        <Outlet/>
      </div>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/retrocomputer.jpg`} alt="Second" className="image" />
        <div className="overlay">
          <div className="text">
            <p>Interessefelt:</p>
            Indenfor uddannelsen har software fanget min interesse. Uddannelsen har lært mig hvordan medicinsk udstyr udvikles, men jeg har indset, at jeg er mere interesseret i ren softwareudvikling og det behøver ikke at indebære et sundhedsmæssig aspekt. 
            </div>
        </div>
      </div>
    </div>
    )
}
