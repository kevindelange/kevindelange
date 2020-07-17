import React, { useEffect } from 'react';
import styled from 'styled-components';
import colors from '@variables/colors';
import fonts from '@variables/fonts';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toLarge } from '@utils/mediaQueries';

const SkillWrapper = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 1.5rem;
	padding: 1rem;
	width: 100%;
	position: relative;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	${toLarge`
	    padding: 0.5rem 0.75rem;
	    margin-bottom: 0.8rem;
	`}
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
	font-weight: 500;
	color: white;
	${toLarge`
	    font-size: 1.4rem;
	`}
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
	const [ref, inView] = useInView({ triggerOnce: true });

	const baseDelay = index * 0.2;

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [inView]);

	return (
		<SkillWrapper
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: 75, opacity: 0 }
			}}
			transition={{
				delay: baseDelay,
				delayChildren: baseDelay + 0.1,
				staggerChildren: 0.1
			}}
		>
			<SkillName
				variants={{
					visible: {
						x: 0,
						transition: { duration: 0.5 }
					},
					hidden: { x: -50 }
				}}
			>
				{skill.name}
			</SkillName>
			<SkillInfill
				variants={{
					visible: {
						width: `${skill.percentage}%`,
						opacity: 1,
						transition: { duration: 1, ease: 'easeInOut' }
					},
					hidden: { width: 0, opacity: 0 }
				}}
			/>
		</SkillWrapper>
	);
};

export default Skill;
