import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Layout from '@components/Layout';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:ital,wght@0,400;0,500;1,500&display=swap"
						rel="stylesheet"
					/>
					<meta
						name="Description"
						content="A frontend developer from the Netherlands with a passion for writing clean code and building stunning apps."
					/>
					<title>Kevin de Lange - Frontend Developer</title>
				</Head>
				<body>
					<Layout>
						<Main />
						<NextScript />
					</Layout>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
