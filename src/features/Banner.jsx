import { wrap } from '@motionone/utils';
import { useRef } from 'react';
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from 'framer-motion';

function Banner({ children, baseVelocity = 100 }) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
	const directionFactor = useRef(baseVelocity);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className='baner'>
			<motion.div className='baner--txt' style={{ x }}>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
				<span>{children}</span>
			</motion.div>
		</div>
	);
}

export default Banner;
