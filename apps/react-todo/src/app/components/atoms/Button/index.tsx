import { Link } from 'react-router-dom';
import * as Styled from './styles';

type ButtonProps = {
  action: string;
  location: string;
};

export const Button = ({ action, location }: ButtonProps) => {
  return (
    <Link to={location}>
      <Styled.Button>{action}</Styled.Button>
    </Link>
  );
};
