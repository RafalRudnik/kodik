import { useProps } from '../../context/AppContext';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function WorkParalaxItem({ word, items }) {
	const { language } = useProps();
	const container = useRef(null);
	const lettersRef = useRef([]);
	const imagesRef = useRef([]);

	useGSAP(() => {
		const tl = gsap
			.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			})
			.to(imagesRef.current[1], { y: -150 }, 0)
			.to(imagesRef.current[2], { y: -455 }, 0);
		lettersRef.current.forEach((letter, i) => {
			tl.to(
				letter,
				{
					top: Math.floor(Math.random() * -75) - 25,
				},
				0
			);
		});
	});

	return (
		<div className='paralax-item' ref={container}>
			<div className='paralax-item--word'>
				<p>
					{word.split('').map((letter, i) => {
						return (
							<span key={`l_${i}`} ref={(el) => (lettersRef.current[i] = el)}>
								{letter}
							</span>
						);
					})}
				</p>
			</div>
			<div className='paralax-content'>
				{items.map(({ src, y, name, nameGb, bgColor }, i) => {
					return (
						<div
							style={bgColor ? { y, backgroundColor: bgColor } : { y }}
							key={`i_${i}`}
							className='paralax-content--img'
							ref={(el) => (imagesRef.current[i] = el)}>
							{src ? <img src={src} alt='image' /> : null}
							<p>{language ? name : nameGb}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default WorkParalaxItem;
