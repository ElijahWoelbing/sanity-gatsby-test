import React, { isValidElement } from 'react';

import RichText from '../components/blocks/RichText';
import TextMedia from '../components/blocks/TextMedia';
import Hero from './blocks/Hero';

const blockComponents = {
  hero: Hero,
  rich_text: RichText,
  text_media: TextMedia
};

const FlexibleBlock = ({ type, data }) => {
  const Component = blockComponents[type];

  if (!Component) {
    throw new TypeError(`No block component for type "${type}"`);
  }
  if (typeof Component !== 'function') {
    throw new TypeError(
      `Block component for type '${type}' is not a function`
    );
  }

  const block = <Component {...data} />;

  if (!isValidElement(block)) {
    throw new TypeError(
      `Block component for type '${type}' is not a valid React element`
    );
  }

  return block;
};

export default FlexibleBlock;