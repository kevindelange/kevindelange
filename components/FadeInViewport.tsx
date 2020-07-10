import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const FadeInViewport: React.FunctionComponent = (props) => {
	const { children } = props;
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: 50, opacity: 0 }
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeInViewport;
