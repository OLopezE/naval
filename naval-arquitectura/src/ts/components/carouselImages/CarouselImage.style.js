import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FramedImageLink = styled(Link)`
  width: 300px;
  height: 300px;

  > img {
    border: 2px solid #42423F;
    width: 100%;
  }
`;

export default FramedImageLink;
