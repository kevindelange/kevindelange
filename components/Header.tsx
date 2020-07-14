import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import colors from '@variables/colors';
import fonts from '@variables/fonts';
import scrollToPage from '@utils/scrollToPage';
import { toMedium } from '@utils/mediaQueries';

const StyledHeader = styled.header`
	padding: 2rem 3rem;
	display: flex;
	position: fixed;
	left: 0;
	width: 100vw;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 10;
`;

const NameBlock = styled.div`
	display: flex;
	align-items: center;
	${toMedium`
	    flex-direction: column;
	    width: 100%;
	`}
`;

const Name = styled(motion.div)`
	font-family: ${fonts.montserrat};
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.8rem;
	display: inline-block;
`;

const Divider = styled(motion.div)`
	width: 0.2rem;
	height: 1.8rem;
	background-color: ${colors.treePoppy};
	margin-left: 1.2rem;
	display: inline-block;
	${toMedium`
	    display: none;
	`}
`;

const Role = styled(motion.div)`
	font-family: ${fonts.montserrat};
	font-weight: 400;
	text-transform: uppercase;
	font-size: 1.8rem;
	margin-left: 1rem;
	display: inline-block;
	color: ${colors.gray};
	${toMedium`
	    font-size: 1.5rem;
	    margin-top: 0.5rem;
	`}
`;

const Nav = styled(motion.nav)`
	font-family: ${fonts.montserrat};
	font-weight: 400;
	font-size: 1.6rem;
	margin-left: 1rem;
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		li {
			display: inline-block;
			margin-right: 3rem;
			button {
				cursor: pointer;
				transition: 0.2s color;
				background-color: transparent;
				color: ${colors.gray};
				border: none;
				text-transform: uppercase;
				outline: none;
				&:hover,
				&:focus,
				&:active {
					color: ${colors.treePoppy};
				}
			}
			&:last-child {
				margin-right: 1.5rem;
			}
		}
	}
	${toMedium`
	    display: none;
	`}
`;

const Header: React.FunctionComponent = () => {
	const controls = useAnimation();
	controls.start('visible');
	return (
		<StyledHeader>
			<NameBlock>
				<Name
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							x: 0,
							opacity: 1,
							transition: { duration: 0.3 }
						},
						hidden: { x: -50, opacity: 0 }
					}}
				>
					Kevin de Lange
				</Name>
				<Divider
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							x: 0,
							opacity: 1,
							transition: { delay: 0.3, duration: 0.3 }
						},
						hidden: { x: -50, opacity: 0 }
					}}
				/>
				<Role
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							x: 0,
							opacity: 1,
							transition: { delay: 0.6, duration: 0.3 }
						},
						hidden: { x: -50, opacity: 0 }
					}}
				>
					Frontend Developer
				</Role>
			</NameBlock>
			<Nav
				animate={controls}
				initial="hidden"
				variants={{
					visible: {
						x: 0,
						opacity: 1,
						transition: { delay: 0.9, duration: 0.3 }
					},
					hidden: { x: 50, opacity: 0 }
				}}
			>
				<ul>
					<li>
						<button type="button" onClick={() => scrollToPage('home')}>
							Home
						</button>
					</li>
					<li>
						<button type="button" onClick={() => scrollToPage('skills')}>
							Skills
						</button>
					</li>
					<li>
						<button type="button" onClick={() => scrollToPage('contact')}>
							Contact
						</button>
					</li>
				</ul>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
