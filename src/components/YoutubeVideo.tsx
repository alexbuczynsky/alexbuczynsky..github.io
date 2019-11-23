import React from 'react';

type Props = {
  videoURL: string;
  width?: string;
  height?: string;
}

export const YoutubeVideo: React.FC<Props> = (props) => {

  const width = props.width || '560';

  const iframeProps: any = {
    width: width,
    height: props.height,
    src: props.videoURL,
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: 'true',
  };

  return (
    <React.Fragment>
      <iframe {...iframeProps}></iframe>
      <br />
    </React.Fragment>
  )
}