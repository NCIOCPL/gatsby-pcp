import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { SEO } from '../components/Seo';

const NotFoundPage = () => {
	return (
		<Layout>
			<div>
				<h1>Page Not Found</h1>
				<p>We can&#39;t find the page you&#39;re looking for.</p>
				<p>
					Visit the <Link to={'/'}>homepage</Link>.
				</p>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export function Head() {
	return (
		<>
			<html lang="en" />
			<SEO title="Page not found" />
		</>
	);
}
