import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer: React.FC = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
			<Layout className='py-8 flex items-center justify-between'>
				<span>{ new Date().getFullYear() } &copy; All Rights Reserved</span>
				<Link href='test.pdf'>Gaston Allende</Link>
				<Link href='test.pdf'>Say hello</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
