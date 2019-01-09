import * as React from 'react';
import Image from '../image/Image';

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
      <div className="articleTile">
        <h3 className="articleTileHeading">{title}</h3>
        <Image url={image.url} />
        <h5 className="articleTileSubHeading">{authors}</h5>
        <h5 className="articleTileSubHeading">{types}</h5>
        <p>{contentSummary}</p>
      </div>
    );
  }
}

export default  ArticleTile;
