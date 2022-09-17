import { Link } from 'react-router-dom';
import * as Styled from './styles';

type ButtonProps = {
  action: string;
  location: string;
  onClick?: any;
};

export const Button = ({ action, location, onClick }: ButtonProps) => {
  return (
    <Link to={location}>
      <Styled.Button onClick={onClick}>{action}</Styled.Button>
    </Link>
  );
};
