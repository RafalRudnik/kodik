import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function BlogMain() {
	const box = useRef(null);
	const [start, setStart] = useState([]);
	const [end, setEnd] = useState([]);
	const tablet = useMediaQuery({ query: '(min-width: 768px)' });
	const mobile = useMediaQuery({ query: '(max-width: 767px)' });
	const desctop = useMediaQuery({ query: '(min-width: 992px)' });

	useEffect(
		function () {
			if (desctop) {
				setStart(['0%', '-20%', '20%']);
				setEnd(['40%', '20%', '-17%']);
			} else if (tablet) {
				setStart(['-20%', '-20%', '0%']);
				setEnd(['90%', '80%', '-46%']);
			} else if (mobile) {
				setStart(['-90%', '0%', '0%']);
				setEnd(['50%', '-90%', '-76%']);
			}
		},
		[desctop, mobile, tablet]
	);

	const { scrollYProgress } = useScroll({
		target: box,
		offset: ['start center', 'end end'],
	});

	const y = useTransform(scrollYProgress, [0.4, 1], [start[0], end[0]]);
	const y2 = useTransform(scrollYProgress, [0, 1], [start[1], end[1]]);
	const y3 = useTransform(scrollYProgress, [0, 1], [start[2], end[2]]);

	return (
		<div className='container'>
			<motion.div className='blog-scroll' ref={box}>
				<div className='blog-scroll--left'>
					<motion.img
						src='/img/blog1-min.png'
						alt='blog example'
						style={{ y }}></motion.img>
					<motion.img
						src='/img/blog2-min.png'
						alt='blog example'
						style={{ y: y2 }}></motion.img>
				</div>
				<div className='blog-scroll--right'>
					<motion.img
						src='/img/blog3-min.png'
						alt='blog example'
						style={{ y: y3 }}></motion.img>
				</div>
			</motion.div>
		</div>
	);
}

export default BlogMain;
