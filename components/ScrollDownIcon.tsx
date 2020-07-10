import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled(motion.div)`
	position: absolute;
	bottom: 6rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 3rem;
`;

const ScrollDownIcon: React.FunctionComponent = () => {
	return (
		<Wrapper
			initial={{ y: -300, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 10, y: { type: 'spring', mass: 0.7, stiffness: 80 } }}
		>
			<motion.div
				animate={{ y: [0, 0, 50, -50, 0], opacity: [1, 1, 0, 0, 1] }}
				transition={{ delay: 11.5, loop: Infinity, ease: 'anticipate', duration: 2.5 }}
			>
				<Icon icon={faChevronDown} />
			</motion.div>
		</Wrapper>
	);
};

export default ScrollDownIcon;
