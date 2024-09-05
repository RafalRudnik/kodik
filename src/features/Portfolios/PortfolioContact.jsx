import { useRef } from 'react';
import { useProps } from '../../context/AppContext';
import { motion, useScroll, useTransform } from 'framer-motion';

function PortfolioContact() {
	const { language } = useProps();
	const box = useRef(null);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start end', 'start center'],
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

	return (
		<div className='portfolio-contact'>
			<h3>
				{language
					? 'Zawsze prosta droga do kontaktu'
					: 'Always a simple way to say hello'}
			</h3>
			<motion.div
				className='portfolio-contact--img'
				ref={box}
				style={{ scale }}>
				<img src='/img/contact.png' alt='contact concept'></img>
			</motion.div>
		</div>
	);
}

export default PortfolioContact;
