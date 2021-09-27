import './Header.css';
import foto from './foto1.jpeg';
import gif from './gato.gif';

function Header(){
    return(
        <header>
        <div className="header">
            <div >
                <img className="header-foto" src={foto} alt="" />
            </div>
            <div className="header-me">
                <h3 className="header-name">SOBRE MÍ</h3>
                <span>Soy un estudiante del Centro De Gestión De Mercados,
                     Logistica y Tecnologias de la Información, enfocado
                     en el Análisis y Desarrollo de Sistemas de Información.
                     Soy una persona que busca ganar experiencia, aprender de todo
                     sobre la tecnología y la programación y siempre estar al tanto
                     de las novedades del mercado.
                     </span>
                
            </div>
            <div className="gato">
                <img className="gif" src={gif} alt=""/>
            </div>
        </div>
              
        </header>

    );
}

export default Header;