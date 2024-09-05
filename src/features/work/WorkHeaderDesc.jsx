import { useProps } from '../../context/AppContext';
import { workheadGb, workheadPl } from '../../context/constans';
import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function WorkHeaderDesc() {
	const { language } = useProps();
	const text = useRef(null);

	useGSAP(() => {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words' });

		gsap.from(texts.words, {
			scrollTrigger: {
				trigger: headerTxt,
				start: 'bottom bottom',
				end: 'top 50%',
				scrub: true,
			},
			x: -10,
			y: 40,
			opacity: 0,
			stagger: 0.1,
		});
	});

	return (
		<p className='work-desc--desc' ref={text}>
			<span style={{ color: 'rgb(174, 237, 38)' }}>kodik</span>{' '}
			{language ? workheadPl : workheadGb}
		</p>
	);
}

export default WorkHeaderDesc;
