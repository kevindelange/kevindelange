import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { motion } from 'framer-motion';
import colors from '@variables/colors';
import { toLarge } from '@utils/mediaQueries';

const StyledStory = styled(motion.article)``;

const Marked = styled.span`
	font-weight: 500;
	font-style: italic;
`;

const StyledTypist = styled(Typist)`
	font-size: 3.6rem;
	line-height: 1.5;
	text-align: center;
	max-width: 78vw;

	${toLarge`
	    font-size: 2rem;
	`}
	.Cursor {
		display: inline-block;
		color: ${colors.treePoppy};
	}
	.Cursor--blinking {
		opacity: 1;
		animation: blink 0.75s linear infinite;
	}

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Story: React.FunctionComponent = () => {
	return (
		<StyledStory initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.8 } }}>
			<StyledTypist startDelay={1500} avgTypingDelay={50}>
				Hi,
				<Typist.Delay ms={500} /> I&apos;m Kevin.
				<Typist.Delay ms={500} /> A frontend developer from the Netherlands. <br />
				<Typist.Delay ms={500} /> I have a passion for building <Marked>stunning apps</Marked>.
			</StyledTypist>
		</StyledStory>
	);
};

export default Story;
