import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '@emotion/styled';

import { rem } from '../utilities/style';
import { colors } from '../styles/colors';

const Nav = styled.nav`
  padding: ${rem(10)} 0;
  background-color: ${colors.sandyBrown};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;
`;

const NavListItem = styled.li`
  margin-right: ${rem(40)};
  font-size: ${rem(18)};
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  &:hover {
    color: ${colors.persianGreen};
  }
`;

const MainNavigation = () => {
  const data = useStaticQuery(graphql`
    {
      sanityNavigationMenu(title: {eq: "Main Navigation"}) {
        navigation_items {
          title
          link
        }
      }
    }
  `);
  const navigationItems = data.sanityNavigationMenu.navigation_items;
  return (
    <Nav>
      <NavList>
        {navigationItems.map((navigationItem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <NavListItem key={index}>
            <LinkStyled to={navigationItem.link}>{navigationItem.title}</LinkStyled>
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default MainNavigation;
