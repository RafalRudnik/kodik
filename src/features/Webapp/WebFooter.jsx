import { useProps } from '../../context/AppContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { webDesc, webDescGb } from '../../context/constans';

gsap.registerPlugin(ScrollTrigger);

function WebFooter() {
	const { language } = useProps();
	const text = useRef(null);
	const desc = useRef(null);

	useGSAP(() => {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words, chars' });
		const descTxt = desc.current;
		const descType = new SplitType(descTxt, { types: 'words' });

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
		gsap.from(descType.words, {
			scrollTrigger: {
				trigger: descTxt,
				start: 'top 70%',
				end: 'bottom 70%',
				scrub: true,
			},
			color: '#d3d2d2',
			stagger: 0.2,
		});
	});

	return (
		<div className='container web-foot'>
			<h2 ref={text}>The one and only &mdash; kodik </h2>
			<h4 ref={desc}>{language ? webDesc : webDescGb}</h4>
		</div>
	);
}

export default WebFooter;
