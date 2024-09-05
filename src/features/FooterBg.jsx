import { useEffect, useRef, useState } from 'react';
import footerSmall from '../img/footer-min.png';
import footerBig from '../img/footer.png';
import { useProps } from '../context/AppContext';

function FooterBg() {
	const [bgImg, setBgImg] = useState(null);
	const windowWidth = window.innerWidth;
	const { language } = useProps();

	useEffect(
		function () {
			if (windowWidth < 786) {
				setBgImg(footerSmall);
			} else {
				setBgImg(footerBig);
			}
		},
		[windowWidth, setBgImg]
	);

	return (
		<div className='footer-bg'>
			<img src={bgImg} alt=''></img>
			<div>
				<h2>{language ? 'Praca to zabawa' : 'Work is fun'}</h2>
			</div>
		</div>
	);
}

export default FooterBg;
