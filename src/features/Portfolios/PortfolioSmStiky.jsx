import { motion, useScroll, useTransform } from 'framer-motion';

function PortfolioSmStiky() {
	const { scrollYProgress } = useScroll();

	const y = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%']);

	return (
		<div className='portfolio-rightSticky'>
			<div className='portfolio-rightSticky--img'>
				<img src='/img/portfolio47-one-min.png' alt='model face'></img>
			</div>
			<motion.div className='portfolio-rightSticky--img' style={{ y }}>
				<img src='/img/portfolio47-min.png' alt='model face'></img>
			</motion.div>
		</div>
	);
}

export default PortfolioSmStiky;
