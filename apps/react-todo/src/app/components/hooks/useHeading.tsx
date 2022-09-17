import { H1, H2, H3, H4, H5, H6 } from '@/app/components/atoms/Heading/styles';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const useHeading = ({ as, children }: HeadingProps) => {
  const HeadingComp = ({
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    switch (as) {
      case 'h1':
        return <H1 {...props}>{children}</H1>;
      case 'h2':
        return <H2 {...props}>{children}</H2>;
      case 'h3':
        return <H3 {...props}>{children}</H3>;
      case 'h4':
        return <H4 {...props}>{children}</H4>;
      case 'h5':
        return <H5 {...props}>{children}</H5>;
      case 'h6':
        return <H6 {...props}>{children}</H6>;
      default:
        return <p {...props}>{children}</p>;
    }
  };

  return HeadingComp;
};
