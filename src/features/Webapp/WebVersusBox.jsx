import { useRef, useState } from 'react';

function WebVersusBox({ bad, kodik }) {
	const [scale, setScale] = useState('');
	const box1 = useRef(null);

	function handleBad() {
		setScale('bad');
	}

	function handleGood() {
		setScale('good');
	}

	function handleClear() {
		setScale('');
	}

	return (
		<div
			className={`web-versus-box ${
				scale === 'bad' ? 'bad' : scale === 'good' ? 'good' : ''
			}`}>
			<div
				className='web-versus-box--img web-versus-box--img1'
				onMouseEnter={handleBad}
				onMouseLeave={handleClear}>
				<img src={bad} alt='bad design' ref={box1}></img>
			</div>
			<div
				className='web-versus-box--img web-versus-box--img2'
				onMouseEnter={handleGood}
				onMouseLeave={handleClear}>
				<img src={kodik} alt='good design'></img>
			</div>
		</div>
	);
}

export default WebVersusBox;
