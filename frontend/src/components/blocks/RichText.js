import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import { rem } from '../../utilities/style';
import { colors } from '../../styles/colors';
import { containerStyles } from '../../styles/layout';

import PortableTextRenderer from '../PortableTextRenderer';

const Container = styled.div`
  padding: ${rem(40)} 0;

`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const Headline = styled.h1`
  color: ${colors.charcoal};
  text-align: center;
  margin-bottom: ${rem(20)};
`;

const TextContent = styled.div`
  color: ${colors.charcoal};
`;

const RichText = ({ headline, _rawContent }) => (
  <Container>
    <ContentWraper>
      <Headline>{headline}</Headline>
      <TextContent>
        <PortableTextRenderer portableTextContent={_rawContent} />
      </TextContent>
    </ContentWraper>
  </Container>
);

export const query = graphql`
  fragment RichTextFragment on SanityRichText {
    _type
    headline
    _rawContent
  }
`;

export default RichText;
