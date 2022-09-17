import styled, { css } from 'styled-components';

type HeadingProps = {
  color?: string;
};

const headingCommonStyles = css<HeadingProps>`
  color: ${({ color }) => (color ? color : 'var(--color-primary)')};
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const H1 = styled.h1<HeadingProps>`
  ${headingCommonStyles}
`;
export const H2 = styled.h2<HeadingProps>`
  ${headingCommonStyles}
`;
export const H3 = styled.h3<HeadingProps>`
  ${headingCommonStyles}
`;
export const H4 = styled.h4<HeadingProps>`
  ${headingCommonStyles}
`;
export const H5 = styled.h5<HeadingProps>`
  ${headingCommonStyles}
`;
export const H6 = styled.h6<HeadingProps>`
  ${headingCommonStyles}
`;
