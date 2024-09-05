import { useProps } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

function ErrorPage() {
	const { language } = useProps();

	return (
		<div className='container error'>
			<motion.h2
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}>
				Ups!{' '}
				{language
					? 'Trafiłeś na podstronę która nie istnieje'
					: 'You have reached a subpage that does not exist'}
			</motion.h2>
			<div>
				<Link to='/'>
					{language ? 'Wróć na właściwy tor' : 'Go back to home page'}{' '}
					<FiArrowUpRight />
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
