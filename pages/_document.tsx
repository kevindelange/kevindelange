import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Layout from '@components/Layout';

const globalStyles = `
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 62.5%; /* Now 10px = 1rem! */
	}
	body {
		font-size: 16px;
		font-size: 1.6rem;
		font-family: 'Roboto', sans-serif;
	}
`;

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<style type="text/css" dangerouslySetInnerHTML={{ __html: globalStyles }}></style>
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
