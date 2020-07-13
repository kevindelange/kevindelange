import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import colors from '@variables/colors';

const Wrapper = styled(motion.article)`
	margin-top: 6rem;
	text-align: center;
`;

const MotionLink = styled(motion.a)`
	display: inline-block;
	margin-right: 4rem;
	color: black;
	text-decoration: none;

	&:last-child {
		margin-right: 0;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 3rem;
	transition: 0.2s color;
	cursor: pointer;
	&:hover {
		color: ${colors.treePoppy};
	}
`;

const SocialMedia: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<MotionLink initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/kevindelange/" target="_blank">
				<Icon icon={faLinkedinIn} />
			</MotionLink>
			<MotionLink initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} href="mailto:hi@kevindelange.dev" target="_blank">
				<Icon icon={faAt} />
			</MotionLink>
			<MotionLink initial={{ scale: 1 }} whileHover={{ scale: 1.3 }} href="https://github.com/kevindelange/" target="_blank">
				<Icon icon={faGithub} />
			</MotionLink>
		</Wrapper>
	);
};

export default SocialMedia;
