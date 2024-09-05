import { useProps } from '../../context/AppContext';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portGall, portGallGb } from '../../context/constans';

gsap.registerPlugin(ScrollTrigger);

function PortfolioGallery() {
	const { language } = useProps();
	const img = useRef(null);

	useGSAP(() => {
		gsap.to(img.current, {
			scrollTrigger: {
				trigger: img.current,
				start: 'top top',
				end: 'top -50%',
				scrub: true,
			},
			y: '-=300px',
			scaleY: 0.8,
		});
	});

	return (
		<div className='portfolio-gallery'>
			<h3>{language ? 'Galeria' : 'Pralax Gallery'}</h3>
			<img src='/img/gallery-min.png' alt='gallery project' ref={img}></img>
			<p>{language ? portGall : portGallGb}</p>
		</div>
	);
}

export default PortfolioGallery;
