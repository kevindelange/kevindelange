import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledPicture = styled.div`
	height: 14rem;
	width: 14rem;
	border-radius: 100%;
	overflow: hidden;
	margin-bottom: 6rem;
	img {
		width: 100%;
		height: 100%;
	}
`;

const Picture: React.FunctionComponent = () => {
	return (
		<motion.div initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 1 } }} exit={{ opacity: 0 }}>
			<StyledPicture>
				<img src="images/me.jpeg" alt="" />
			</StyledPicture>
		</motion.div>
	);
};

export default Picture;
