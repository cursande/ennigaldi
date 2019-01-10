import * as React from 'react';
import Image from '../image/Image';
import './ArticleTile.css';

interface Props {
  title: string;
  contentSummary?: string;
  types: string;
  authors: string;
  image?: any;
}

class ArticleTile extends React.Component<Props, object> {
  render() {
    const { title, authors, types, contentSummary, image } = this.props;

    return (
      <div className="ArticleTile card">
        <h3 className="ArticleTileHeading title">{title}</h3>
        {!!image && <Image url={image.url} alt={image.alt} height={image.height} width={image.width} />}
        <h5 className="ArticleTileSubHeading">{authors}</h5>
        <h5 className="ArticleTileSubHeading">{types}</h5>
        <p>{contentSummary}</p>
      </div>
    );
  }
}

export default ArticleTile;
