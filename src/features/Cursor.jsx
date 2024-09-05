import { motion } from 'framer-motion';
import { useProps } from '../context/AppContext';

function Cursor() {
	const {
		variants,
		cursorVariant,
		language,
		cursorBg,
		cursorColor,
		cursorActive,
	} = useProps();

	return (
		<motion.div
			className={`cursor ${cursorActive ? 'cursorActive' : ''}`}
			animate={cursorVariant}
			variants={variants}
			style={{ backgroundColor: cursorBg, color: cursorColor }}>
			<p>{language ? 'Sprawdź' : 'Check it out'}</p>
		</motion.div>
	);
}

export default Cursor;
