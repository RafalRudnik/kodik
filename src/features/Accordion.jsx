import { useProps } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { accGb, accPl } from '../context/constans';

function Accordion() {
	return (
		<div className='messen'>
			<MessenAccordion />
		</div>
	);
}

export default Accordion;

function MessenAccordion() {
	const { language } = useProps();
	const accArray = language ? accPl : accGb;

	return (
		<div className='messen-main'>
			<div className='messen-main--title'>
				<motion.h3
					initial={{ y: 50, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}>
					{language ? 'Technologie' : 'Technologies'}
				</motion.h3>
			</div>
			<div className='accordion'>
				{accArray.map((item, i) => (
					<AccordionItem item={item} key={item.title} index={i}></AccordionItem>
				))}
			</div>
		</div>
	);
}

function AccordionItem({ item, index }) {
	const { currOpen, setCurrOpen } = useProps();
	const isOpen = currOpen === index;

	function handleOpen() {
		setCurrOpen(isOpen ? null : index);
	}

	return (
		<div className='accordion-item' onClick={handleOpen}>
			<div className='accordion-item--top'>
				<p>{item.title}</p>
				<img src={item.image} alt={item.title}></img>
				<div
					className={`accordion-item--button ${
						isOpen ? 'accordionActive' : ''
					}`}></div>
			</div>
			<AnimatePresence mode='wait'>
				{isOpen ? (
					<motion.div
						className='accordion-item--bottom'
						initial={{
							height: 0,
							opacity: 0,
						}}
						animate={{
							height: 'auto',
							opacity: 1,
						}}
						exit={{
							height: 0,
							opacity: 0,
						}}
						transition={{ duration: 0.5 }}>
						<p className='paragraph'>{item.description}</p>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}
