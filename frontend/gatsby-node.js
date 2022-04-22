const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
  {
    allSanityPage {
      nodes {
        id
        slug {
          current
        }
      }
    }

    allSanityCategory {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`);

  const pages = query.data.allSanityPage.nodes;
  const pageTemplate = path.resolve(`src/templates/page.js`);
  pages.forEach(({ id, slug }) => {
    if (slug.current === 'home-page') {
      createPage({
        path: `/`,
        component: pageTemplate,
        context: {
          id
        },
      });
      return;
    }
    createPage({
      path: `/${slug.current}`,
      component: pageTemplate,
      context: {
        id
      },
    });
  });

  const categories = query.data.allSanityCategory.nodes;
  const blogListTemplate = path.resolve(`src/templates/blog-list.js`);

  createPage({
    path: `/blog`,
    component: blogListTemplate,
    context: {
      categories
    }
  });

  categories.forEach(({ slug }) => {
    createPage({
      path: `/blog/type/${slug.current}`,
      component: blogListTemplate,
      context: {
        category: slug.current,
        categories
      },
    });
  });

}
