import { Link } from "react-router-dom";
import './Home.css';
import footer from './react 2.png';
import header from './react 1.png';
import shrek from './shrek.gif'

function Home(){
    return (
        <div className="home">
            <header >
            <img className="header-img" src={header} alt="" />
            </header>
            <div>
                <img className="gif-home" src={shrek} alt="" />
            </div>
            <h1 className="title-prin">Página principal</h1>
            <a className="bottom"><Link to="/portafolio">Portafolio</Link></a>
            <div>
                <footer>
                    <img className="footer" src={footer} alt="" />
                </footer>
            </div>
        </div>
       
    );
}

export default Home;