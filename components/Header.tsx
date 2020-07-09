import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeader = styled.header`
	padding: 2rem;
	display: flex;
	position: fixed;
	left: 0;
	width: 100vw;
`;
const Name = styled(motion.div)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.8rem;
`;

const Role = styled(motion.div)`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	text-transform: uppercase;
	font-size: 1.8rem;
	margin-left: 1rem;
	opacity: 0.5;
`;

const Header: React.FunctionComponent = () => {
	return (
		<StyledHeader>
			<Name initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }}>
				Kevin de Lange
			</Name>
			<Role initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }} exit={{ opacity: 0 }}>
				Frontend Developer
			</Role>
		</StyledHeader>
	);
};

export default Header;
