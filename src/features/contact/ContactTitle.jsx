import { useEffect, useState } from 'react';
import { useProps } from '../../context/AppContext';
import { motion } from 'framer-motion';

function ContactTitle() {
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const { language } = useProps();

	useEffect(
		function () {
			if (!hours && !minutes) {
				const currDate = new Date();
				const time = currDate.getHours();
				const minutes = currDate.getMinutes();
				setHours(time);
				setMinutes(minutes);
			} else {
				setInterval(() => {
					const currDate = new Date();
					const time = currDate.getHours();
					const minutes = currDate.getMinutes();
					setHours(time);
					setMinutes(minutes);
				}, 60000);
			}
		},
		[setHours, setMinutes, hours, minutes]
	);

	return (
		<div className='contact-title'>
			<motion.h2
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{language ? 'Przedyskutujmy' : 'Let`s Discuss'}
			</motion.h2>
			<motion.h2
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<span>
					{minutes <= 9 ? `${hours}:0${minutes}` : `${hours}:${minutes}`}
				</span>
				{language ? 'Twój Projekt' : 'Your Project'}
			</motion.h2>
		</div>
	);
}

export default ContactTitle;
