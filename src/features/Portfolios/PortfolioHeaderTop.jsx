import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useProps } from '../../context/AppContext';
import { useMediaQuery } from 'react-responsive';

function PortfolioHeaderTop() {
	const { language } = useProps();
	const box = useRef(null);
	const tablet = useMediaQuery({ query: '(min-width: 768px)' });

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start start', 'end center'],
	});

	const scale = useTransform(scrollYProgress, [0.1, 0.5], [1.3, 1]);
	const y = useTransform(scrollYProgress, [0, 0.5], ['0px', '300px']);
	const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

	return (
		<motion.div className='portfolio-top' ref={box} style={{ y }}>
			<motion.img
				src={
					tablet
						? '/img/portfolioBigOne-min.png'
						: '/img/portfolioBigOne-mini.png'
				}
				style={{ scale }}></motion.img>
			<motion.h2 style={{ opacity }}>
				{language
					? 'Portfolio? Żaden problem z kodik'
					: 'Portfolio? No problem with kodik'}
			</motion.h2>
		</motion.div>
	);
}

export default PortfolioHeaderTop;
