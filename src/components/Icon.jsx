import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${({ margin }) => (margin ? '1rem' : '0')};
  margin-left: ${({ margin }) => (margin ? '0' : '1rem')};
  cursor: pointer;
`;

export default Icon;
