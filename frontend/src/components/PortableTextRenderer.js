import { React, useCallback } from 'react';
import PortableText from 'react-portable-text';

import Youtube from './Youtube';

const PortableTextRenderer = ({ portableTextContent }) => {
  const youtubeMemo = useCallback(({ url }) => <Youtube url={url} />, []);

  return (
    <PortableText
      content={portableTextContent}
      serializers={{
        youtube: youtubeMemo
      }}
    />
  );
};

export default PortableTextRenderer;
