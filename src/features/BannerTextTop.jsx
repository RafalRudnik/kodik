import { useProps } from '../context/AppContext';
import { bannerTxt, bannerTxtGb } from '../context/constans';

function BannerTextTop() {
	const { language } = useProps();

	return <span>{language ? bannerTxt : bannerTxtGb}</span>;
}

export default BannerTextTop;
