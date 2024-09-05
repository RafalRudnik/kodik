import WorkParalaxItem from './WorkParalaxItem';
import { items1, items2, items3 } from '../../context/constans';
import { useProps } from '../../context/AppContext';

function WorkParalax() {
	const { language } = useProps();

	return (
		<div className='paralax'>
			<WorkParalaxItem
				word={language ? 'Wizja' : 'Vision'}
				items={items1}
				key={1}
			/>
			<WorkParalaxItem
				word={language ? 'Pasja' : 'Passion'}
				items={items2}
				key={2}
			/>
			<WorkParalaxItem
				word={language ? 'Szczegółowość' : 'Details'}
				items={items3}
				key={3}
			/>
		</div>
	);
}

export default WorkParalax;
