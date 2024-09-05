import ContactDesc from './ContactDesc';
import ContactTitle from './ContactTitle';

function ContactHeader() {
	return (
		<div className='container contact'>
			<ContactTitle />
			<ContactDesc />
		</div>
	);
}

export default ContactHeader;
