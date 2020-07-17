import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import colors from '@variables/colors';
import scrollToPage from '@utils/scrollToPage';
import { toLarge } from '@utils/mediaQueries';

const Wrapper = styled(motion.div)`
	position: absolute;
	bottom: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	${toLarge`
	    bottom: 4rem;
	`}
`;

const MotionWrapper = styled(motion.div)`
	cursor: pointer;
	&:hover {
		color: ${colors.treePoppy};
		transition: 0.2s color;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 3rem;
`;

const ScrollDownIcon: React.FunctionComponent = () => {
	const controls = useAnimation();
	const getAnimation = (delay?: boolean) => {
		return {
			y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 50, -50, 0],
			opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
			transition: { delay: delay ? 11.5 : 0, loop: Infinity, ease: 'anticipate', duration: 6 }
		};
	};
	controls.start(getAnimation(true));
	controls.start('hidden');
	return (
		<Wrapper
			initial={{ y: -300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 10, y: { type: 'spring', mass: 0.7, stiffness: 80 } }}
			onClick={() => scrollToPage('skills')}
		>
			<MotionWrapper animate={controls} onHoverStart={() => controls.stop()} onHoverEnd={() => controls.start(getAnimation())}>
				<Icon icon={faChevronDown} />
			</MotionWrapper>
		</Wrapper>
	);
};

export default ScrollDownIcon;
