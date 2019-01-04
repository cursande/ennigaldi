import * as React from 'react';

export interface Props {
	title: string;
	content_summary: string;
	types: string;
	authors: string;
	// image: Image
}

class ArticleTile extends React.Component<Props, object> {
	render() {
		const { title, authors, types, content_summary } = this.props;

		return (
			<div className="article">
				<h3 className="articleHeading">{title}</h3>
				<h5 className="articleSubHeading">{authors}</h5>
				<h5 className="articleSubHeading">{types}</h5>
				<p>{content_summary}</p>
			</div>
		);
	}
}