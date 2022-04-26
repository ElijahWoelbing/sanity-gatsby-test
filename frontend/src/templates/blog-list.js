import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { rem } from '../utilities/style';
import { containerStyles } from '../styles/layout';

import Layout from '../components/Layout';
import PortableTextRenderer from '../components/PortableTextRenderer';
import { colors } from '../styles/colors';

const Container = styled.div`
`;

const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const CategoryNav = styled.div`
  padding: ${rem(20)} 0;
`;
const CategoryNavList = styled.ul`
  display: flex;
  list-style: none;
`;
const CategoryNavListItem = styled.li`
  margin-right: ${rem(40)};
  font-size: ${rem(18)};
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.persianGreen};
  &:hover {
    color: ${colors.sandyBrown};
  }
`;

const Grid = styled.div`
  padding-bottom: ${rem(40)};
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
const CardEyeBrow = styled.p`
  margin-top: ${rem(10)};
  color: ${colors.persianGreen};
  font-size: ${rem(12)};
  text-decoration: underline;
`;
const CardTitle = styled.h1`
`;

const BlogList = ({ data, pageContext }) => {
  const { categories } = pageContext;
  const posts = data.allSanityPost.nodes;
  return (
    <Layout>
      <Container>
        <ContentWraper>
          <CategoryNav>
            <CategoryNavList>
              <CategoryNavListItem>
                <LinkStyled to="/blog">All Blogs</LinkStyled>
              </CategoryNavListItem>
              {categories.map((category) => (
                <CategoryNavListItem>
                  <LinkStyled to={`/blog/type/${category.slug.current}`}>{category.title}</LinkStyled>
                </CategoryNavListItem>
              ))}
            </CategoryNavList>
          </CategoryNav>
          <Grid>
            {posts.map((post) => (
              <Card to={`/blog/${post.slug.current}`}>
                <CardImage image={getImage(post.image.asset)} alt="" />
                <CardText>
                  <CardEyeBrow>{post.category.title}</CardEyeBrow>
                  <CardTitle>{post.title}</CardTitle>
                  <PortableTextRenderer portableTextContent={post._rawExcerpt} />
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
  query AllPosts($category: String){
    allSanityPost(filter: {category: {slug: {current: {eq: $category}}}}) {
      nodes {
        title
        slug {
          current
        }
        category {
          title
        }
        _rawExcerpt
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogList;
