import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { containerStyles } from '../../styles/layout';
import { rem } from '../../utilities/style';

import Button from '../Button';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: ${rem(250)} 0;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: ${rem(48)};
  color: ${colors.charcoal}
`;

const Subheadline = styled.p`
  margin-top: ${rem(25)};
`;

const CtaContainer = styled.div`
  margin-top: ${rem(25)};
`;

const Hero = ({
  headline,
  subheadline,
  ctatext,
  ctalink,
  image
}) => (
  <Container backgroundImage={image.asset.url}>
    <ContentWraper>
      <Headline>{headline}</Headline>
      {subheadline && <Subheadline>{subheadline}</Subheadline>}
      {ctatext
        && ctalink && (
          <CtaContainer>
            <Button to={ctalink}>{ctatext}</Button>
          </CtaContainer>
      )}
    </ContentWraper>
  </Container>
);

export const query = graphql`
  fragment HeroFragment on SanityHero {
    _type
    headline
    subheadline
    ctatext
    ctalink
    image {
      asset {
        url
      }
    }
  }
`;

export default Hero;
