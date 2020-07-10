import React, { useEffect } from 'react';
import styled from 'styled-components';
import TagCloud from 'react-tag-cloud';
import { motion, useAnimation } from 'framer-motion';
import fonts from '@variables/fonts';
import { useInView } from 'react-intersection-observer';
import colors from '@variables/colors';
import tools from '@static/tools';

const Cloud = styled.div`
	display: flex;
	width: 80vw;
	height: 50vh;
`;

const StyledCloud = styled(TagCloud)`
	flex: 1;
`;

const ToolsCloud: React.FunctionComponent = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<Cloud>
			<StyledCloud>
				{tools.map((tool, index) => (
					<motion.div
						key={tool.name}
						style={{
							fontSize: tool.size,
							fontFamily: fonts.montserrat,
							padding: 20,
							fontWeight: tool.bold ? 700 : 400,
							color: tool.bold ? colors.treePoppy : 'black'
						}}
						ref={ref}
						animate={controls}
						initial="hidden"
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 }
						}}
						transition={{ delay: 0.1 * index }}
					>
						{tool.name}
					</motion.div>
				))}
			</StyledCloud>
		</Cloud>
	);
};

export default ToolsCloud;
