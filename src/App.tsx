import * as React from 'react';
import './App.css';
import ArticleTile from './components/article_tile/ArticleTile';

const sampleArticle = {
  external_id: 1,
  title: 'Foo-silli',
  contentSummary: 'This is a sample article',
  types: 'Adventure, erotica',
  authors: 'Bar-bara Streisand'
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
                  key={article.external_id}
                  title={article.title}
                  contentSummary={article.contentSummary}
                  types={article.types}
                  authors={article.authors}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
