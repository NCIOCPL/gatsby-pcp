import React from 'react';
import { ChildLink } from './Styled';
import { Link } from 'gatsby';
import { SearchBar } from './SearchBar';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import '../scss/components/_top-navigation.scss';

function navigationLink(link, index) {
	return (
		<li key={index}>
			<Link to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
				{link.name}
			</Link>
		</li>
	);
}
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
		if (index == 0) {
			return navigationLink(link, index);
		}
		let subLinkList = '';
		if (link.sublinks != null) {
			subLinkList = link.sublinks.map((link, index) => {
				return childNavigationLink(link, index);
			});
		}
		return (
			<li key={index}>
				<ChildLink to={link.link} activeClassName={'active'} className={'top-navigation-link'}>
					{link.name}
				</ChildLink>
				<ul className={'second-tier'}>{subLinkList}</ul>
			</li>
		);
	});
	return (
		<nav className={'top-bar'} data-options={'custom_back_text:false; scrolltop:false'}>
			<div className={'top-bar-container'}>
				<section className={'top-bar-section'} aria-hidden={'true'}>
					<ul className={'first-tier'}>{linkList}</ul>
				</section>
				<div className={'searchbar-container'}>
					<SearchBar></SearchBar>
				</div>
			</div>
		</nav>
	);
};
