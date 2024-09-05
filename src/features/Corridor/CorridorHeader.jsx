import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function CorridorHeader() {
	const box = useRef(null);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start start', 'end center'],
	});

	const scaleY = useTransform(scrollYProgress, [0, 1], [1, 1.712]);
	const scaleY2 = useTransform(scrollYProgress, [0, 1], [1.25, 0.5]);

	return (
		<div className='corridor'>
			<div className='container corridor-box' ref={box}>
				<div className='corridor-box--img'>
					<img src='/img/redc.png' alt='page image'></img>
				</div>
				<div className='corridor-box--txt'>
					<motion.h2 style={{ scaleY }}>ART</motion.h2>
					<motion.h2 style={{ scaleY: scaleY2 }}>GAL</motion.h2>
				</div>
			</div>
		</div>
	);
}

export default CorridorHeader;
