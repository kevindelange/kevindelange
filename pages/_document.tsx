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
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
					<meta
						name="description"
						content="A frontend developer from the Netherlands with a passion for writing clean code and building stunning apps."
					/>
					<meta
						name="keywords"
						content="frontend, developer, it, development, apps, applications, angular, react, nextjs, vuejs"
					/>
					<link href="manifest.json" rel="manifest" />
					<link rel="apple-touch-icon" href="icons/apple-touch-icon.png" />
					<link href="favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
					<link href="favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
					<link href="icons/icon-192x192.png" rel="icon" sizes="192x192" />
					<link href="icons/icon-128x128.png" rel="icon" sizes="128x128" />
					<link href="icons/icon-512x512.png" rel="icon" sizes="512x512" />
					<meta name="theme-color" content="#ff9c1b" />
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
