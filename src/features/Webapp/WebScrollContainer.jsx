const imgs = [
	{ src: '/img/barber-min.png' },
	{ src: '/img/street-min.png' },
	{ src: '/img/lawyer-min.png' },
	{ src: '/img/tdt-min.png' },
];

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

function WebScrollContainer() {
	const box = useRef(null);
	const mainBox = useRef(null);
	const progress = useRef(null);
	const notMobile = useMediaQuery({ query: '(min-width: 768px)' });

	// useEffect(
	// 	function () {
	// 		const scrollBox = box.current;
	// 		const main = mainBox.current;

	// 		notMobile &&
	// 			gsap.to(scrollBox, {
	// 				scrollTrigger: {
	// 					trigger: main,
	// 					start: 'top 5%',
	// 					end: 'bottom 70%',
	// 					scrub: true,
	// 				},
	// 				x: '-=75%',
	// 			});
	// 	},
	// 	[notMobile]
	// );

	useGSAP(() => {
		const scrollBox = box.current;
		const main = mainBox.current;

		notMobile &&
			gsap.to(scrollBox, {
				scrollTrigger: {
					trigger: main,
					start: 'top 5%',
					end: 'bottom 80%',
					scrub: 2,
				},
				x: '-=75%',
			});

		gsap.from(progress.current, {
			scrollTrigger: {
				trigger: main,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
			scaleX: 0,
		});
	});

	return (
		<div className='web-scroll' ref={mainBox}>
			<div className='web-scroll--progress' ref={progress}>
				<div></div>
			</div>
			<div className='web-scrollBox' ref={box}>
				{imgs.map((item, i) => (
					<ImgContainer key={i} item={item} />
				))}
			</div>
		</div>
	);
}

export default WebScrollContainer;

function ImgContainer({ item }) {
	const [desctop, setDesctop] = useState(false);
	const isDesctop = useMediaQuery({ query: '(min-width: 992px)' });

	useEffect(
		function () {
			if (isDesctop) {
				setDesctop(true);
			}
		},
		[isDesctop]
	);

	console.log(desctop);

	return (
		<div
			className='web-scrollBox-img'
			style={desctop ? { backgroundImage: `url(${item.src})` } : {}}>
			<img src={item.src} alt='work example'></img>
		</div>
	);
}
