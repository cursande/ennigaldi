import * as React from 'react';

export interface Props {
  external_id: string;
  title: string;
  contentSummary?: string;
  types: string;
  authors: string;
  // image: Image
}

export default class ArticleTile extends React.Component<Props, object> {
  render() {
    const { external_id, title, authors, types, contentSummary } = this.props;

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
