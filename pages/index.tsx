import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Header from '@components/Header';
import Page from '@components/Page';
import Story from '@components/Story';
import Picture from '@components/Picture';

interface IndexProps {
	query: any;
}

const Index: NextPage<IndexProps> = () => {
	return (
		<>
			<Header />
			<Page>
				<Picture />
				<Story />
			</Page>
		</>
	);
};

Index.getInitialProps = async (ctx: NextPageContext) => {
	const { query } = ctx;
	return {
		query
	};
};

export default Index;
