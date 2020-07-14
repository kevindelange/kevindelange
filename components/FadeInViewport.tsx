import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const FadeInViewport: React.FunctionComponent = (props) => {
	const { children } = props;
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '0% 0% -8% 0%' });

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
				visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
				hidden: { y: 50, opacity: 0, transition: { delay: 0.2 } }
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeInViewport;
