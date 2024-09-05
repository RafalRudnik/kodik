import { FiArrowUpRight } from 'react-icons/fi';
import { useProps } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { footerLink } from '../context/constans';
import { motion } from 'framer-motion';

function FooterList() {
	const { language } = useProps();

	return (
		<div className='footer-links'>
			<ul>
				{footerLink.map((item, i) => (
					<FooterListItem item={item} key={i} index={i} language={language} />
				))}
				<li>
					<Link to={language ? '/policypl' : '/policy'}>
						{language ? 'Polityka Prywatności' : 'Privacy Policy'}{' '}
					</Link>
					<FiArrowUpRight />
				</li>
			</ul>
			<FooterAddress />
		</div>
	);
}

export default FooterList;

function FooterListItem({ item, index, language }) {
	const fadeIn = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.2 * index,
				duration: 0.3,
			},
		}),
	};

	return (
		<motion.li
			variants={fadeIn}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			custom={index}>
			<Link to={item.link} target={item.target}>
				{language ? item.namePl : item.name}
			</Link>
			<FiArrowUpRight />
		</motion.li>
	);
}

function FooterAddress() {
	return (
		<motion.div
			className='footer-links--address'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.4 }}
			viewport={{ once: true }}>
			<p>kodik</p>
			{/* <p>VAT</p> */}
			<p>Gdańsk Poland</p>
			<p>hello@kodik.io</p>
		</motion.div>
	);
}
