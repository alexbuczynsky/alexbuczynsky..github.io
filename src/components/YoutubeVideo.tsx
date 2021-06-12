import React, { IframeHTMLAttributes } from 'react';

type Props = {
  videoURL: string;
  width?: string;
  height?: string;
}

export const YoutubeVideo: React.FC<Props> = (props) => {

  const width: string = props.width || '560';

  const iframeProps: IframeHTMLAttributes<HTMLIFrameElement> = {
    width: width,
    height: props.height,
    src: props.videoURL,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
  };

  return (
    <React.Fragment>
      <iframe {...iframeProps}></iframe>
      <br />
    </React.Fragment>
  )
}