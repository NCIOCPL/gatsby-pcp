import React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import HeroImage from '../HeroImage';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

describe('HeroImage component', () => {
	beforeAll(() => {
		useStaticQuery.mockReturnValue({
			images: {
				edges: [
					{
						node: {
							id: 'image-1',
							src: 'mocked-image.jpg',
							alt: 'Mocked Image',
						},
					},
				],
			},
		});
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders the correct alt prop value', () => {
		const altText = 'Test Alt Text';
		render(<HeroImage sourcedesktop="" sourcetablet="" alt={altText} />);
		expect(screen.getByAltText(altText)).toBeInTheDocument();
	});
});
