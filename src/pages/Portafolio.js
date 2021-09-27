
import Header from '../components/header/Header';
import Contact from '../components/contacto/Contact';
import About from '../components/about/About';
import Formacion from '../components/formacion/Formacion';

function Portafolio(){
    return(
        <div className="contenedor"> 
        <><Header></Header>
        <About></About>
        <Contact></Contact>
        <Formacion></Formacion>
    </>
    </div>

    );
}

export default Portafolio;