import React from 'react';
import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { rem } from '../../utilities/style';
import { colors } from '../../styles/colors';
import { containerStyles } from '../../styles/layout';

import Layout from '../../components/Layout';

const Container = styled.div`
`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const Grid = styled.div`
  padding: ${rem(40)} 0;
  display: grid;
  gap: ${rem(40)};
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(${rem(250)}, 1fr));
`;

const Card = styled(Link)`
  text-decoration: none;
  padding: ${rem(20)};
  border-radius: ${rem(5)};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;
const CardImage = styled(GatsbyImage)`
  border-radius: ${rem(5)};
`;
const CardText = styled.div`
  color: ${colors.charcoal};
`;
const CardHeadline = styled.h1`
`;
const CardSubheadline = styled.p`
`;

const PeoplePage = ({ data }) => {
  const people = data.allSanityPerson.nodes;
  return (
    <Layout>
      <Container>
        <ContentWraper>
          <Grid>
            {people.map((person) => (
              <Card to={`${person.slug.current}`}>
                <CardImage image={getImage(person.image.asset)} alt={person.name} />
                <CardText>
                  <CardHeadline>{person.name}</CardHeadline>
                  <CardSubheadline>{person.roll}</CardSubheadline>
                </CardText>
              </Card>
            ))}
          </Grid>
        </ContentWraper>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query allPerson {
    allSanityPerson {
      nodes {
        name
        roll
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default PeoplePage;
