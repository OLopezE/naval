import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FramedImageLink = styled(Link)`
  width: 300px;
  transition: 0.1s;

  > img {
    width: 100%;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export default FramedImageLink;
