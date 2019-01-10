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

    const articleTileImgHeight = '70px'
    const articleTileImgWidth = '70px'

    return (
      <div className="ArticleTile card">
        <h3 className="ArticleTile--heading title">{title}</h3>
        <div className='ArticleTileImg card-image'>
          {!!image && <Image src={image.src} alt={image.alt} height={articleTileImgHeight} width={articleTileImgWidth} />}
        </div>
        <h5 className="ArticleTile--sub-heading">{authors}</h5>
        <h5 className="ArticleTile--sub-heading">{types}</h5>
        <p>{contentSummary}</p>
      </div>
    );
  }
}

export default ArticleTile;
