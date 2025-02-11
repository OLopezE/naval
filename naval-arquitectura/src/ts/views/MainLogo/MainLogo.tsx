import { Link } from 'react-router-dom';
import { Layout, BgImage } from './MainLogo.style.jsx';

const MainLogo = () => {
  return (
    <Layout>
      <BgImage src='/media/images/v2/00_COVER_2.jpg'/>
      <Link to="/home">
        <img src='/media/logos/logo-symbol.png' />
      </Link>
    </Layout>
  )
};

export default MainLogo;