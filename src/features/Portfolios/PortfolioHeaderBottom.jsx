import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useProps } from '../../context/AppContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PortfolioHeaderBottom() {
	const { language } = useProps();
	const box = useRef(null);
	const imgOne = useRef(null);
	const imgTwo = useRef(null);
	const txt = useRef(null);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start end', 'start center'],
	});

	useGSAP(() => {
		gsap.from(imgOne.current, {
			scrollTrigger: {
				trigger: imgOne.current,
				start: 'top bottom',
				end: 'top -40%',
				scrub: true,
			},
			y: '-=100%',
		});
		gsap.from(imgTwo.current, {
			scrollTrigger: {
				trigger: imgTwo.current,
				start: 'top 120%',
				end: 'top 80%',
				scrub: true,
			},
			y: '+=100%',
		});
		gsap.from(txt.current.children, {
			scrollTrigger: {
				trigger: txt.current,
				start: 'top center',
				end: 'top -40%',
				scrub: true,
			},
			opacity: 0,
			stagger: 0.4,
		});
	});

	const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);

	return (
		<motion.div className='portfolio-bottom' ref={box} style={{ scale }}>
			<div className='portfolio-bottom--imgOne'>
				<img
					src='/img/portfolio47two-min.png'
					alt='model face'
					ref={imgOne}></img>
			</div>
			<div className='portfolio-bottom--txt' ref={txt}>
				<h2>{language ? 'Inni niż wy' : 'Different than you'}</h2>
				<h2>{language ? 'Wyróżniaj się' : 'Stand out'}</h2>
			</div>
			<div className='portfolio-bottom--imgTwo'>
				<img
					src='/img/portfolio47three-min.png'
					alt='model face'
					ref={imgTwo}></img>
			</div>
		</motion.div>
	);
}

export default PortfolioHeaderBottom;
