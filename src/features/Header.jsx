import { useProps } from '../context/AppContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
	headerTitle,
	headerTwo,
	headerTitleGb,
	headerTwoGb,
	headerSubtitle,
	headerSubtitleGb,
} from '../context/constans';
import { useRef } from 'react';

function Header() {
	const { language } = useProps();
	const box = useRef(null);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['end center', 'start start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
	const color = useTransform(scrollYProgress, [0.7, 1], ['', '#000000']);

	return (
		<div className='header'>
			<div className='header-title'>
				<div className='header-top'>
					<motion.h1
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.7 }}>
						{language ? headerTitle : headerTitleGb}
					</motion.h1>
				</div>
				<div className='header-bottom'>
					<motion.h2
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.7, delay: 0.5 }}>
						{language ? headerTwo : headerTwoGb}
					</motion.h2>
				</div>
			</div>
			<motion.div
				className='header-subtitle'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.2 }}
				style={{ y, color }}
				ref={box}>
				<p>{language ? headerSubtitle : headerSubtitleGb}</p>
			</motion.div>
		</div>
	);
}

export default Header;
