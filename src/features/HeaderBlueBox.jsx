import { useRef } from 'react';
import { useProps } from '../context/AppContext';
import { motion, useScroll, useTransform } from 'framer-motion';

function HeaderBlueBox() {
	const box = useRef(null);

	const { language } = useProps();
	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['end end', 'end center'],
	});

	const scaleY = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
	const scaleX = useTransform(scrollYProgress, [0, 1], [1.1, 1.03]);
	const y = useTransform(scrollYProgress, [0, 1], ['26px', '-110%']);

	return (
		<div className='header-blue' ref={box}>
			<motion.p style={{ scaleX, y, scaleY }}>
				{language ? 'DLACZEGO?' : 'WHY WE?'}
			</motion.p>
		</div>
	);
}

export default HeaderBlueBox;
