import styles from './whywe.module.scss';
import { useEffect, useRef, useState } from 'react';
import { animate, motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { whyWe, whyWeGb } from '../context/constans';
import { useProps } from '../context/AppContext';

const numbers = [
	'M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5',
	'M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8',
	'M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25',
	'M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9',
	'M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7',
];

function WhyWe() {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('right');
	const { language } = useProps();
	const circles = useRef([]);
	const paths = useRef([]);
	const nbOfCircles = 30;
	const radius = 20;

	const slideVariants = {
		right: {
			y: '300%',
		},
		left: {
			y: '-150%',
		},
		visable: {
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.5,
			},
		},
	};

	const lastIndex = numbers.length - 1;
	let text = language ? whyWe : whyWeGb;

	useEffect(() => {
		const length = paths.current[index].getTotalLength();
		const step = length / nbOfCircles;

		circles.current.forEach((circle, i) => {
			const { x, y } = paths.current[index].getPointAtLength(i * step);
			animate(circle, { cx: x, cy: y }, { delay: i * 0.025, ease: 'easeOut' });
		});
	}, [index]);

	function handleNext() {
		setDirection('right');
		setIndex((index) => index + 1);
	}

	function handlePrev() {
		setDirection('left');
		setIndex((index) => index - 1);
	}

	return (
		<div className={styles.main}>
			<div className={styles.mainNumber}>
				<svg viewBox='0 0 256 256'>
					<defs>
						<filter id='filter'>
							<feGaussianBlur in='SourceAlpha' stdDeviation='8' result='blur' />
							<feColorMatrix
								in='blur'
								mode='matrix'
								values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -15'
								result='filter'
							/>
						</filter>
					</defs>
					<g>
						{numbers.map((path, i) => {
							return (
								<path
									key={`p_${i}`}
									ref={(ref) => (paths.current[i] = ref)}
									d={path}
								/>
							);
						})}
					</g>

					<g>
						{[...Array(nbOfCircles)].map((_, i) => {
							return (
								<circle
									key={`c_${i}`}
									ref={(ref) => (circles.current[i] = ref)}
									cx='128'
									cy='128'
									r={radius}
								/>
							);
						})}
					</g>
				</svg>
			</div>
			<div className={styles.whywe}>
				<div className={styles.whyweTxt}>
					<AnimatePresence mode='wait'>
						<motion.div
							key={index}
							variants={slideVariants}
							initial={direction === 'right' ? 'right' : 'left'}
							animate='visable'
							exit='exit'>
							<h3>{text[index].title}</h3>
							<p>{text[index].desc}</p>
						</motion.div>
					</AnimatePresence>
				</div>
				<div className={styles.whyweNav}>
					<button onClick={handlePrev} disabled={index === 0}>
						<FiArrowLeft />
					</button>
					<button onClick={handleNext} disabled={index === lastIndex}>
						<FiArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default WhyWe;
