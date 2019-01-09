import * as React from 'react';

interface Props {
  url: string;
  alt?: string;
  height?: string;
  width?: string;
}

const Image = ({ url, alt = '', height = 'inherit', width = 'inherit' }: Props) => {
  return <img src={url} alt={alt} height={height} width={width} />;
}

export default Image;
