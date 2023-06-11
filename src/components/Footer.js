import React from 'react';
import EnvelopeIcon from '../svg/envelope.inline.svg';
import LinkedInIcon from '../svg/linkedin.inline.svg';
import TwitterIcon from '../svg/twitter.inline.svg';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import '../scss/components/_footer.scss';

export const Footer = () => {
	const { title, footerLinks, iconLinks } = useSiteMetadata();
	let linkList = footerLinks.map((link, index) => {
		return (
			<div className={'connect-icons'} key={index}>
				<a href={link.link}>{link.name}</a>
				<br />
			</div>
		);
	});
	let iconList = iconLinks.map((link, index) => {
		switch (link.name) {
			case 'Twitter':
				return (
					<a href={link.link} key={index}>
						<span className={'hidden'}>{link.text}</span>
						<TwitterIcon id={'footer-twitter-icon'} className={'connect-icon'} height={link.height} width={link.width} />
					</a>
				);
			case 'Linkedin':
				return (
					<a href={link.link} key={index}>
						<span className={'hidden'}>{link.text}</span>
						<LinkedInIcon id={'footer-linkedin-icon'} className={'connect-icon'} height={link.height} width={link.width} />
					</a>
				);
			case 'email':
				return (
					<a href={link.link} key={index}>
						<span className={'hidden'}>{link.text}</span>
						<EnvelopeIcon id={'footer-email-icon'} className={'connect-icon'} height={link.height} width={link.width} />
					</a>
				);
		}
		return (
			<a href={link.link} key={index}>
				{link.name}
			</a>
		);
	});
	return (
		<footer className={'footer'} role={'contentinfo'}>
			<div className={'pcp-grid-section'}>
				<div className={'desktop-constrained'}>
					<div className={'grid-row'}>
						<div className={'grid-col-12'}>
							<h3>{title}</h3>
							{linkList}
							<div className={'connect-icons'}>{iconList}</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'footer-endcap'} />
		</footer>
	);
};
