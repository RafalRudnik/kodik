import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useProps } from '../../context/AppContext';

function BlogFoot() {
	const { language } = useProps();

	return (
		<div className='container-fluid blog-foot'>
			<motion.div
				className='blog-foot--bgc'
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				transition={{ duration: 0.4 }}></motion.div>
			<div className='container blog-foot--txt'>
				<motion.div
					className='blog-foot--img'
					initial={{ opacity: 0.2 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}>
					<img src='/img/blog4-min.png' alt='blog details'></img>
					<div>
						<p>{language ? 'Rzadki' : 'Rare'}</p>
						<p>{language ? 'Wyszukany' : 'Sophisticated'}</p>
						<p>{language ? 'Niepowtarzalny' : 'Unique'}</p>
						<p>{language ? 'Vintage' : 'Vintage'}</p>
					</div>
					<div>
						<p>{language ? 'Wybrane' : 'Selected'}</p>
						<p>{language ? 'Zapomniane' : 'Forgotten'}</p>
						<p>{language ? 'Zagubione' : 'Lost'}</p>
						<p>{language ? 'i Znalezione' : 'and Found'}</p>
					</div>
				</motion.div>
				<a href='https://ichronicles.io/' rel='noreferer' target='_blank'>
					{language ? 'Sluchaj' : 'Go and listen'} <FiArrowUpRight />
				</a>
			</div>
		</div>
	);
}

export default BlogFoot;
