import { useProps } from '../../context/AppContext';
import {
	webTitle,
	webTitleGb,
	webSubtitle,
	webSubtitleGb,
} from '../../context/constans';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function WebHeader() {
	const { language } = useProps();
	const text = useRef(null);
	const head = useRef(null);

	useGSAP(() => {
		const headerTxt = text.current;
		const header = head.current;
		const texts = new SplitType(headerTxt, { types: 'words' });

		gsap.to(texts.words, {
			scrollTrigger: {
				trigger: header,
				start: 'top 0%',
				end: 'bottom 40%',
				scrub: true,
			},
			y: -40,
			opacity: 0,
			stagger: 0.2,
		});
	});

	return (
		<div className='web' ref={head}>
			<h2 ref={text}>{language ? webTitle : webTitleGb}</h2>
			<p>{language ? webSubtitle : webSubtitleGb}</p>
		</div>
	);
}

export default WebHeader;
