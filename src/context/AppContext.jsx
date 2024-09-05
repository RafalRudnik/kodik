import { createContext, useContext, useReducer, useState } from 'react';

const initialState = {
	cursorBg: '#fff',
	cursorColor: '#000',
	cursorActive: false,
	src: '/img/Glasses-min.png',
};

function reducer(state, action) {
	switch (action.type) {
		case 'cursorOn':
			return { ...state, cursorActive: true };
		case 'cursorOff':
			return { ...state, cursorActive: false };
		case 'color':
			return { ...state, cursorColor: action.payload };
		case 'bgColor':
			return { ...state, cursorBg: action.payload };
		case 'imgSrc':
			return { ...state, src: action.payload };
		default:
			throw new Error('unknown action type');
	}
}

const AppContext = createContext();

function DataProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { cursorActive, cursorBg, cursorColor, src } = state;
	const [language, setLanguage] = useState(true);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [currOpen, setCurrOpen] = useState(null);

	const cursorVariant = 'default';
	const variants = {
		default: {
			x: mousePosition.x + 10,
			y: mousePosition.y + 10,
		},
	};

	function handleLanguage() {
		setLanguage((language) => !language);
	}

	return (
		<AppContext.Provider
			value={{
				dispatch,
				cursorActive,
				cursorBg,
				cursorColor,
				cursorVariant,
				variants,
				mousePosition,
				setMousePosition,
				language,
				handleLanguage,
				currOpen,
				setCurrOpen,
				src,
			}}>
			{children}
		</AppContext.Provider>
	);
}

function useProps() {
	const context = useContext(AppContext);
	if (context === undefined)
		throw new Error('useProps was used outside Provider');
	return context;
}

export { DataProvider, useProps };
