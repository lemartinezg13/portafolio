import './Formacion.css';


function Formacion(){
    return(
        <div className="Formacion">
            <div className="formacion">
            <h3 className="title">Formación académica</h3>
                <p>
                Fecha de terminación: 27/11/2020 <br/>
                Institución formadora: Colegio Claretiano de Bosa <br/>
                Titulación: Bachiller<br/>

                Fecha de terminación: 30/11/2020<br/>
                Institución formadora: SENA<br/>
                Titulación: Técnica en programación de software <br/>
               
                Fecha de terminación: En proceso<br/>
                Institución formadora: SENA<br/>
                Titulación: Tecnóloga en Análisis y Desarrollo de Sistemas de Información – ADSI <br/>

                </p>
            </div>
                    <div className="formacion">
            <h3 className="title">Idiomas</h3>
            <ul>
                <li>
                    Ingles: Alto
                    </li>
                    <li>
                    Español: Nativo
                    </li>
                

                </ul>
            </div>
        </div>
    );
}

export default Formacion;