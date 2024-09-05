import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useProps } from '../context/AppContext';
import { blackGb, blackPl } from '../context/constans';
import { FiArrowUpRight } from 'react-icons/fi';

function HomeBlack() {
	const { language } = useProps();
	const box = useRef(null);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start end', 'start start'],
	});
	const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
	const scaleY = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
	const scaleX = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

	return (
		<div className='container-fluid home-black'>
			<motion.div
				className='home-black--bg'
				ref={box}
				style={{ scale }}></motion.div>
			<div className='container home-black--desc'>
				<motion.p style={{ scaleY, scaleX }}>
					{language ? blackPl : blackGb}
				</motion.p>
				<motion.a
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 1 }}
					viewport={{ once: true }}
					href='mailto: hello@kodik.io'>
					{language ? 'Poproś o wycenę' : 'Ask for a quote'} <FiArrowUpRight />
				</motion.a>
			</div>
		</div>
	);
}

export default HomeBlack;
