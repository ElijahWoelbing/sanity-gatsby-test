import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

import PortableTextRenderer from '../PortableTextRenderer';

import { containerStyles } from '../../styles/layout';
import { rem } from '../../utilities/style';
import { media } from '../../styles/media';
import { colors } from '../../styles/colors';

const Container = styled.div`
  padding: ${rem(40)} 0;
`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const Headline = styled.h1`
  text-align: center;
  margin-bottom: ${rem(20)};
  color: ${colors.charcoal};
`;

const FlexContainer = styled.div`
  display: flex;
  gap: ${rem(40)};

  ${media('<=small')} {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  color: ${colors.charcoal};
  max-width: ${rem(600)};
  flex: 1;
`;

const ImageContent = styled.div`
  flex: 1;
`;

const TextMedia = ({
  headline,
  _rawContent,
  image
}) => (
  <Container>
    {console.log(image)}
    <ContentWraper>
      <Headline>{headline}</Headline>
      <FlexContainer>
        <TextContent>
          <PortableTextRenderer portableTextContent={_rawContent} />
        </TextContent>
        <ImageContent>
          <GatsbyImage image={getImage(image.asset)} alt="" />
        </ImageContent>
      </FlexContainer>
    </ContentWraper>
  </Container>
);

export const query = graphql`
  fragment TextMediaFragment on SanityTextMedia {
    _type
    headline
    _rawContent
    image {
      asset {
        gatsbyImageData
      }
    }
  }
`;

export default TextMedia;
