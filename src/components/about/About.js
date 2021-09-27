import './About.css';
import gif from './gato.gif';
import { Link } from "react-router-dom";

function About(){
    return(
        <div className="about">
            <div className="about-me">
                <h1 className="title">LUIS ESTEBAN MARTINEZ GUTIERREZ</h1>
            </div>
            <div className="experiencia">
            <h3 className="title">Experiencia laboral</h3>
            <p>
                Fecha: Marzo 2019 -  Noviembre 2020<br/>
                Empresa: Clinica Odontologica Master Dent<br/>
                Cargo: Programador<br/>
                </p>
                <p>
                Fecha: En Proceso<br/>
                Empresa: Confecciones Difal S.A.S <br/>
                Cargo: Programador, Asistente en Confeccion 
                </p>
            </div>
            <div className="gato">
            <a className="bottom"><Link to="">Volver a Página Principal</Link></a>
            </div>
        </div>
    );
}

export default About;