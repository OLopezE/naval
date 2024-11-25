import { Link } from 'react-router-dom';
import { Layout } from './MainLogo.style.jsx';

const MainLogo = () => {
  return (
    <Layout>
      <Link to="/home">
        <img src='/media/logos/logo-symbol.png' />
      </Link>
    </Layout>
  )
};

export default MainLogo;