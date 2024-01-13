"use client"

import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { GithubIcon, LinkedInIcon } from './Icons';

const CustomLink: React.FC<{ title: string, href: string; className?: string }> = ({ title, href, className = '' }) => {
	const path = usePathname();	
	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span className=
				{`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
				transition-[width] ease duration-300
				${path == href ? 'w-full' : 'w-0'}`}></span>
		</Link>
	);
}

const Navbar: React.FC = () => {
	return (
		<header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
			<nav>
				<CustomLink href='/' title='Home' className='mr-2' />
				<CustomLink href='/about' title='About' className='mx-4'/>
				<CustomLink href='/projects' title='Project' className='mx-4'/>
				<CustomLink href='/articles' title='Articles' className='mx-4'/>
			</nav>

			<nav className='flex items-center justify-center flex-wrap'>
				<Link className='w-6 mr-3' href="https://github.com/GastonAllende" target='_blank'>	<GithubIcon/></Link>
				<Link className='w-6 mr-3' href="https://www.linkedin.com/in/gaston-allende-520b1734" target='_blank'>	<LinkedInIcon/></Link>
			</nav>

			<div className='absolute left-[50%] top-2 translate-x-[-50%]'>
				<Logo/>
			</div>
		</header>

	);
};

export default Navbar;
