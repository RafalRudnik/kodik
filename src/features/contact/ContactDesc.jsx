import { useProps } from '../../context/AppContext';
import { FiArrowUpRight } from 'react-icons/fi';
import {
	contactDesc,
	contactDescGb,
	contactDesc2,
	contactDescGb2,
	contactDesc3,
	contactDescGb3,
} from '../../context/constans';
import { motion } from 'framer-motion';

function ContactDesc() {
	const { language } = useProps();

	return (
		<div className='contact-desc'>
			<div className='contact-desc--one'>
				<motion.h3
					initial={{ rotateX: 180, opacity: 0 }}
					animate={{ rotateX: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.9 }}>
					{language ? 'Bądźmy w kontacie' : 'Let`s stay in touch'}{' '}
					<FiArrowUpRight />
				</motion.h3>
				<p>{language ? contactDesc : contactDescGb}</p>
				<motion.h4
					initial={{ rotateX: 180, opacity: 0 }}
					animate={{ rotateX: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 1.1 }}>
					HELLO@KODIK.IO
				</motion.h4>
			</div>
			<motion.div
				className='contact-desc--two'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 1 }}>
				<h3>
					{language ? 'Sugestie, uwagi?' : 'Suggestions, comments?'}{' '}
					<FiArrowUpRight />
				</h3>
				<p>{language ? contactDesc2 : contactDescGb2}</p>
				<h3>
					{language ? 'Pracujmy razem' : 'Let`s work together'}{' '}
					<FiArrowUpRight />
				</h3>
				<p>{language ? contactDesc3 : contactDescGb3}</p>
			</motion.div>
		</div>
	);
}

export default ContactDesc;
