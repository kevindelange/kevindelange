import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { toLarge } from '@utils/mediaQueries';

const HamburgerStyled = styled(motion.button)`
	background-color: transparent;
	outline: none;
	border: none;
	display: none;
	${toLarge`
		display: block;
	`};
`;

const Bar = styled(motion.span)`
	display: block;
	width: 3rem;
	height: 0.3rem;
	border-radius: 0.1rem;
	margin-bottom: 0.5rem;
	background-color: black;
	&:last-child {
		margin-bottom: 0;
	}
`;

interface HamburgerProps {
	onClick: () => void;
	isOpen: boolean;
}

const Hamburger: React.FunctionComponent<HamburgerProps> = (props) => {
	const controls = useAnimation();
	const { onClick, isOpen } = props;
	if (isOpen) {
		controls.start('close');
	} else {
		controls.start('hamburger');
	}
	const animate = () => {
		onClick();
		if (isOpen) {
			controls.start('hamburger');
		} else {
			controls.start('close');
		}
	};

	return (
		<HamburgerStyled onClick={() => animate()}>
			<Bar
				animate={controls}
				initial="normal"
				variants={{
					hamburger: { rotate: 0, y: 0 },
					close: { rotate: 45, y: 8 }
				}}
			/>
			<Bar
				animate={controls}
				initial="normal"
				variants={{
					hamburger: { opacity: 1 },
					close: { opacity: 0 }
				}}
			/>
			<Bar
				animate={controls}
				initial="normal"
				variants={{
					hamburger: { rotate: 0, y: 0 },
					close: { rotate: -45, y: -8 }
				}}
			/>
		</HamburgerStyled>
	);
};

export default Hamburger;
