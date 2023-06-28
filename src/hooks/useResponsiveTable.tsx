import { useState, useEffect } from 'react';

interface ResponsiveValues {
	columnSize: number;
	fontSize: string;
	titleFontSize: string;
    isMobile: boolean;
}

export const useResponsiveTable = (): ResponsiveValues => {
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => setViewportWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);

		// Cleanup function
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	let columnSize: number;
	let fontSize: string;
	let titleFontSize: string;
    let isMobile: boolean;

	if (viewportWidth < 1080) {
		columnSize = 30;
		fontSize = '0.5rem';
		titleFontSize = '0.6rem';
        isMobile = true;
	} else if (viewportWidth < 1740) {
		columnSize = 80;
		fontSize = '0.8rem';
		titleFontSize = '1rem';
        isMobile = false;
	} else {
		columnSize = 100;
		fontSize = '1rem';
		titleFontSize = '1.2rem';
        isMobile = false;
	}

	return { columnSize, fontSize, titleFontSize, isMobile };
};