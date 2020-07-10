import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { motion } from 'framer-motion';
import colors from '@variables/colors';

const StyledStory = styled(motion.article)``;

const StyledTypist = styled(Typist)`
	font-size: 3.6rem;
	line-height: 1.5;
	text-align: center;
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
		<StyledStory initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.2 } }}>
			<StyledTypist
				startDelay={1500}
				avgTypingDelay={50}
				cursor={{
					show: true,
					blink: true,
					element: '|',
					hideWhenDone: true,
					hideWhenDoneDelay: 3000
				}}
			>
				Hi,
				<Typist.Delay ms={500} /> I&apos;m Kevin.
				<Typist.Delay ms={500} /> A frontend developer from the Netherlands. <br />
				<Typist.Delay ms={500} /> I love to create beautiful applications with new techniques.
			</StyledTypist>
		</StyledStory>
	);
};

export default Story;
