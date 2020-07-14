import React from 'react';
import styled from 'styled-components';
import skills from '@static/skills';
import Skill from '@components/Skill';
import { toMedium } from '@utils/mediaQueries';

const SkillList = styled.article`
	width: 60vw;
	margin-top: 6rem;
	${toMedium`
	    margin-top: 3rem;
	`}
`;

const Skills: React.FunctionComponent = () => {
	const skillsArray = skills;
	skillsArray.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<SkillList>
			{skillsArray.map((skill, index) => (
				<Skill key={skill.name} skill={skill} index={index} />
			))}
		</SkillList>
	);
};

export default Skills;
