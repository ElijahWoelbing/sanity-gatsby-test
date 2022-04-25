import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from '@emotion/styled';

import { rem } from '../utilities/style';
import { colors } from '../styles/colors';
import { containerStyles } from '../styles/layout';

const Container = styled.footer`
  padding: ${rem(40)} 0;
  background-color: ${colors.sandyBrown};
`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavListItem = styled.li`
`;

const LinkStyled = styled(Link)`
  cursor: pointer;
  font-size: ${rem(18)};
  color: ${colors.white};
  text-decoration: none;
  &:hover {
    color: ${colors.persianGreen};
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      sanityNavigationMenu(title: {eq: "Footer Navigation"}) {
        navigation_items {
          title
          link
        }
      }
    }
  `);
  const navigationItems = data.sanityNavigationMenu.navigation_items;
  return (
    <Container>
      <ContentWraper>
        <NavList>
          {navigationItems.map((navigationItem, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <NavListItem key={index}>
              <LinkStyled to={navigationItem.link}>{navigationItem.title}</LinkStyled>
            </NavListItem>
          ))}
        </NavList>
      </ContentWraper>
    </Container>
  );
};

export default Footer;
