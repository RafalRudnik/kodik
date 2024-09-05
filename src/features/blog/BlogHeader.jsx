import { useProps } from '../../context/AppContext';
import { motion } from 'framer-motion';

function BlogHeader() {
	const { language } = useProps();

	return (
		<div className='container blog'>
			<motion.div
				className='blog-bgc'
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 0.3 }}></motion.div>
			<div className='blog-title'>
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.7 }}>
					iChronicles
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.2 }}>
					{language ? 'Blog muzyczny' : 'Music blog'}
				</motion.p>
			</div>
			<motion.div
				className='blog-airpods'
				initial={{ right: 0, opacity: 0 }}
				animate={{ right: '10%', opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}>
				<img src='/img/airpods.png' alt='airpods'></img>
			</motion.div>
		</div>
	);
}

export default BlogHeader;
