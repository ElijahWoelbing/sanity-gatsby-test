import React from 'react';
import getYouTubeID from 'get-youtube-id';

const YoutubePreview = ({ value }) => {
  const youtubeId = getYouTubeID(value.url);

  if (!youtubeId) {
    return <div>Invalid YouTube url</div>
  }

  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${getYouTubeID(value.url)}`}
      title="YouTube video player"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export default {
  title: 'Youtube Embed',
  name: 'youtube',
  type: 'object',
  fields: [{
    title: 'URL',
    name: 'url',
    type: 'url',
  }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: YoutubePreview
  }
};
