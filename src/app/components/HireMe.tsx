import Link from 'next/link';
import React from 'react';
import { CircularText } from './Icons';

const HireMe: React.FC = () => {
	return (
		<div className='fixed left-4 bottom-4 flex items-center justify-center'>
			<div className="w-48 h-auto flex items-center justify-center relative">
			<CircularText className='fill-dark animate-spin-slow' />
				<Link 
					className='w-24 h-24 flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
						bg-dark text-light border border-solid border-dark rounded-full font-semibold hover:bg-light hover:text-dark' 
					href="mailto:gaston.saavedra@me.com" target='_blank'>
					Hire me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
