import React from 'react';
import { ChildLink } from './Styled';
import { SearchBar } from './SearchBar';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import '../scss/components/_top-navigation.scss';
import { slide as Menu } from 'react-burger-menu';
import HamburgerIcon from '../svg/hamburger-cg.inline.svg';

/*function navigationLink(link, index) {
	return (
		<li key={index}>
			<ChildLink  to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
				{link.name}
			</ChildLink >
		</li>
	);
}*/
function childNavigationLink(link, index) {
	/*let subLinkList = '';
		if (link.sublinks != null ) {
				subLinkList = link.sublinks.map((link,index)=>{
						return navigationLink(link, index);
				});
		}*/
	return (
		<li key={index} className={'second-tier'}>
			<ChildLink to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
				{link.name}
			</ChildLink>
			{/*<ul className={"third-tier"}>{ subLinkList }</ul>*/}
		</li>
	);
}
export const TopNavigation = () => {
	const { menuLinks } = useSiteMetadata();
	let linkList = menuLinks.map((link, index) => {
		let subLinkList = '';
		if (link.sublinks != null) {
			subLinkList = link.sublinks.map((link, index) => {
				return childNavigationLink(link, index);
			});
			return (
				<li key={index}>
					<ChildLink to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
						{link.name}
					</ChildLink>
					<ul className={'second-tier'}>{subLinkList}</ul>
				</li>
			);
		}
		return (
			<li key={index}>
				<ChildLink to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
					{link.name}
				</ChildLink>
			</li>
		);
	});

	return (
		<nav className={'top-bar'} data-options={'custom_back_text:false; scrolltop:false'}>
			<div className={'top-bar-container'}>
				<section className={'top-bar-section'} aria-hidden={'false'}>
					<ul className={'first-tier'}>{linkList}</ul>
				</section>
				<div className={'hamburger-container'}>
					<Menu customBurgerIcon={<HamburgerIcon className={''} width={'20px'} height={'16px'} />} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
						<ul className={'hamburger-first-tier'}>{linkList}</ul>
					</Menu>
				</div>
				<div className={'searchbar-container'}>
					<SearchBar></SearchBar>
				</div>
			</div>
		</nav>
	);
};
