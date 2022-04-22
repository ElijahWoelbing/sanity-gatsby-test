import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { containerStyles } from '../../styles/layout';
import { rem } from '../../utilities/style';

import Layout from '../../components/Layout';
import PortableTextRenderer from '../../components/PortableTextRenderer';
import { colors } from '../../styles/colors';

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

const Container = styled.div`
  padding: ${rem(40)} 0;
`
const ContentWraper = styled.div`
  ${containerStyles.regular}
`;

const TextContent = styled.div`
 padding: ${rem(20)} 0;
`;

const Author = styled.div`
  display: flex;
  gap: ${rem(20)};
  align-items: center;
`;

const AuthorImage = styled(GatsbyImage)`
  border-radius: 100%;
`;

const AuthorText = styled.div`
  color: ${colors.persianGreen}
`;

const AuthorName = styled.p`
`;
const AuthorRoll = styled.p`
  font-size: ${rem(12)};
`;

const Post = ({ data }) => {
  const post = data.sanityPost;
  return (
    <Layout>
      <Header backgroundImage={post.image.asset.url}>
        <HeaderContent>
          <Headline>{post.title}</Headline>
        </HeaderContent>
      </Header>
      <Container>
        <ContentWraper>
          <TextContent>
            <PortableTextRenderer portableTextContent={post._rawContent} />
          </TextContent>
          <Author>
            <AuthorImage image={getImage(post.author.image.asset)} alt={post.author.name} />
            <AuthorText>
              <AuthorName>{post.author.name}</AuthorName>
              <AuthorRoll>{post.author.roll}</AuthorRoll>
            </AuthorText>
          </Author>
        </ContentWraper>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Post($id: String) {
    sanityPost(id: {eq: $id}) {
      title
    author {
      id
      name
      roll
      image {
        asset {
          gatsbyImageData(width:80 height:80)
        }
      }
    }
    image {
      asset {
        url
      }
    }
      _rawContent
  }
  }
`

export default Post;
