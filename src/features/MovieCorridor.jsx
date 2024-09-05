import { useNavigate } from 'react-router-dom';
import { useProps } from '../context/AppContext';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function MovieCorridor({ widthClass }) {
	const { dispatch } = useProps();
	const [hide, setHide] = useState(false);
	const navigate = useNavigate();
	const ref = useRef(null);
	const [focus, setFocus] = useState(false);
	const windowWidth = window.innerWidth;

	const { ref: myRef, inView: slideInView } = useInView();

	function handlePsychology() {
		dispatch({ type: 'bgColor', payload: 'rgb(174, 237, 38)' });
		dispatch({ type: 'color', payload: '#000' });
		dispatch({ type: 'cursorOn' });
		setHide(true);
	}

	function exitPsychology() {
		dispatch({ type: 'cursorOff' });
		setHide(false);
	}

	function handleNavigate() {
		exitPsychology();
		navigate('/work/gallery');
	}

	const loop = () => {
		ref.current.play();
	};

	const pauseLoop = () => {
		ref.current.pause();
	};

	const onEndedLoop = () => {
		if (focus) {
			loop();
		}
	};

	useEffect(() => {
		if (windowWidth < 900 && slideInView) {
			setHide(true);
			setFocus(true);
		}
		if (focus) loop();
		if (!focus) pauseLoop();
		if (!slideInView) pauseLoop();
	}, [focus, windowWidth, slideInView]);

	useEffect(() => {
		if (windowWidth > 900) {
			setHide(false);
			setFocus(false);
		}
	}, [windowWidth]);

	return (
		<div
			to='/psychology'
			className={`movie-box ${widthClass}`}
			onMouseEnter={handlePsychology}
			onMouseLeave={exitPsychology}
			onClick={handleNavigate}
			style={{ width: 'fit-content' }}
			ref={myRef}>
			<video
				id='video'
				src='/img/RedC.mp4'
				ref={ref}
				autoPlay
				onMouseOver={() => setFocus(true)}
				onMouseOut={() => setFocus(false)}
				onEnded={onEndedLoop}
				muted={true}
				style={{ width: '80%', height: '100%' }}
				playsInline></video>
			<div
				className={`movie-box--img ${hide ? 'hide' : ''}`}
				style={{ width: '80%', height: '100%' }}>
				<img src='/img/redc.png' alt='' />
			</div>
		</div>
	);
}

export default MovieCorridor;
