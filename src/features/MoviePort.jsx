import { useNavigate } from 'react-router-dom';
import { useProps } from '../context/AppContext';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function MoviePort({ widthClass }) {
	const { dispatch } = useProps();
	const [hide, setHide] = useState(false);
	const navigate = useNavigate();
	const ref = useRef(null);
	const [focus, setFocus] = useState(false);
	const windowWidth = window.innerWidth;

	const { ref: myRef, inView: slideInView } = useInView();

	function handlePsychology() {
		dispatch({ type: 'bgColor', payload: 'rgb(26, 84, 44)' });
		dispatch({ type: 'color', payload: '#ffffff' });
		dispatch({ type: 'cursorOn' });
		setHide(true);
	}

	function exitPsychology() {
		dispatch({ type: 'cursorOff' });
		setHide(false);
	}

	function handleNavigate() {
		exitPsychology();
		navigate('/work/portfolios');
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
			className={`movie-box ${widthClass}`}
			onMouseEnter={handlePsychology}
			onMouseLeave={exitPsychology}
			onClick={handleNavigate}
			ref={myRef}>
			<video
				id='video'
				src='/img/port.mp4'
				ref={ref}
				autoPlay
				onMouseOver={() => setFocus(true)}
				onMouseOut={() => setFocus(false)}
				onEnded={onEndedLoop}
				muted={true}
				playsInline></video>
			<div className={`movie-box--img ${hide ? 'hide' : ''}`}>
				<img src='/img/port.jpg' alt='' />
			</div>
		</div>
	);
}

export default MoviePort;
