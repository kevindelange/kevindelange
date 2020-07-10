import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Header from '@components/Header';
import Page from '@components/Page';
import Story from '@components/Story';
import Picture from '@components/Picture';
import ScrollDownIcon from '@components/ScrollDownIcon';
import FadeInViewport from '@components/FadeInViewport';
import Title from '@components/Title';
import ToolsCloud from '@components/ToolsCloud';

interface IndexProps {
	query: any;
}

const Index: NextPage<IndexProps> = () => {
	const getWorkExperience = () => {
		const startedWorkingDate = new Date('2013-07-01');
		const now = new Date();
		const diff = now.getFullYear() - startedWorkingDate.getFullYear();
		return diff;
	};

	return (
		<>
			<Header />
			<Page>
				<Picture />
				<Story />
				<ScrollDownIcon />
			</Page>
			<Page>
				<FadeInViewport>
					<Title>
						Tools i&apos;ve worked with over the past {getWorkExperience()} years as a professional frontend developer.
					</Title>
				</FadeInViewport>
				<ToolsCloud />
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
