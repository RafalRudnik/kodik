import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useProps } from '../../context/AppContext';

function CorridorGall() {
	const box = useRef(null);
	const { language } = useProps();

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start end', 'start center'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	return (
		<>
			<motion.div className='corridor-flex--gal' ref={box} style={{ scale }}>
				<img src='/img/redc-gall-min.png' alt='gallery image'></img>
			</motion.div>
			<motion.div className='corridor-flex--gal' style={{ scale }}>
				<img src='/img/redc-img-min.png' alt='gallery image'></img>
			</motion.div>
			<p className='corridor-flex--gal-txt'>
				{language ? 'Galeria masonry' : 'Masonry gallery'}
			</p>
		</>
	);
}

export default CorridorGall;
