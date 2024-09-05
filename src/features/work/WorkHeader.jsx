import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useProps } from '../../context/AppContext';
import WorkHeaderDesc from './WorkHeaderDesc';

function WorkHeader() {
	const workHeader = useRef(null);
	const { language } = useProps();

	const { scrollYProgress } = useScroll({
		target: workHeader,
		offset: ['start center', 'end center'],
	});

	const y = useTransform(scrollYProgress, [0, 0.5], ['300px', '-200px']);
	const imageY = useTransform(scrollYProgress, [0.3, 0.8], [1, 0.5]);
	const backgroundColor = useTransform(
		scrollYProgress,
		[0.3, 1],
		['#573ef0', '#000000']
	);
	const scaleY = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const scaleX = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

	return (
		<div className=' container-fluid work'>
			<motion.div
				className='work-bg'
				ref={workHeader}
				style={{ backgroundColor, scaleX, scaleY }}></motion.div>
			<motion.div className='work-img' style={{ y, scaleY: imageY }}>
				<img src='/img/workHeader-min.png' alt='people happy at work' />
			</motion.div>
			<WorkHeaderTitile language={language} />
			<div className='container work-desc'>
				<WorkHeaderDesc />
			</div>
		</div>
	);
}

export default WorkHeader;

function WorkHeaderTitile({ language }) {
	return (
		<div className='work-title'>
			<h2 data-scroll data-scroll-speed='0.6'>
				{language ? 'PRACA' : 'WORK'}
			</h2>
		</div>
	);
}
