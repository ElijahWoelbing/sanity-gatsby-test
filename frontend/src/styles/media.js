import { rem } from '../utilities/style';

export const breakpoints = {
  tiny: 475,
  small: 768,
  smedium: 1024,
  nav: 1100,
  medium: 1280,
  large: 1440
};

// Converts queries like >small <=large to media queries
const convertQueryToRule = (query) => {
  let queryType = 'min-width';
  let inclusive = false;
  let startIndex = 0;

  if (query.charAt(0) === '>') {
    queryType = 'min-width';
    startIndex = 1;
  } else if (query.charAt(0) === '<') {
    queryType = 'max-width';
    startIndex = 1;
  }

  if (query.charAt(1) === '=') {
    inclusive = true;
    startIndex = 2;
  }

  const breakpointName = query.substring(startIndex);
  let breakpointSize = breakpoints[breakpointName];
  if (breakpointSize === undefined) {
    throw new Error(`Invalid breakpoint size: ${breakpointName}`);
  }

  if (queryType === 'min-width' && !inclusive) {
    breakpointSize += 1;
  }

  if (queryType === 'max-width' && !inclusive) {
    breakpointSize -= 1;
  }

  return `(${queryType}: ${rem(breakpointSize)})`;
};

export const media = (query, includeAtRule = true) => (
  `${includeAtRule ? '@media ' : ''}${convertQueryToRule(query)}`
);
