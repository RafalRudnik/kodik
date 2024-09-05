import { useProps } from '../../context/AppContext';
import { portDesign, portDesignGb } from '../../context/constans';
import { motion } from 'framer-motion';

function PortfolioDesing() {
	const { language } = useProps();

	return (
		<div className='portfolio-design'>
			<h3>{language ? 'Projekt' : 'Design'}</h3>
			<motion.p
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}>
				{language ? portDesign : portDesignGb}
			</motion.p>
		</div>
	);
}

export default PortfolioDesing;
