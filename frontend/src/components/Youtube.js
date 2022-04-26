import React from 'react';
import getYouTubeID from 'get-youtube-id';

const Youtube = ({ url }) => {
  const youtubeId = getYouTubeID(url);
  if (!youtubeId) {
    return <div>Invalid YouTube url</div>;
  }
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${youtubeId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default Youtube;
