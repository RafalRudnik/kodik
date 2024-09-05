import { useEffect, useState } from 'react';
import { animate, motion, AnimatePresence } from 'framer-motion';
import { testGb, testPl } from '../context/constans';
import { useProps } from '../context/AppContext';

function TestemonialBox() {
	const [index, setIndex] = useState(0);
	const { language } = useProps();
	const test = language ? testPl : testGb;

	const slideVariants = {
		left: {
			x: '100%',
			opacity: 0,
		},
		visable: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			x: '-100%',
			transition: {
				duration: 0.5,
			},
		},
	};

	useEffect(
		function () {
			setTimeout(() => {
				if (index === 2) {
					setIndex(0);
				} else if (index === 0) {
					setIndex(1);
				} else if (index === 1) {
					setIndex(2);
				}
			}, 5000);
		},
		[index, setIndex]
	);


	return (
		<div className='testemonial-box'>
			<AnimatePresence mode='wait'>
				<motion.div
					className='testemonial-item'
					key={index}
					variants={slideVariants}
					initial='left'
					animate='visable'
					exit='exit'>
					<div className='testemonial-img'>
						<img src={test[index].image}></img>
					</div>
					<div className='testemonial-desc'>
						<h4>{test[index].desc}</h4>
						<p>
							{test[index].name} - <span>{test[index].snip}</span>
						</p>
					</div>
				</motion.div>
			</AnimatePresence>
			<div className='testemonial-perc'>
				<div className={index >= 0 ? 'testemonial-perc--active' : ''}></div>
				<div className={index >= 1 ? 'testemonial-perc--active' : ''}></div>
				<div className={index === 2 ? 'testemonial-perc--active' : ''}></div>
			</div>
		</div>
	);
}

export default TestemonialBox;
