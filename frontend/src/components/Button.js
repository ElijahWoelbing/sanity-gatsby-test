import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { rem } from '../utilities/style';
import { colors } from '../styles/colors';

const LinkStyled = styled(Link)`
  padding: ${rem(10)} ${rem(20)};
  border-radius: ${rem(5)};
  color: ${colors.white};
  background-color: ${colors.persianGreen};
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
   &:hover {
     background-color: ${colors.sandyBrown}
   }
`;

const Button = ({ children, to }) => (
  <LinkStyled to={to}>{children}</LinkStyled>
);

export default Button;
