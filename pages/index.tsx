import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Header from '@components/Header';

interface IndexProps {
	query: any;
}

const Index: NextPage<IndexProps> = () => {
	return <Header />;
};

Index.getInitialProps = async (ctx: NextPageContext) => {
	const { query } = ctx;
	return {
		query
	};
};

export default Index;
