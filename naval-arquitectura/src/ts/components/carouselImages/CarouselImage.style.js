import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FramedImageLink = styled(Link)`
  width: 300px;
  min-height: 200px;
  height: min-content;
  transition: 0.1s;
  background: #F4F0E7;
  box-shadow: inset 8px 8px 16px #e8e4db,
            inset -8px -8px 16px #fffcf3;

  > img {
    width: 100%;
    height: 100%;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export default FramedImageLink;
