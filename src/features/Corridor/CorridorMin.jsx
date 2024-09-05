import { useProps } from '../../context/AppContext';
import { minimal, minimalGb } from '../../context/constans';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function CorridorMin() {
	const { language } = useProps();

	return (
		<motion.div
			className='corridor-title'
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}>
			<h3>
				{language ? 'Minimalizm' : 'Minimialism'} <FiArrowUpRight />
			</h3>
			<p>{language ? minimal : minimalGb}</p>
		</motion.div>
	);
}

export default CorridorMin;
