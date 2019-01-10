import * as React from 'react';

interface Props {
  src: string;
  alt?: string;
  height: string;
  width: string;
}

const Image = ({ src, alt = '', height = 'inherit', width = 'inherit' }: Props) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

export default Image;
