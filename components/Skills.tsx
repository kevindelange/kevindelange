import React from 'react';
import styled from 'styled-components';
import colors from '@variables/colors';
import skills from '@static/skills';
import fonts from '@variables/fonts';
import { toMedium } from '@utils/mediaQueries';

const SkillList = styled.article`
	width: 80vw;
	text-align: center;
	margin-top: 6rem;
`;

const SkillWrapper = styled.div`
	display: inline-block;
	margin-right: 1.5rem;
	margin-bottom: 1.5rem;
`;

const Skill = styled.div<{ bold: boolean }>`
	display: inline-block;
	color: ${(props) => (props.bold ? colors.treePoppy : 'black')};
	font-weight: ${(props) => (props.bold ? '700' : ' 400')};
	font-family: ${fonts.montserrat};
	font-size: 2rem;
	${toMedium`
	    font-size: 1.6rem;
	`}
`;

const Skills: React.FunctionComponent = () => {
	const skillsArray = skills;
	skillsArray.sort((a, b) => a.name.localeCompare(b.name));
	return (
		<SkillList>
			{skillsArray.map((skill, i) => (
				<SkillWrapper key={skill.name}>
					<Skill bold={skill.bold}>{skill.name}</Skill>
				</SkillWrapper>
			))}
		</SkillList>
	);
};

export default Skills;
