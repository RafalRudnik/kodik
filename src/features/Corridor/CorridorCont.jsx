import { useProps } from '../../context/AppContext';
import { FiArrowUpRight } from 'react-icons/fi';

function CorridorCont() {
	const { language } = useProps();

	return (
		<>
			<div className='corridor-flex--cont corridor-flex--cont-txt'>
				<h3>{language ? 'Wykorzystane technologie' : 'Technologies used'}</h3>
				<p>
					Vite, React, ContextApi, Framer motion, GSAP, React responsive
					masonry, Lenis, SCSS, Split-type
				</p>
				<a href='https://sage-fairy-8aa798.netlify.app' target='_blank'>
					{language ? 'Sprwadź w akcji' : 'Check it in action'}{' '}
					<FiArrowUpRight />
				</a>
			</div>
			<div className='corridor-flex--cont'>
				<img src='/img/redc-cont-min.png' alt='contact image'></img>
			</div>
		</>
	);
}

export default CorridorCont;
