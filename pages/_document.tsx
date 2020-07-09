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
			<Html>
				<Head>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
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
