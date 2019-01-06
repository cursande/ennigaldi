import * as React from 'react';

export interface Props {
  title: string;
  contentSummary?: string;
  types: string;
  authors: string;
  // image: Image
}

class ArticleTile extends React.Component<Props, object> {
  render() {
    const { title, authors, types, contentSummary } = this.props;

    return (
      <div className="articleTile">
        <h3 className="articleTileHeading">{title}</h3>
        <h5 className="articleTileSubHeading">{authors}</h5>
        <h5 className="articleTileSubHeading">{types}</h5>
        <p>{contentSummary}</p>
      </div>
    );
  }
}

export default  ArticleTile;
