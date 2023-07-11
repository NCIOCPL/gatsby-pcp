import React from 'react';
import { SiteTitle } from './SiteTitle';
import { TopNavigation } from './TopNavigation';
import '../scss/components/_header.scss';

class Header extends React.Component {
	render() {
		return (
			<header role={'banner'} className={'header'}>
				<SiteTitle></SiteTitle>
				<TopNavigation></TopNavigation>
			</header>
		);
	}
}

export default Header;
