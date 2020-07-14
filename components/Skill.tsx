import React, { useEffect } from 'react';
import styled from 'styled-components';
import colors from '@variables/colors';
import fonts from '@variables/fonts';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInViewport from '@components/FadeInViewport';

const SkillWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-right: 1.5rem;
	margin-bottom: 1.5rem;
	padding: 1rem;
	width: 100%;
	position: relative;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
`;

const SkillInfill = styled(motion.div)`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 0;
	background-color: ${colors.treePoppy};
	font-family: ${fonts.roboto};
	font-size: 1.6rem;
	border-radius: 0.5rem;
`;
const SkillName = styled(motion.div)`
	position: relative;
	z-index: 1;
	transition: 0.4s color;
`;

interface SkillProps {
	skill: {
		name: string;
		percentage: number;
	};
	index: number;
}

const Skill: React.FunctionComponent<SkillProps> = (props) => {
	const { skill, index } = props;

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '0% 0% -8% 0%' });

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<FadeInViewport>
			<SkillWrapper ref={ref}>
				<SkillName
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							color: 'white',
							transition: { delay: (index + 0.4) * 0.2 }
						},
						hidden: { color: 'black' }
					}}
				>
					{skill.name}
				</SkillName>
				<SkillInfill
					animate={controls}
					initial="hidden"
					variants={{
						visible: {
							width: `${skill.percentage}%`,
							opacity: 1,
							transition: { duration: 1, delay: index * 0.2, ease: 'easeInOut' }
						},
						hidden: { width: 0, opacity: 0 }
					}}
				/>
			</SkillWrapper>
		</FadeInViewport>
	);
};

export default Skill;
