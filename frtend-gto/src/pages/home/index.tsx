import NavBar from 'components/basics/navbar';
import Footer from 'components/basics/footer';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


import './styles.css';

const Home: React.FC = () => {
  return (
    <>
      <div id="header">
        <NavBar />
      </div>
      <div id="conteudo">
        <div id="contentl">
          <h1>Comunidade de Codigo e Programação</h1>
          <p>Blog para postagem de codigos entre Desenvolvedores.</p>
          <Link to="/login">
            <span>
              <FiLogIn />
            </span>
            <strong>Acessar o sistema!</strong>
          </Link>
        </div>
        <div id="contentr">
          <img src={'https://i.imgur.com/khH6O0q.png'} alt="CCP" />
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
