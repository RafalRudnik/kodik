import { useProps } from '../../context/AppContext';
import {
	workFor,
	workForGb,
	workForTwo,
	workForTwoGb,
} from '../../context/constans';
import { motion, AnimatePresence } from 'framer-motion';
import WorkExamplesList from './WorkExamplesList';

function WorkExamples() {
	const { src } = useProps();

	return (
		<div className='work-examples'>
			<div className='work-examples--img'>
				<AnimatePresence mode='wait'>
					<motion.img
						src={src}
						alt='work example'
						key={src}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						exit={{ opacity: 0 }}></motion.img>
				</AnimatePresence>
			</div>
			<WorkExamplesDesc />
			<WorkExamplesList />
		</div>
	);
}

export default WorkExamples;

function WorkExamplesDesc() {
	const { language } = useProps();

	return (
		<motion.div
			className='work-examples--desc'
			initial={{ y: 150 }}
			whileInView={{ y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}>
			<p>{language ? workFor : workForGb}</p>
			<p>{language ? workForTwo : workForTwoGb}</p>
		</motion.div>
	);
}
