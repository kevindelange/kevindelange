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
import SocialMedia from '@components/SocialMedia';
import Paragraph from '@components/Paragraph';
import Head from 'next/head';

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
			<Head>
				<title>Kevin de Lange - Frontend Developer</title>
			</Head>
			<Header />
			<Page id="home">
				<Picture />
				<Story />
				<ScrollDownIcon />
			</Page>
			<Page id="skills">
				<FadeInViewport>
					<Title>
						The skillset that I&apos;ve aquired over the past {getWorkExperience()} years as a professional frontend developer.
					</Title>
				</FadeInViewport>
				<Skills />
			</Page>
			<Page id="contact">
				<FadeInViewport>
					<Title>Want to say hi?</Title>
				</FadeInViewport>
				<FadeInViewport>
					<Paragraph>Get in touch by sending me a message on LinkedIn or send me an email.</Paragraph>
				</FadeInViewport>
				<FadeInViewport>
					<SocialMedia />
				</FadeInViewport>
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
