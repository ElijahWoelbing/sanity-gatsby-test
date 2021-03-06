import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FlexibleBlock from '../components/FlexibleBlock';

const Page = ({ data }) => {
  const page = data.sanityPage;
  console.log(page);
  return (
    <Layout seo={page.seo}>
      {page.blocks.map((block, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <FlexibleBlock key={index} type={block._type} data={block} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query Page($id: String) {
    sanityPage(id: {eq: $id}) {
      seo {
        title
        description
      }
      blocks {
        ...HeadlineTextFragment
        ...TextMediaFragment
        ...HeroFragment
      }
    }
  }
`;

export default Page;
