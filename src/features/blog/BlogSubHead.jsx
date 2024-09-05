import { useProps } from '../../context/AppContext';
import { blogSubTitle, blogSubTitleGb } from '../../context/constans';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { useRef } from 'react';

function BlogSubHead() {
	const { language } = useProps();
	const text = useRef(null);

	useGSAP(() => {
		const headerTxt = text.current;
		const texts = new SplitType(headerTxt, { types: 'words' });

		gsap.fromTo(
			texts.words,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				stagger: 0.02,
				delay: 1,
			}
		);
	});

	return (
		<div className='container blog-sub'>
			<h4 ref={text}>{language ? blogSubTitle : blogSubTitleGb}</h4>
		</div>
	);
}

export default BlogSubHead;
