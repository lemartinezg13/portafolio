import './Contact.css';



function Contact(){
    return(
        
       <div className="contacto">
           <h3 className="titulo">Contacto </h3>
           <ul className="contacto__info">
            <li>Ciudad: Bogotá D.C</li>
            <li>Email: lemartinez461@misena.edu.co</li>
            <li>Número de teléfono: 2702752</li>
            <li>Número de celular: 3164213164</li>
            <li>Github: lemartinezg13</li>
           </ul>
           
           <h3 className="titulo">Habilidades</h3>
           <div className="skill">
                <ul>
                <li>
                    Laravel
                    </li>
                     <progress max="100" value="65"></progress>
                
                <li>
                    HTML
                </li>
                <progress max="100" value="70"></progress>
                <li>
                    CSS
                </li>
                <progress max="100" value="80"></progress>
                <li>
                    JavaScript
                </li>
                <progress max="100" value="60"></progress>
                <li>
                    PHP
                </li>
                <progress max="100" value="75"></progress>
                <li>
                    Java
                </li>
                <progress max="100" value="70"></progress>
            </ul>
            </div>
            
       </div>
  

    );
}

export default Contact;