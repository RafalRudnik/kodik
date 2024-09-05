import { useProps } from '../../context/AppContext';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

function CorridorDarkLight() {
	const { language } = useProps();

	return (
		<>
			<div className='corridor-flex--dot'>
				<p>
					{language
						? 'Prosty przełącznik pomiędzy ciemnym i jasnym stylem'
						: 'A simple switch between dark and light styles'}
				</p>
			</div>
			<motion.div
				className='corridor-flex--dark'
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.2 }}>
				<h4>
					Dark mode <FiArrowUpRight />
				</h4>
				<img src='/img/redc-black-min.png' alt='dark mode'></img>
			</motion.div>
			<motion.div
				className='corridor-flex--light'
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4 }}>
				<h4>
					Light mode <FiArrowUpRight />
				</h4>
				<img src='/img/redc-light-min.png' alt='light mode'></img>
			</motion.div>
		</>
	);
}

export default CorridorDarkLight;
