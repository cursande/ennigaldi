import * as React from 'react';
import './App.css';
import ArticleTile from './components/ArticleTile/ArticleTile';
import 'bulma/css/bulma.css'

import sampleImage from './components/image/sample-image.jpg'

const sampleArticle = {
  externalId: 1,
  title: 'Foo-silli',
  contentSummary: 'This is a sample article',
  types: 'Adventure, erotica',
  authors: 'Bar-bara Streisand',
  image: { src: sampleImage }
};

class App extends React.Component {
  state = {
    articles: [ sampleArticle ]
  };

  public render() {
    const { articles } = this.state;

    return (
      <div className="App">
        <div className="Header" />
        <div className="main">
          {!!articles &&
            articles.map(article => {
              return (
                <ArticleTile
                  key={article.externalId}
                  title={article.title}
                  contentSummary={article.contentSummary}
                  types={article.types}
                  authors={article.authors}
                  image={article.image}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
