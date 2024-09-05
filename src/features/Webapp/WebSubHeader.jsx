import { useProps } from '../../context/AppContext';
import { webSubHead, webSubHeadGb } from '../../context/constans';

function WebSubHeader() {
	const { language } = useProps();

	return (
		<div className='container'>
			<div className='web-sub'>
				<span>{language ? 'w kodik' : 'in kodik'} </span>
				<p>{language ? webSubHead : webSubHeadGb}</p>
			</div>
		</div>
	);
}

export default WebSubHeader;
