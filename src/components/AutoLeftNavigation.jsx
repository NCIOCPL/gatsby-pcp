import React from 'react';
import { useGetNodes } from '../hooks/use-get-nodes';
import '../scss/components/_left-nav-multipage.scss';
import PropTypes from 'prop-types';
import { ChildLink } from './Styled';

export const AutoLeftNavigation = ({ path }) => {
	function navigationLink(link, index) {
		let displayText = link.node.frontmatter.title;
		if (link.node.frontmatter.linktext) {
			displayText = link.node.frontmatter.linktext;
		}
		return (
			<li key={index} className={'nav-item'}>
				<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
					{displayText}
				</ChildLink>
			</li>
		);
	}

	function subNavigationLink(link, index) {
		let subLinkList = '';
		let displayText = link.node.frontmatter.title;
		if (link.node.frontmatter.linktext) {
			displayText = link.node.frontmatter.linktext;
		}
		if (link.node.sublinks != null) {
			subLinkList = link.node.sublinks.map((link, index) => {
				return navigationLink(link, index);
			});
			return (
				<li key={index} className={'nav-item'}>
					<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
						{displayText}
					</ChildLink>
					<ul className={'fourth-tier'}>{subLinkList}</ul>
				</li>
			);
		}

		return (
			<li key={index} className={'nav-item'}>
				<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
					{displayText}
				</ChildLink>
			</li>
		);
	}

	function childNavigationLink(link, index) {
		let subLinkList = '';
		let displayText = link.node.frontmatter.title;
		if (link.node.frontmatter.linktext) {
			displayText = link.node.frontmatter.linktext;
		}
		if (link.node.sublinks != null) {
			subLinkList = link.node.sublinks.map((link, index) => {
				if (link.node.sublinks != null) {
					return subNavigationLink(link, index);
				}
				return navigationLink(link, index);
			});
			return (
				<li key={index} className={'nav-item'}>
					<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
						{displayText}
					</ChildLink>
					<ul className={'third-tier'}>{subLinkList}</ul>
				</li>
			);
		}
		return (
			<li key={index} className={'nav-item'}>
				<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
					{displayText}
				</ChildLink>
			</li>
		);
	}
	function updateNavObject(current, targetKey, value) {
		if (current) {
			if (!Object.prototype.hasOwnProperty.call(current, targetKey)) {
				current[targetKey] = [];
			}
			current[targetKey].push(value);
		}
	}
	function linkTier(navRoot) {
		let slugList = edges
			.filter((element) => element.node.parent.relativeDirectory.includes(navRoot))
			.sort((a, b) => {
				return a.node.parent.relativeDirectory > b.node.parent.relativeDirectory ? 1 : a.node.parent.relativeDirectory < b.node.parent.relativeDirectory ? -1 : 0;
			})
			.sort((a, b) => {
				return a.node.frontmatter.sortOrder > b.node.frontmatter.sortOrder ? 1 : a.node.frontmatter.sortOrder < b.node.frontmatter.sortOrder ? -1 : 0;
			});
		let folderList = slugList.filter((element) => element.node.parent.name === 'index');
		let looseItemList = slugList.filter((element) => element.node.parent.name !== 'index');
		let navList = [];
		navList.push(folderList[0]);
		let currentDirectoryLevel = 0;
		let currentDirectory = '';
		let currentDirectories = [];
		//Build index folder structure
		folderList.forEach(function (link) {
			currentDirectory = link.node.parent.relativeDirectory;
			currentDirectories = currentDirectory.split('/');
			currentDirectoryLevel = currentDirectories.length;
			let parentDirectory = '';
			let searchDirectory = currentDirectory;
			if (currentDirectoryLevel > 1) {
				for (let i = 0; i < currentDirectoryLevel - 1; i++) {
					if (i === 0) {
						parentDirectory += currentDirectories[i];
					} else {
						parentDirectory += '/' + currentDirectories[i];
					}
				}
				searchDirectory = parentDirectory;
			}
			if ((currentDirectoryLevel === 1 && link.node.parent.name !== 'index') || currentDirectoryLevel > 1) {
				let indexDirectoryItem = folderList.filter((element) => element.node.parent.relativeDirectory === searchDirectory);
				if (indexDirectoryItem && indexDirectoryItem[0] && indexDirectoryItem[0].node && indexDirectoryItem[0].node.sublinks) {
					let itemAlreadyPresent = indexDirectoryItem[0].node.sublinks.find((item) => item.node.parent.relativeDirectory === link.node.parent.relativeDirectory);
					if (!itemAlreadyPresent) {
						updateNavObject(indexDirectoryItem[0].node, 'sublinks', link);
					}
				} else {
					if (indexDirectoryItem && indexDirectoryItem[0] && indexDirectoryItem[0].node) {
						updateNavObject(indexDirectoryItem[0].node, 'sublinks', link);
					}
				}
			}
		});
		looseItemList.forEach(function (link) {
			let indexDirectoryItem = folderList.filter((element) => element.node.parent.relativeDirectory === link.node.parent.relativeDirectory).filter((element) => element.node.parent.name === 'index');
			if (indexDirectoryItem && indexDirectoryItem[0] && indexDirectoryItem[0].node) {
				if (indexDirectoryItem[0].node.sublinks) {
					let itemAlreadyPresent = indexDirectoryItem[0].node.sublinks.find((item) => item.node.parent.name === link.node.parent.name);
					if (!itemAlreadyPresent) {
						updateNavObject(indexDirectoryItem[0].node, 'sublinks', link);
					}
				} else {
					updateNavObject(indexDirectoryItem[0].node, 'sublinks', link);
				}
				if (indexDirectoryItem[0].node.frontmatter.template === 'blogs') {
					indexDirectoryItem[0].node.sublinks.sort((a, b) => {
						return a.node.frontmatter.date < b.node.frontmatter.date ? 1 : a.node.frontmatter.date > b.node.frontmatter.date ? -1 : 0;
					});
				} else {
					indexDirectoryItem[0].node.sublinks.sort((a, b) => {
						return a.node.frontmatter.sortOrder > b.node.frontmatter.sortOrder ? 1 : a.node.frontmatter.sortOrder < b.node.frontmatter.sortOrder ? -1 : 0;
					});
				}
			}
		});

		let linkList = navList.map((link, index) => {
			let subLinkList = '';
			let displayText = link.node.frontmatter.title;
			if (link.node.frontmatter.linktext) {
				displayText = link.node.frontmatter.linktext;
			}
			if (link.node.sublinks != null) {
				subLinkList = link.node.sublinks.map((link, index) => {
					return childNavigationLink(link, index);
				});
			}
			if (subLinkList && subLinkList !== '') {
				return (
					<li key={index + 1} className={'nav-item'}>
						<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
							{displayText}
						</ChildLink>
						<ul role={'navigation'} className="second-tier">
							{subLinkList}
						</ul>
					</li>
				);
			}
			return (
				<li key={index + 1} className={'nav-item'}>
					<ChildLink to={'/' + link.node.parent.relativeDirectory + (link.node.parent.name !== 'index' ? '/' + link.node.parent.name : '')} className={'left-nav-item'} data-section-raw-title={displayText} data-section-aliased-title={displayText} data-section-id={index + 1} activeClassName={'active'}>
						{displayText}
					</ChildLink>
				</li>
			);
		});
		return (
			<ul role={'navigation'} className="first-tier">
				{linkList}
			</ul>
		);
	}

	const { edges } = useGetNodes();
	let pathEntries = path.relativeDirectory.split('/');

	let navRoot = pathEntries[0];
	let leftnavList = [];
	leftnavList = linkTier(navRoot);
	//window.console&&console.log('leftnavList',leftnavList);

	return (
		<div className={'left-nav top-nav-list'}>
			<ul role={'navigation'}>{leftnavList}</ul>
		</div>
	);
};

AutoLeftNavigation.propTypes = {
	path: PropTypes.object.isRequired,
};
