import React from 'react';
import { useHeading } from '@/app/components/hooks/useHeading';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  color?: string;
}

export const Heading = ({ as = 'p', color, children }: HeadingProps) => {
  const HeadingComp = useHeading({ as, children });

  return <HeadingComp color={color} />;
};
