import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Header from '@components/Header';
import Page from '@components/Page';
import Story from '@components/Story';
import Picture from '@components/Picture';
import ScrollDownIcon from '@components/ScrollDownIcon';
import FadeInViewport from '@components/FadeInViewport';
import Title from '@components/Title';
import Skills from '@components/Skills';
import scrollToPage from '@utils/scrollToPage';

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
			<Page id="home">
				<Picture />
				<Story />
				<ScrollDownIcon onClick={() => scrollToPage('skills')} />
			</Page>
			<Page id="skills">
				<FadeInViewport>
					<Title>
						The skillset that i&apos;ve aquired over the past {getWorkExperience()} years as a professional frontend developer.
					</Title>
				</FadeInViewport>
				<FadeInViewport>
					<Skills />
				</FadeInViewport>
			</Page>
			<Page id="contact">contact</Page>
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
