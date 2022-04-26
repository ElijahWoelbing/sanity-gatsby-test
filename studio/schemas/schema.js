import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import page from './documents/page';
import post from './documents/post';
import category from './documents/category';
import author from './documents/author';
import navigation_menu from './documents/navigation_menu';
import navigation_item from './documents/navigation_item';
import person from './documents/person';

import headline_text from './objects/blocks/headlineText';
import text_media from './objects/blocks/textMedia';
import hero from './objects/blocks/hero';

import seo from './objects/seo';
import youtube from './objects/youtube';
import richText from './objects/richText';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    hero,
    navigation_menu,
    navigation_item,
    person,
    seo,
    page,
    post,
    headline_text,
    text_media,
    author,
    category,
    youtube,
    richText
  ]),
})
