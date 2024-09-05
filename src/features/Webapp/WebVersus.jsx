import { useRef } from 'react';
import { useProps } from '../../context/AppContext';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import SplitType from 'split-type';
import WebVersusBox from './WebVersusBox';

gsap.registerPlugin(ScrollTrigger);

function WebVersus() {
	const { language } = useProps();
	const text = useRef(null);

	useGSAP(() => {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words, chars' });

		gsap.from(texts.chars, {
			scrollTrigger: {
				trigger: headerTxt,
				start: 'top 60%',
				end: 'bottom 40%',
				scrub: 1.4,
			},
			y: 60,
			opacity: 0,
			stagger: 0.2,
		});
	});

	return (
		<div className='web-versus'>
			<div className='container'>
				<h2 ref={text}>
					{language ? 'Zły design vs. kodik' : 'Bad design vs. kodik'}
				</h2>
				<WebVersusBox bad='/img/air-min.png' kodik='/img/airKodik-min.png' />
				<WebVersusBox
					bad='/img/DentalBad-min.png'
					kodik='/img/DentalKodik-min.png'
				/>
			</div>
		</div>
	);
}

export default WebVersus;
