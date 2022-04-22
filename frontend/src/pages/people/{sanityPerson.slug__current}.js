import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { rem } from '../../utilities/style';
import { containerStyles } from '../../styles/layout';
import { colors } from '../../styles/colors';

import Layout from '../../components/Layout';
import PortableTextRenderer from '../../components/PortableTextRenderer';

const Header = styled.div`
  padding: ${rem(250)} 0;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
`;

const HeaderContent = styled.div`
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
  color: ${colors.persianGreen}
`;

const Container = styled.div`
  padding: ${rem(40)} 0;
`
const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const TextContent = styled.div`
 padding: ${rem(20)} 0;
`;

const Email = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: ${colors.persianGreen}
`;

const PhoneNumber = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.burntSienna};
  display: block;
`;

const Person = ({ data }) => {
  const person = data.sanityPerson;
  return (
    <Layout>
      <Header backgroundImage={person.banner.asset.url}>
        <HeaderContent>
          <Headline>{person.name}</Headline>
          <Subheadline>{person.roll}</Subheadline>
        </HeaderContent>
      </Header>
      <Container>
        <ContentWraper>
          <TextContent>
            <PortableTextRenderer portableTextContent={person._rawContent} />
          </TextContent>
          {person.email && <Email href={`mailto:${person.email}`}>{person.email}</Email>}
          {person.phonenumber && <PhoneNumber href={`tel:${person.phonenumber}`}>{person.phonenumber}</PhoneNumber>}
        </ContentWraper>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query Person($id: String!) {
    sanityPerson(id: {eq: $id}) {
    name
    roll
    banner {
      asset {
        url
      }
    }
    _rawContent
    email
    phonenumber
  }
  }
`

export default Person;
