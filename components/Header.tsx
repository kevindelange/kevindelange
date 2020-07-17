import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import colors from '@variables/colors';
import fonts from '@variables/fonts';
import scrollToPage from '@utils/scrollToPage';
import { toLarge } from '@utils/mediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Hamburger from '@components/Hamburger';

const StyledHeader = styled.header`
	padding: 2rem 3rem;
	display: flex;
	position: fixed;
	left: 0;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.9);
	z-index: 10;
	${toLarge`
	    flex-direction: column;
	    padding: 2rem 3rem 2rem 2rem;
	`}
`;

const Group = styled.div`
	display: flex;
	${toLarge`
	    width: 100%;
	    justify-content: space-between;
	    align-items: center;
	`}
`;

const NameBlock = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	${toLarge`
	    flex-direction: column;
	    align-items: flex-start;
	    padding-left: 1.2rem;
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
	${toLarge`
	    display: none;
	`}
`;

const StripeMobile = styled(motion.div)`
	display: none;
	${toLarge`
	    display: block;
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 0.2rem;
	    height: 4.2rem;
	    background-color: ${colors.treePoppy};
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
	${toLarge`
	    font-size: 1.5rem;
	    margin-top: 0.5rem;
	    margin-left: 0;
	`}
`;

const Nav = styled(motion.nav)`
	font-family: ${fonts.montserrat};
	font-weight: 400;
	font-size: 1.6rem;
	${toLarge`
		width: 100%;
		overflow: hidden;
		display: none;
	`}
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		align-items: center;
		${toLarge`
			padding-top: 2rem;
			flex-direction: column;
			align-items: flex-start;
		`}
		li {
			display: inline-block;
			margin-right: 3rem;
			&:last-child {
				margin-right: 0;
			}
			${toLarge`
				font-size: 1.5rem;
				margin-bottom: 1.5rem;
				&:last-child {
					margin-bottom: 0;
				}
			`}
		}
	}
`;
const GitHub = styled(motion.a)`
	font-size: 3rem;
	display: inline-block;
	color: ${colors.gray};
	outline: none;
	&:hover,
	&:focus,
	&:active {
		color: ${colors.treePoppy};
	}
	${toLarge`
			font-size: 2.5rem;
	`}
`;

const Button = styled(motion.button)`
	cursor: pointer;
	transition: 0.2s color;
	background-color: transparent;
	color: ${colors.gray};
	border: none;
	text-transform: uppercase;
	outline: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	&:hover,
	&:focus,
	&:active {
		color: ${colors.treePoppy};
	}
`;

const Header: React.FunctionComponent = () => {
	const [navOpen, setNavOpen] = useState(false);
	const controls = useAnimation();
	const navControls = useAnimation();
	controls.start('visible');

	const toggleNavigation = () => {
		if (navOpen) {
			navControls.start('toggleHidden');
			setNavOpen(false);
		} else {
			navControls.start('visible');
			setNavOpen(true);
		}
	};

	const closeNavigation = () => {
		navControls.start('navigateHidden');
		setNavOpen(false);
	};

	const navHiddenVariant = (navigate?: boolean) => {
		return {
			height: 0,
			opacity: 0,
			transition: { duration: 0.3, delay: navigate ? 0.2 : 0 },
			transitionEnd: {
				display: 'none'
			}
		};
	};

	let small = false;
	if (process.browser && window.innerWidth < 830) {
		small = true;
	}

	return (
		<StyledHeader>
			<Group>
				<NameBlock>
					<StripeMobile
						animate={controls}
						initial="hidden"
						variants={{
							visible: {
								y: 0,
								opacity: 1,
								transition: { duration: 0.3, delay: 0.6 }
							},
							hidden: { y: -50, opacity: 0 }
						}}
					/>
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
								transition: { delay: small ? 0.3 : 0.6, duration: 0.3 }
							},
							hidden: { x: -50, opacity: 0 }
						}}
					>
						Frontend Developer
					</Role>
				</NameBlock>
				<Hamburger onClick={toggleNavigation} isOpen={navOpen} />
			</Group>
			<Nav
				animate={navControls}
				initial="hidden"
				variants={{
					visible: {
						height: '100%',
						opacity: 1,
						transition: { duration: 0.3 },
						display: 'block'
					},
					toggleHidden: navHiddenVariant(),
					navigateHidden: navHiddenVariant(true)
				}}
			>
				<ul>
					<li>
						<Button
							initial={{ y: 0, x: 0 }}
							whileHover={{ y: -3 }}
							whileTap={{ x: 10 }}
							type="button"
							onClick={() => {
								scrollToPage('home');
								closeNavigation();
							}}
						>
							Home
						</Button>
					</li>
					<li>
						<Button
							initial={{ y: 0, x: 0 }}
							whileHover={{ y: -3 }}
							whileTap={{ x: 10 }}
							type="button"
							onClick={() => {
								scrollToPage('skills');
								closeNavigation();
							}}
						>
							Skills
						</Button>
					</li>
					<li>
						<Button
							initial={{ y: 0, x: 0 }}
							whileHover={{ y: -3 }}
							whileTap={{ x: 10 }}
							type="button"
							onClick={() => {
								scrollToPage('contact');
								closeNavigation();
							}}
						>
							Contact
						</Button>
					</li>
					<li>
						<GitHub
							initial={{ y: 0 }}
							whileHover={{ y: -3 }}
							href="https://github.com/kevindelange/"
							target="_blank"
							rel="noreferrer"
							aria-label="Github"
						>
							<FontAwesomeIcon icon={faGithub} />
						</GitHub>
					</li>
				</ul>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
