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

    allSanityPost {
      nodes {
        id
        slug {
          current
        }
      }
    }

    allSanityPerson {
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
    createPage({
      path: slug.current === 'home-page' ? '/' : `/${slug.current}`,
      component: pageTemplate,
      context: {
        id
      },
    });
  });

  const blogs = query.data.allSanityPost.nodes;
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  blogs.forEach(({ id, slug }) => {
    createPage({
      path: `blog/${slug.current}`,
      component: blogTemplate,
      context: {
        id
      },
    });
  });

  const people = query.data.allSanityPerson.nodes;
  const personTemplate = path.resolve(`src/templates/person.js`);
  people.forEach(({ id, slug }) => {
    createPage({
      path: `people/${slug.current}`,
      component: personTemplate,
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
