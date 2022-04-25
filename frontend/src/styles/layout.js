import { css } from '@emotion/react';

import { media } from './media';
import { rem } from '../utilities/style';

const containerWidths = {
  regular: rem(1380),
  small: rem(960)
};

const containerStyles = {};

Object.entries(containerWidths).forEach(([name, size]) => {
  const styles = css`
    width: ${size};
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${rem(20)};
    padding-right: ${rem(20)};

    ${media('>smedium')} {
      padding-left: ${rem(40)};
      padding-right: ${rem(40)};
    }
  `;

  containerStyles[name] = styles;
});

// eslint-disable-next-line import/prefer-default-export
export { containerStyles };
