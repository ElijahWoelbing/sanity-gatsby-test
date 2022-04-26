import S from '@sanity/desk-tool/structure-builder';

const blog = ['post', 'author', 'category'];
const navigation = ['navigation_menu', 'navigation_item'];

export default () =>
  S.list()
    .title('Content')
    .items(
      [
        S.listItem()
          .title('Blog')
          .child(S.list()
            .title('Blog')
            .items([...S.documentTypeListItems().filter(item => (
              blog.includes(item.getId())
            ))])),
        S.listItem()
          .title('Navigation')
          .child(S.list()
            .title('Navigation')
            .items([...S.documentTypeListItems().filter(item => (
              navigation.includes(item.getId())
            ))])),
        ...S.documentTypeListItems().filter(item => (
          ![...blog, ...navigation].includes(item.getId())
        ))
      ]
    );
