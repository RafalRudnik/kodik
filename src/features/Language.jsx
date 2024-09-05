import { useProps } from '../context/AppContext';

function Language() {
	const { language, handleLanguage } = useProps();

	return (
		<div className='language'>
			<button onClick={handleLanguage}>{language ? 'GB' : 'PL'}</button>
			<p>-</p>
		</div>
	);
}

export default Language;
