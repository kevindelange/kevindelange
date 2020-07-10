import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '@variables/colors';
import fonts from '@variables/fonts';

const StyledHeader = styled.header`
	padding: 2rem;
	display: flex;
	position: fixed;
	left: 0;
	width: 100vw;
`;

const Name = styled(motion.div)`
	font-family: ${fonts.montserrat};
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.8rem;
	display: flex;
	align-items: center;
`;

const Divider = styled(motion.div)`
	width: 0.2rem;
	height: 1.8rem;
	background-color: ${colors.treePoppy};
	margin-left: 1.2rem;
	display: inline-block;
`;

const Role = styled(motion.div)`
	font-family: ${fonts.montserrat};
	font-weight: 400;
	text-transform: uppercase;
	font-size: 1.8rem;
	margin-left: 1rem;
	opacity: 0.5;
`;

const Header: React.FunctionComponent = () => {
	return (
		<StyledHeader>
			<Name initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
				Kevin de Lange
			</Name>
			<Divider initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }} />
			<Role initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}>
				Frontend Developer
			</Role>
		</StyledHeader>
	);
};

export default Header;
